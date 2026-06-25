import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SetupNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      const btn = e.target.closest('[data-navigate]');
      if (btn) {
        navigate(btn.getAttribute('data-navigate'));
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  return null;
}

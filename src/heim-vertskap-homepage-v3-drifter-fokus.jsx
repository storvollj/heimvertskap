import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Shield, Users, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function HeimVertkapHomepageV2() {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const reviews = [
    {
      name: "Knut Henriksen",
      role: "Eiendomseier, Tromsø",
      metric: "35% → 82% belegg",
      text: "Teknologien gjør det meste. Prisene justeres automatisk, gjester får svar på sekunder, alt synkroniseres. Jeg tjener 15 000 kr/mnd uten å gjøre noe.",
      rating: 5
    },
    {
      name: "Silje Andersen",
      role: "Eiendomseier, Tromsø",
      metric: "20 timer/mnd spart",
      text: "Før: Excel, manuell prising, stresset over gjestespørsmål. Nå: Automatisk. Jeg sjekker rapport hver måned og det er det.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [autoPlay, reviews.length]);

  const currentReview = reviews[currentReviewIdx];

  const pillars = [
    {
      icon: TrendingUp,
      title: 'Datadrevet optimalisering',
      desc: 'PriceLabs + AirDNA analyserer marked og konkurranse. Prisene justeres automatisk basert på etterspørsel — ikke gjetting.',
    },
    {
      icon: Zap,
      title: 'Profesjonelle driftssystemer',
      desc: 'Hostaway, multi-OTA-synkronisering, automatiserte arbeidsflyter. Vi driver som overnattingsbedrift — ikke manual drift.',
    },
    {
      icon: Shield,
      title: 'Moderne AI & automatisering',
      desc: 'Claude AI håndterer gjestekommunikasjon, analyser og rapporter. Raskere respons, mindre manuelt arbeid.',
    },
    {
      icon: Users,
      title: 'Lokal vertskapskompetanse',
      desc: '350+ gjester, 4.98⭐ Airbnb, 9.7/10 Booking. Vi vet hva som funker i Tromsø-markedet siden 2023.',
    },
  ];

  const packages = [
    {
      name: 'Oppstart',
      desc: 'Setup av platformer, bilder, system. Mentoring for nybegynnere.',
      price: 'Fra kr 12 000',
      cta: 'Les mer'
    },
    {
      name: 'Optimalisering',
      desc: 'Prising-hjelp, driftsrapporter, AI-setup. Du driver — vi optimaliserer.',
      price: 'Fra kr 4 500/mnd',
      cta: 'Les mer'
    },
    {
      name: 'Multi-unit & Partner',
      desc: 'Skalering av flere enheter, leirsteder, kompleks drift. Skreddersydd løsning.',
      price: 'Kontakt oss',
      cta: 'Diskuter'
    }
  ];

  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ========== HEADER ========== */}
      <header style={{
        background: COLORS.dark,
        padding: '16px 24px',
        borderBottom: `1px solid ${COLORS.light}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>
            Heim <span style={{ color: COLORS.red }}>Vertskap</span>
          </div>
          <nav style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
            <a href="#" style={{ color: COLORS.light, textDecoration: 'none' }}>Full Drift</a>
            <a href="#" style={{ color: COLORS.light, textDecoration: 'none' }}>Pakker</a>
            <a href="#" style={{ color: COLORS.red, textDecoration: 'none', fontWeight: '600' }}>Om oss</a>
          </nav>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section style={{
        background: `linear-gradient(135deg, ${COLORS.dark} 0%, #3E2628 100%)`,
        color: '#fff',
        padding: '100px 24px 80px',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: COLORS.red,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            Profesjonell korttidsutleie
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 68px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Driftssystemer.<br />
            Datadrevet optimalisering.<br />
            AI-automatisering.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Heim Vertskap kombinerer lokal vertskapskompetanse med hotellverktøy, dynamisk prising og moderne AI for profesjonell korttidsutleie.
          </p>

          <button style={{
            background: COLORS.red,
            color: '#fff',
            border: 'none',
            padding: '16px 40px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
          }}>
            Book gratis befaring →
          </button>

          {/* Ratings */}
          <div style={{
            marginTop: '48px',
            display: 'flex',
            gap: '40px',
            fontSize: '14px',
          }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: COLORS.red }}>4.98⭐</div>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>Airbnb</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: COLORS.red }}>9.7/10</div>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>Booking.com</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: COLORS.red }}>350+</div>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>gjester siden 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOUR PILLARS ========== */}
      <section style={{
        padding: '80px 24px',
        background: COLORS.dark,
        color: '#fff',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            marginBottom: 60,
            textAlign: 'center',
            lineHeight: 1.2,
          }}>
            Slik gjør vi det
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32,
          }}>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx}>
                  <Icon size={40} style={{ color: COLORS.red, marginBottom: 16 }} />
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}>
                    {pillar.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FULL DRIFT SECTION ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            background: COLORS.dark,
            color: '#fff',
            padding: '60px 40px',
            borderRadius: 12,
            marginBottom: 60,
          }}>
            <h2 style={{
              fontSize: 36,
              fontWeight: 800,
              marginBottom: 24,
            }}>
              Full Drift
            </h2>
            <p style={{
              fontSize: 18,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 700,
            }}>
              Vi håndterer alt: annonser, gjestekommunikasjon, dynamisk prising, rengjøring-koordinering, rapporter. Du sitter igjen med 80% av netto inntekt.
            </p>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '24px',
              borderRadius: 8,
              marginBottom: 32,
              borderLeft: `4px solid ${COLORS.red}`,
            }}>
              <div style={{ fontSize: 13, lineHeight: 2, color: 'rgba(255,255,255,0.9)' }}>
                <div>50 000 kr (etter provisjon til Airbnb/Booking)</div>
                <div style={{ color: 'rgba(255,255,255,0.6)' }}>- 2 000 kr vaskegebyr (lagt på gjest)</div>
                <div style={{ fontWeight: 700, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.2)' }}>= 48 000 kr netto</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>- 9 600 kr (20% Heim Vertskap)</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.red, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.2)' }}>= 38 400 kr til deg</div>
              </div>
            </div>

            <button style={{
              background: COLORS.red,
              color: '#fff',
              border: 'none',
              padding: '14px 32px',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
            }}>
              Les mer om Full Drift →
            </button>
          </div>

          {/* Reviews */}
          <h3 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 40,
            textAlign: 'center',
          }}>
            Fra ekte prosjekter
          </h3>

          <div style={{
            background: COLORS.dark,
            color: '#fff',
            padding: '48px 32px',
            borderRadius: 12,
            textAlign: 'center',
            minHeight: 280,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            {/* Stars */}
            <div style={{ marginBottom: 24 }}>
              {[...Array(currentReview.rating)].map((_, i) => (
                <span key={i} style={{ fontSize: 28 }}>⭐</span>
              ))}
            </div>

            <p style={{
              fontSize: 18,
              fontStyle: 'italic',
              lineHeight: 1.8,
              marginBottom: 24,
              maxWidth: 700,
              margin: '0 auto 24px',
            }}>
              "{currentReview.text}"
            </p>

            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 16, fontWeight: 700, margin: 0, marginBottom: 4 }}>
                {currentReview.name}
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0, marginBottom: 12 }}>
                {currentReview.role}
              </p>
              <p style={{ fontSize: 14, color: COLORS.red, fontWeight: 700, margin: 0 }}>
                {currentReview.metric}
              </p>
            </div>

            {/* Nav */}
            <div style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 24,
            }}>
              <button
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentReviewIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
                }}
                style={{
                  background: 'transparent',
                  border: `1px solid ${COLORS.red}`,
                  color: COLORS.red,
                  padding: '8px 12px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                ← Forrige
              </button>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                {currentReviewIdx + 1} / {reviews.length}
              </span>
              <button
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentReviewIdx((prev) => (prev + 1) % reviews.length);
                }}
                style={{
                  background: 'transparent',
                  border: `1px solid ${COLORS.red}`,
                  color: COLORS.red,
                  padding: '8px 12px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                Neste →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OTHER PACKAGES ========== */}
      <section style={{
        padding: '80px 24px',
        background: COLORS.dark,
        color: '#fff',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 48,
            textAlign: 'center',
          }}>
            Andre pakker
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: '#3E2628',
                  padding: '32px',
                  borderRadius: 8,
                  border: `1px solid ${COLORS.light}`,
                }}
              >
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                }}>
                  {pkg.name}
                </h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: 24,
                  minHeight: 60,
                }}>
                  {pkg.desc}
                </p>
                <div style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: COLORS.red,
                  marginBottom: 16,
                }}>
                  {pkg.price}
                </div>
                <button style={{
                  background: 'transparent',
                  border: `1px solid ${COLORS.red}`,
                  color: COLORS.red,
                  padding: '10px 20px',
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  {pkg.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section style={{
        padding: '80px 24px',
        background: COLORS.dark,
        color: '#fff',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 24,
          }}>
            Klart å begynne?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Vi møter deg i Tromsø. Vi ser eiendommen, svarer på spørsmål, og viser hvordan det fungerer.
          </p>
          <button style={{
            background: COLORS.red,
            color: '#fff',
            border: 'none',
            padding: '18px 48px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 18,
            cursor: 'pointer',
          }}>
            Book gratis befaring →
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer style={{
        padding: '40px 24px',
        background: '#1E0E0F',
        color: 'rgba(255,255,255,0.7)',
        fontSize: 13,
        textAlign: 'center',
      }}>
        <p style={{ margin: '0 0 12px' }}>
          <strong style={{ color: '#fff' }}>Heim Vertskap AS</strong> — Profesjonell drift av korttidsutleie i Nord-Norge.
        </p>
        <p style={{ margin: 0 }}>
          Tromsø | <a href="mailto:hei@heimvertskap.no" style={{ color: COLORS.red, textDecoration: 'none' }}>hei@heimvertskap.no</a>
        </p>
      </footer>

    </div>
  );
}

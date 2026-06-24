import React from 'react';
import { Check, X } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function PakkerSammenligning() {
  const packages = [
    {
      name: 'Oppstart',
      desc: 'Setup & læring for nybegynnere',
      highlight: false,
      price: 'Fr. kr 12 000 eller kr 4 000/mnd',
      features: {
        'Annonse-setup': true,
        'Foto & bilder': true,
        'Hostaway-setup': true,
        'Husregler & husmanuell': true,
        'Prising første periode': true,
        'Gjestekommunikasjon (du lærer)': true,
        'Rengjøring-koordinering': true,
        'Første gjester-veiledning': true,
        'Månedlige rapporter': false,
        'Løpende optimalisering': false,
        'Full driftshåndtering': false,
        'Dedikert account manager': false,
        '24/7 gjestestøtte': false,
        'Skalering-support': false,
      },
      cta: 'Kom i gang',
      link: '/oppstart'
    },
    {
      name: 'Optimalisering',
      desc: 'Prising-hjelp for eksisterende verter',
      highlight: false,
      price: 'Fr. kr 4 500/mnd',
      features: {
        'Annonse-setup': false,
        'Foto & bilder': false,
        'Hostaway-setup': false,
        'Husregler & husmanuell': false,
        'Prising første periode': true,
        'Gjestekommunikasjon (du lærer)': false,
        'Rengjøring-koordinering': false,
        'Første gjester-veiledning': false,
        'Månedlige rapporter': true,
        'Løpende optimalisering': true,
        'Full driftshåndtering': false,
        'Dedikert account manager': false,
        '24/7 gjestestøtte': false,
        'Skalering-support': false,
      },
      cta: 'Kontakt oss',
      link: '/optimalisering'
    },
    {
      name: 'Full Drift',
      desc: 'Hands-off — vi gjør alt',
      highlight: true,
      price: '20% av netto inntekt',
      features: {
        'Annonse-setup': true,
        'Foto & bilder': true,
        'Hostaway-setup': true,
        'Husregler & husmanuell': true,
        'Prising første periode': true,
        'Gjestekommunikasjon (du lærer)': true,
        'Rengjøring-koordinering': true,
        'Første gjester-veiledning': true,
        'Månedlige rapporter': true,
        'Løpende optimalisering': true,
        'Full driftshåndtering': true,
        'Dedikert account manager': false,
        '24/7 gjestestøtte': true,
        'Skalering-support': false,
      },
      cta: 'Møt oss',
      link: '/full-drift'
    },
    {
      name: 'Partner',
      desc: 'Multi-unit skalering & skreddersøm',
      highlight: false,
      price: 'Individuelt avtalt',
      features: {
        'Annonse-setup': true,
        'Foto & bilder': true,
        'Hostaway-setup': true,
        'Husregler & husmanuell': true,
        'Prising første periode': true,
        'Gjestekommunikasjon (du lærer)': true,
        'Rengjøring-koordinering': true,
        'Første gjester-veiledning': true,
        'Månedlige rapporter': true,
        'Løpende optimalisering': true,
        'Full driftshåndtering': true,
        'Dedikert account manager': true,
        '24/7 gjestestøtte': true,
        'Skalering-support': true,
      },
      cta: 'Diskuter',
      link: '/partner'
    }
  ];

  const featureLabels = [
    'Annonse-setup',
    'Foto & bilder',
    'Hostaway-setup',
    'Husregler & husmanuell',
    'Prising første periode',
    'Gjestekommunikasjon (du lærer)',
    'Rengjøring-koordinering',
    'Første gjester-veiledning',
    'Månedlige rapporter',
    'Løpende optimalisering',
    'Full driftshåndtering',
    'Dedikert account manager',
    '24/7 gjestestøtte',
    'Skalering-support',
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
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>
            Heim <span style={{ color: COLORS.red }}>Vertskap</span>
          </div>
          <a href="/" style={{
            color: COLORS.red,
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: '600',
          }}>← Hjem</a>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section style={{
        background: `linear-gradient(135deg, ${COLORS.dark} 0%, #3E2628 100%)`,
        color: '#fff',
        padding: '80px 24px 60px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Alle pakker
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: 0,
            lineHeight: 1.7,
            maxWidth: 600,
          }}>
            Velg den som passer deg. Eller start med én og oppgrader senere.
          </p>
        </div>
      </section>

      {/* ========== PACKAGES CARDS ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            marginBottom: 60,
          }}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: COLORS.dark,
                  color: '#fff',
                  padding: '40px 32px',
                  borderRadius: 12,
                  border: pkg.highlight ? `3px solid ${COLORS.red}` : `1px solid ${COLORS.light}`,
                  position: 'relative',
                  transform: pkg.highlight ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s',
                }}
              >
                {pkg.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: COLORS.red,
                    color: '#fff',
                    padding: '4px 16px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}>
                    POPULÆR
                  </div>
                )}

                <h3 style={{
                  fontSize: 22,
                  fontWeight: 800,
                  margin: '0 0 12px',
                  marginTop: pkg.highlight ? 20 : 0,
                }}>
                  {pkg.name}
                </h3>

                <p style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.75)',
                  margin: '0 0 24px',
                  lineHeight: 1.5,
                }}>
                  {pkg.desc}
                </p>

                <div style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: COLORS.red,
                  marginBottom: 32,
                  paddingBottom: 32,
                  borderBottom: `1px solid rgba(255,255,255,0.2)`,
                }}>
                  {pkg.price}
                </div>

                <button style={{
                  width: '100%',
                  background: pkg.highlight ? COLORS.red : 'transparent',
                  color: pkg.highlight ? '#fff' : COLORS.red,
                  border: pkg.highlight ? 'none' : `2px solid ${COLORS.red}`,
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  marginBottom: 16,
                }}>
                  {pkg.cta} →
                </button>

                <a href={pkg.link} style={{
                  display: 'block',
                  textAlign: 'center',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                }}>
                  Les mer
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DETAILED COMPARISON TABLE ========== */}
      <section style={{
        padding: '80px 24px',
        background: COLORS.dark,
        color: '#fff',
        overflowX: 'auto',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 48,
            textAlign: 'center',
          }}>
            Detaljert sammenligning
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '1000px',
            }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${COLORS.red}` }}>
                  <th style={{
                    textAlign: 'left',
                    padding: '16px 12px',
                    fontWeight: 700,
                    fontSize: 14,
                    color: COLORS.red,
                  }}>
                    Funksjon
                  </th>
                  {packages.map((pkg, idx) => (
                    <th
                      key={idx}
                      style={{
                        textAlign: 'center',
                        padding: '16px 12px',
                        fontWeight: 700,
                        fontSize: 14,
                        color: pkg.highlight ? COLORS.red : '#fff',
                        background: pkg.highlight ? 'rgba(230, 81, 84, 0.1)' : 'transparent',
                      }}
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureLabels.map((label, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: `1px solid rgba(255,255,255,0.1)`,
                    }}
                  >
                    <td style={{
                      padding: '16px 12px',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.85)',
                    }}>
                      {label}
                    </td>
                    {packages.map((pkg, pidx) => (
                      <td
                        key={pidx}
                        style={{
                          textAlign: 'center',
                          padding: '16px 12px',
                          background: pkg.highlight ? 'rgba(230, 81, 84, 0.05)' : 'transparent',
                        }}
                      >
                        {pkg.features[label] ? (
                          <Check size={20} style={{ color: COLORS.red, margin: '0 auto' }} />
                        ) : (
                          <X size={20} style={{ color: 'rgba(255,255,255,0.3)', margin: '0 auto' }} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== VELG PAKKE ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 24,
          }}>
            Usikker?
          </h2>
          <p style={{
            fontSize: 18,
            color: COLORS.muted,
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Kontakt oss. Vi diskuterer din situasjon og anbefaler den beste løsningen.
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
            Chat med oss →
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer style={{
        padding: '40px 24px',
        background: COLORS.dark,
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

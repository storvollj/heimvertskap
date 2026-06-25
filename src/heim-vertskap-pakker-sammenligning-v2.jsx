import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function PakkerSammenligningSide() {
  const [view, setView] = useState('features');

  const packages = [
    {
      name: 'Oppstart',
      tagline: 'Vi lærer deg',
      price: 'Kr 4 000',
      period: '/mnd (3 mnd typisk)',
      cta: 'Kom i gang →',
      highlight: false,
      features: {
        setup: {
          'Oppsett av Airbnb': true,
          'Oppsett av Booking': true,
          'Opprettelse av annonse': true,
          'Professionelle bilder': 'Veiledning',
          'Oppsett av husregler': true,
        },
        systems: {
          'Setup av channel manager': true,
          'Setup av PMS (Hostaway)': true,
          'Grunnleggende prising': true,
          'Dynamisk prising': false,
          'AI-assistert kommunikasjon': false,
        },
        support: {
          'Møter og veiledning': true,
          'Gjeste-veiledning (første)': true,
          'Månedlige rapporter': false,
          'Løpende konsultasjon': 'Begrenset',
          'Dedikert kontaktperson': false,
        },
        result: 'Du får en profesjonell grunnmur med systemer som kan vokse sammen med utleien.',
      },
    },
    {
      name: 'Optimalisering',
      tagline: 'Du driver, vi optimaliserer',
      price: 'Kr 4 500+',
      period: '/mnd',
      cta: 'Kontakt for info →',
      highlight: false,
      features: {
        setup: {
          'Oppsett av Airbnb': false,
          'Oppsett av Booking': false,
          'Opprettelse av annonse': false,
          'Professionelle bilder': false,
          'Oppsett av husregler': false,
        },
        systems: {
          'Setup av channel manager': false,
          'Setup av PMS (Hostaway)': false,
          'Grunnleggende prising': 'Gjennomgang',
          'Dynamisk prising': true,
          'AI-assistert kommunikasjon': true,
        },
        support: {
          'Møter og veiledning': true,
          'Gjeste-veiledning (første)': false,
          'Månedlige rapporter': true,
          'Løpende konsultasjon': true,
          'Dedikert kontaktperson': false,
        },
        result: 'Vi identifiserer hvor potensialet ligger og hjelper deg med å hente det ut. Du beholder kontrollen.',
      },
    },
    {
      name: 'Full Drift',
      tagline: 'Vi håndterer alt',
      price: '20%',
      period: 'av netto inntekt',
      cta: 'Book befaring →',
      highlight: true,
      features: {
        setup: {
          'Oppsett av Airbnb': true,
          'Oppsett av Booking': true,
          'Opprettelse av annonse': true,
          'Professionelle bilder': true,
          'Oppsett av husregler': true,
        },
        systems: {
          'Setup av channel manager': true,
          'Setup av PMS (Hostaway)': true,
          'Grunnleggende prising': true,
          'Dynamisk prising': true,
          'AI-assistert kommunikasjon': true,
        },
        support: {
          'Møter og veiledning': true,
          'Gjeste-veiledning (første)': true,
          'Månedlige rapporter': true,
          'Løpende konsultasjon': true,
          'Dedikert kontaktperson': 'Avhengig av volum',
        },
        result: 'Du beholder eierskapet og oversikten. Vi håndterer den daglige driften.',
      },
    },
    {
      name: 'Partner',
      tagline: 'Skalering med system',
      price: 'Etter avtale',
      period: '',
      cta: 'Diskuter →',
      highlight: false,
      features: {
        setup: {
          'Oppsett av Airbnb': true,
          'Oppsett av Booking': true,
          'Opprettelse av annonse': true,
          'Professionelle bilder': true,
          'Oppsett av husregler': true,
        },
        systems: {
          'Setup av channel manager': true,
          'Setup av PMS (Hostaway)': true,
          'Grunnleggende prising': true,
          'Dynamisk prising': true,
          'AI-assistert kommunikasjon': true,
        },
        support: {
          'Møter og veiledning': true,
          'Gjeste-veiledning (første)': true,
          'Månedlige rapporter': true,
          'Løpende konsultasjon': true,
          'Dedikert kontaktperson': true,
        },
        result: 'Skalerbar drift uten at kompleksiteten tar overhånd.',
      },
    },
  ];

  const categories = [
    {
      key: 'setup',
      name: 'Setup & annonser',
    },
    {
      key: 'systems',
      name: 'Systemer & prising',
    },
    {
      key: 'support',
      name: 'Support & rapporter',
    },
  ];

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check size={20} style={{ color: COLORS.red }} />
      ) : (
        <X size={20} style={{ color: 'rgba(139, 139, 133, 0.3)' }} />
      );
    }
    return <span style={{ fontSize: 13, color: COLORS.muted }}>{value}</span>;
  };

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
          <nav style={{ display: 'flex', gap: 24, fontSize: 14 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Full Drift</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Optimalisering</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Oppstart</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Om oss</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.red, textDecoration: 'none', fontWeight: 600 }}>← Hjem</a>
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
          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Pakker sammenligning
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Velg modellen som passer deg best. Ingen "one-size-fits-all" — fire ulike måter å kjøpe profesjonell drift på.
          </p>
        </div>
      </section>

      {/* ========== PAKKER KORT ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 24,
            marginBottom: 60,
          }}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: pkg.highlight ? COLORS.red : COLORS.dark,
                  color: '#fff',
                  padding: '32px 24px',
                  borderRadius: 12,
                  border: pkg.highlight ? `3px solid ${COLORS.red}` : 'none',
                  transform: pkg.highlight ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s',
                  position: 'relative',
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
                    padding: '6px 16px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}>
                    POPULÆR
                  </div>
                )}

                <h3 style={{
                  fontSize: 24,
                  fontWeight: 800,
                  marginBottom: 8,
                  marginTop: pkg.highlight ? 16 : 0,
                }}>
                  {pkg.name}
                </h3>
                <p style={{
                  fontSize: 14,
                  color: pkg.highlight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.85)',
                  marginBottom: 24,
                }}>
                  {pkg.tagline}
                </p>

                <div style={{
                  fontSize: 28,
                  fontWeight: 800,
                  marginBottom: 4,
                  color: pkg.highlight ? '#fff' : COLORS.red,
                }}>
                  {pkg.price}
                </div>
                {pkg.period && (
                  <p style={{
                    fontSize: 13,
                    color: pkg.highlight ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.7)',
                    marginBottom: 32,
                  }}>
                    {pkg.period}
                  </p>
                )}

                <button style={{
                  background: pkg.highlight ? '#fff' : COLORS.red,
                  color: pkg.highlight ? COLORS.red : '#fff',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DETALJERT SAMMENLIGNING ========== */}
      <section style={{
        padding: '80px 24px',
        background: COLORS.dark,
        color: '#fff',
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

          {categories.map((category, catIdx) => (
            <div key={catIdx} style={{ marginBottom: 48 }}>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 24,
                color: COLORS.red,
              }}>
                {category.name}
              </h3>

              <div style={{
                overflowX: 'auto',
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: 14,
                }}>
                  <thead>
                    <tr style={{
                      borderBottom: `2px solid ${COLORS.red}`,
                    }}>
                      <th style={{
                        textAlign: 'left',
                        padding: '16px 12px',
                        fontWeight: 700,
                        color: '#fff',
                      }}>
                        Feature
                      </th>
                      {packages.map((pkg, idx) => (
                        <th
                          key={idx}
                          style={{
                            textAlign: 'center',
                            padding: '16px 12px',
                            fontWeight: 700,
                            background: pkg.highlight ? 'rgba(230, 81, 84, 0.1)' : 'transparent',
                          }}
                        >
                          {pkg.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(packages[0].features[category.key]).map(
                      ([feature, _], featureIdx) => (
                        <tr
                          key={featureIdx}
                          style={{
                            borderBottom: `1px solid rgba(255,255,255,0.1)`,
                          }}
                        >
                          <td style={{
                            padding: '16px 12px',
                            color: 'rgba(255,255,255,0.85)',
                          }}>
                            {feature}
                          </td>
                          {packages.map((pkg, pkgIdx) => (
                            <td
                              key={pkgIdx}
                              style={{
                                textAlign: 'center',
                                padding: '16px 12px',
                                background: pkg.highlight ? 'rgba(230, 81, 84, 0.1)' : 'transparent',
                              }}
                            >
                              {renderFeatureValue(pkg.features[category.key][feature])}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== RESULTATER ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 48,
            textAlign: 'center',
          }}>
            Hva du oppnår
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 24,
          }}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: COLORS.dark,
                  color: '#fff',
                  padding: '32px',
                  borderRadius: 12,
                }}
              >
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 800,
                  marginBottom: 16,
                  marginTop: 0,
                  color: COLORS.red,
                }}>
                  {pkg.name}
                </h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  margin: 0,
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  {pkg.features.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section style={{
        padding: '80px 24px',
        background: COLORS.dark,
        color: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 40,
          }}>
            Vanlige spørsmål
          </h2>

          <div style={{
            display: 'grid',
            gap: 16,
          }}>
            {[
              {
                q: 'Kan jeg bytte fra en pakke til en annen?',
                a: 'Ja, absolutt. Mange starter med Oppstart, oppgraderer til Optimalisering, og slutter med Full Drift. Eller starter med Optimalisering og blir med oss på Full Drift. Fleksibilitet er viktig.',
              },
              {
                q: 'Hva hvis jeg vil avslutte?',
                a: 'Oppstart og Optimalisering: ingen lange kontrakter. Full Drift: 3 måneder varsel. Partner: diskuteres. Vi ønsker ikke å holde noen tilbake — hvis du ikke er fornøyd, skal du gå.',
              },
              {
                q: 'Er det ekstra kostnader?',
                a: 'Nei. Oppstart har engangsgebyr, så månedlig. Full Drift er 20% av netto. Optimalisering er flat månedlig. Partner diskuteres. Ingen skjulte gebyrer.',
              },
              {
                q: 'Kan jeg kombinere pakker?',
                a: 'Ja. For eksempel Full Drift for en enhet og Optimalisering for en annen. Vi tilpasser løsningen til ditt behov.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#3E2628',
                  padding: '24px',
                  borderRadius: 8,
                }}
              >
                <h3 style={{
                  fontSize: 15,
                  fontWeight: 700,
                  marginBottom: 12,
                  marginTop: 0,
                  color: COLORS.red,
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  margin: 0,
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  {faq.a}
                </p>
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
            Usikker hvilken som passer?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Ring oss eller møt oss for en prat. Vi diskuterer din situasjon og finnes den beste løsningen.
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

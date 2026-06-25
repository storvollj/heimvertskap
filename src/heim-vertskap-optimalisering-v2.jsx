import React, { useState } from 'react';
import { ChevronDown, BarChart3, TrendingUp, Zap, Users } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function OptimaliseringsSide() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Hvem passer Optimalisering for?',
      a: 'Du som driver selv og gjør manuelt arbeid. Du vil gjerne øke inntektene, men vil ikke gi fra deg kontrollen. Du ønsker ekspert-hjelp til prising og strategi.',
    },
    {
      q: 'Hva gjør dere konkret?',
      a: 'Vi analyserer markedet ditt, setter opp dynamisk prising, gir deg månedsrapporter med innsikt, og diskuterer optimiseringspotensial. Du tar beslutningene. Vi gir råd.',
    },
    {
      q: 'Hvordan fungerer det praktisk?',
      a: 'Vi møtes én gang for å forstå eiendommen din. Deretter får du månedlig rapport og kan kontakte oss når som helst. Også mulig med telefonsamtaler annenhver uke hvis du ønsker det.',
    },
    {
      q: 'Hva med gjestekommunikasjon og rengjøring?',
      a: 'Det gjør du selv eller koordinerer selv. Vi fokuserer på prising, markedsanalyse og strategi. Hvis du trenger hands-on drift, er Full Drift bedre for deg.',
    },
    {
      q: 'Kan Optimalisering bli til Full Drift senere?',
      a: 'Ja, absolutt. Mange starter med Optimalisering for å teste systemene, og oppgraderer til Full Drift når de ser resultatene. Ingen problem.',
    },
    {
      q: 'Hvor mye koster det?',
      a: 'Fra kr 4 500/mnd. Det inkluderer månedlig prisanalyse, rapporter, og konsultasjon. Eksakt pris avhenger av kompleksitet og hvor mye hjelp du trenger.',
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: 'Prisanalyse & strategi',
      desc: 'Vi analyserer markedet ditt, konkurrenter og sesong. Vi setter opp dynamisk prising og gir deg strategi for optimal inntekt.',
    },
    {
      icon: TrendingUp,
      title: 'Månedsrapporter',
      desc: 'Hver måned får du oversikt: belegg, inntekter, pristrend, konkurranse-analyse. Du vet nøyaktig hva som skjer.',
    },
    {
      icon: Zap,
      title: 'Optimiseringspotensial',
      desc: 'Vi identifiserer hvor du kan tjene mer: prising-justeringer, sesong-fokus, eller produktforbedringer.',
    },
    {
      icon: Users,
      title: 'Løpende konsultasjon',
      desc: 'Du kan kontakte oss når som helst. Telefonsamtaler og diskusjon av strategi — ikke praktisk drift.',
    },
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
          <nav style={{ display: 'flex', gap: 24, fontSize: 14 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Full Drift</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Oppstart</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Pakker</a>
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
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: COLORS.red,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            Optimalisering
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Du driver.<br />
            Vi optimaliserer.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Du gjør manuelt arbeidet. Vi hjelper deg med prising, strategi og rapporter. Øk inntektene dine uten å gi fra deg kontrollen.
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
            Kontakt for info →
          </button>
        </div>
      </section>

      {/* ========== HVEM PASSER ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 40,
          }}>
            Optimalisering er for deg hvis...
          </h2>

          <div style={{
            background: COLORS.dark,
            color: '#fff',
            padding: '40px',
            borderRadius: 12,
          }}>
            <ul style={{
              fontSize: 15,
              lineHeight: 2.2,
              listStyle: 'none',
              padding: 0,
            }}>
              {[
                'Du driver selv og gjør manuelt arbeid',
                'Du vil øke inntektene, men vil ikke gi fra deg kontrollen',
                'Du ønsker ekspert-hjelp til prising og strategi',
                'Du vil ha månedsrapporter slik at du vet hva som skjer',
                'Du vil konsultasjon når du trenger det — ikke hands-on drift',
                'Du driver kanskje flere enheter og vil scale smartere',
              ].map((item, idx) => (
                <li key={idx}>
                  <span style={{ color: COLORS.red, fontWeight: '700', marginRight: 12 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========== HVA INNGÅR ========== */}
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
            Hva inngår
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32,
          }}>
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx}>
                  <Icon size={40} style={{ color: COLORS.red, marginBottom: 16 }} />
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROSESS ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 48,
          }}>
            Slik fungerer det
          </h2>

          <div style={{
            display: 'grid',
            gap: 24,
          }}>
            {[
              {
                step: '1',
                title: 'Første møte',
                desc: 'Vi møtes (Tromsø eller remote). Du presenterer eiendommen, mål, og utfordringer. Vi forstår situasjonen din.',
              },
              {
                step: '2',
                title: 'Analyse',
                desc: 'Vi analyserer markedet ditt, konkurrenter, prising og belegg. Vi setter opp dynamisk prising-strategi.',
              },
              {
                step: '3',
                title: 'Månedsrapporter',
                desc: 'Hver måned får du rapport med inntekter, belegg, pristrend, og optimiseringspotensial.',
              },
              {
                step: '4',
                title: 'Løpende konsultasjon',
                desc: 'Du kan kontakte oss når som helst. Vi diskuterer strategi, justerer tilnærming, og hjelper deg tjene mer.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: COLORS.dark,
                  color: '#fff',
                  padding: '32px',
                  borderRadius: 8,
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: 24,
                }}
              >
                <div style={{
                  background: COLORS.red,
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 8,
                    marginTop: 0,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRISING ========== */}
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
            Prising
          </h2>

          <div style={{
            background: '#3E2628',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
          }}>
            <div style={{
              fontSize: 28,
              fontWeight: 800,
              color: COLORS.red,
              marginBottom: 12,
            }}>
              Fra kr 4 500/mnd
            </div>
            <p style={{
              fontSize: 15,
              lineHeight: 1.8,
              margin: 0,
              color: 'rgba(255,255,255,0.85)',
            }}>
              Inkluderer månedsrapporter, prisanalyse, dynamisk prising-setup og konsultasjon. Prisen kan variere avhengig av kompleksitet og antall enheter.
            </p>
          </div>

          <div style={{
            background: '#F0E8E6',
            padding: '24px',
            borderRadius: 8,
            borderLeft: `4px solid ${COLORS.red}`,
            color: COLORS.text,
          }}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
              <strong>Fleksibilitet:</strong> Vi diskuterer nøyaktig hva du trenger. Hvis du vil telefonsamtaler annenhver uke, eller flere enheter, justerer vi prisen etter det.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 48,
          }}>
            Spørsmål & svar
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: COLORS.dark,
                  color: '#fff',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 700,
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s',
                      color: COLORS.red,
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div style={{
                    padding: '0 24px 20px',
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.85)',
                    borderTop: `1px solid rgba(255,255,255,0.1)`,
                  }}>
                    {faq.a}
                  </div>
                )}
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
            Vil du optimalisere?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Kontakt oss for en uforpliktende samtale. Vi diskuterer hva som kan fungere for deg.
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
            Kontakt for info →
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

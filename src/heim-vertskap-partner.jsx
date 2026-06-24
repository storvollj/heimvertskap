import React, { useState } from 'react';
import { ChevronDown, Zap, BarChart3, Users, TrendingUp } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function PartnerSide() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Hva er "Partner"-pakken?',
      a: 'En skreddersydd løsning for større porteføljer: flere enheter, leirsteder, kompleks drift. Vi bygger systemer og prosesser som skalerer. Prisen og innholdet tilpasses ditt behov.',
    },
    {
      q: 'Hvem er dette for?',
      a: 'Investorer med 5-10+ enheter. Leirsteder. Flereenhetsbygg. Eller porteføljer som skal skaleres raskt. Du trenger ikke "Full Drift" for hver enhet — vi bygger en system som fungerer for alle.',
    },
    {
      q: 'Hva er fordelen med å skalere med oss?',
      a: 'Vi har erfaring med kompleks drift. Multi-OTA-synkronisering, automatiserte arbeidsflyter, sentraliserte rapporter. Jo flere enheter, jo mer effektiv blir driften per enhet.',
    },
    {
      q: 'Hvordan fungerer prising?',
      a: 'Individuelt avtalt. Det avhenger av antall enheter, kompleksitet, og hvor mye automatisering vi må bygge. Vi diskuterer og lager en avtale som fungerer for begge.',
    },
    {
      q: 'Kan vi starte med noen enheter og skalere?',
      a: 'Ja, absolutt. Du kan starte med 3-4 enheter og legge til flere over tid. Systemene vi bygger skaleres med deg.',
    },
    {
      q: 'Hva med leirsteder og kompleks drift?',
      a: 'Vi har erfaring med det. Interne bookinger + OTA samtidig, sesong-åpning/-lukking, gruppe-bookinger. Vi bygger systemer som håndterer kompleksiteten.',
    },
    {
      q: 'Får vi dedikert account manager?',
      a: 'For Partner-pakken: ja, typisk. Du har en kontaktperson som kjenner porteføljen din, forstår måls dine, og håndterer strategiske spørsmål.',
    },
    {
      q: 'Hva er en typisk Partner-prosess?',
      a: 'Vi møtes, forstår dine mål og utfordringer, lager en strategi, bygger systemene, og starter drift steg-for-steg. Løpende optimalisering og rapporter.',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Automatisert drift',
      desc: 'Arbeidsflyter som håndterer flere enheter samtidig. Når du legger til en ny enhet, fungerer systemene allerede.',
    },
    {
      icon: BarChart3,
      title: 'Sentraliserte rapporter',
      desc: 'En dashbord for hele porteføljen. Du ser belegg, inntekter, rating per enhet, og aggregert innsikt.',
    },
    {
      icon: Users,
      title: 'Dedikert support',
      desc: 'Du har en kontaktperson som forstår dine mål. Ikke bare reaktiv support — strategisk samarbeid.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable systems',
      desc: 'Byggingen av systemer skalerer. 3 enheter eller 20 — samme driftsprinsipp, mindre manuelt arbeid per enhet.',
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
            Partner & Multi-unit
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Skalering med<br />
            system.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Du har flere enheter eller planlegger å bygge en portefølje. Vi bygger systemer og prosesser som skalerer med deg — uten at kompleksiteten blir uoverkommelig.
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
            Diskuter skalering →
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
            Partner er for deg hvis...
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
                'Du har 5+ enheter eller planlegger å skalere raskt',
                'Du driver leirsted eller flereenhetsbygg',
                'Du har kompleks drift (grupper, interne bookinger, sesonger)',
                'Du vil ha systemer som skalerer uten å eksplodere i kompleksitet',
                'Du trenger dedikert support og strategisk samarbeid',
                'Du ønsker en partner som vokser med deg',
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

      {/* ========== FEATURES ========== */}
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
            Hva vi bygger
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32,
          }}>
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx}>
                  <Icon size={40} style={{ color: COLORS.red, marginBottom: 16 }} />
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== EKSEMPLER ========== */}
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
            Eksempel porteføljer
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}>
            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 18, fontWeight: 700 }}>
                Investor (5+ leiligheter)
              </h3>
              <p style={{ lineHeight: 1.8, margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                Du eier flere leiligheter i Tromsø. Vi setter opp One Dashboard for alle, automatisert booking-flow, og sentral rapportering. Du skalerer fra 5 til 10 enheter uten økt overhead.
              </p>
            </div>

            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 18, fontWeight: 700 }}>
                Leirsted eller hotell-lignende
              </h3>
              <p style={{ lineHeight: 1.8, margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                Du driver leirsted med 20+ rom/hytte. Vi bygger systemer som håndterer gruppe-bookinger, interne transfers, og kompleks kapasitetsplanlegging. Automatisert der det mulig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROSESS ========== */}
      <section style={{
        padding: '80px 24px',
        background: COLORS.dark,
        color: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 48,
          }}>
            Samarbeids-prosess
          </h2>

          <div style={{
            display: 'grid',
            gap: 24,
          }}>
            {[
              {
                step: '1',
                title: 'Diagnose',
                desc: 'Vi møtes og forstår din portefølje, mål, smertepunkter, og visjon. Hva fungerer ikke nå? Hva vil du skalere?',
              },
              {
                step: '2',
                title: 'Design',
                desc: 'Vi lager en strategi og arkitektur for systemene dine. Hvilke verktøy? Hvilke automatiseringer? Hva skal gjøres manuelt?',
              },
              {
                step: '3',
                title: 'Implementering',
                desc: 'Vi bygger systemene steg-for-steg. Vi starter med 1-2 enheter, tester, og legger til flere etterhvert.',
              },
              {
                step: '4',
                title: 'Drift & optimalisering',
                desc: 'Vi driver systemene, gir deg rapporter, og optimaliserer løpende. Du har en dedikert kontakt som du jobber med.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#3E2628',
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
        background: '#fff',
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
            background: COLORS.dark,
            color: '#fff',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
          }}>
            <p style={{
              fontSize: 18,
              lineHeight: 1.8,
              marginTop: 0,
              marginBottom: 24,
            }}>
              <strong>Skreddersøm — ikke standardpris.</strong>
            </p>
            <p style={{
              fontSize: 15,
              lineHeight: 1.8,
              margin: 0,
              color: 'rgba(255,255,255,0.85)',
            }}>
              Prisen avhenger av kompleksitet, antall enheter, og hvilke tjenester du trenger. Det kan være en kombinasjon av månedlige gebyrer, insentiv-basert prising, eller fast avtale.
            </p>
          </div>

          <div style={{
            background: '#F0E8E6',
            padding: '32px',
            borderRadius: 8,
            borderLeft: `4px solid ${COLORS.red}`,
            color: COLORS.text,
          }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8 }}>
              <strong>La oss diskutere ditt behov.</strong> Vi lager en avtale som fungerer for begge — ikke en "one-size-fits-all" løsning.
            </p>
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
            marginBottom: 48,
          }}>
            Spørsmål & svar
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#3E2628',
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
            Diskusjoner om skalering?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Ring oss. Vi diskuterer ditt behov, og lager en strategi sammen.
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
            Kontakt oss →
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

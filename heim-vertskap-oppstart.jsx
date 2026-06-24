import React, { useState } from 'react';
import { ChevronDown, Lightbulb, BookOpen, Zap, CheckCircle } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function OppsartSide() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Hvem passer Oppstart for?',
      a: 'Du som er helt ny til korttidsutleie. Du har en eiendom, men vet ikke hvor du skal starte. Du vil lære systemene, forstå prosessen, og være selvdrevet etter oppstartsperioden.',
    },
    {
      q: 'Hva gjør dere konkret?',
      a: 'Vi hjelper deg sette opp Airbnb og Booking-annonser, tar profesjonelle bilder (eller veileder deg), setter opp Hostaway, lager husregler, priser første opphold, og guider deg gjennom første gjester.',
    },
    {
      q: 'Er det remote mulig?',
      a: 'Ja. Vi gjør setup dialog over video/telefon. For bilder kan du ta selv (vi guider) eller vi kan ta dem når vi møter deg i Tromsø.',
    },
    {
      q: 'Hvor lang tid varer Oppstart?',
      a: 'Typisk 1-3 måneder. Vi møtes flere ganger, setter opp systemer, og guider deg gjennom første bookinger. Når du føler deg sikker, er du klar til å drive selv.',
    },
    {
      q: 'Hva hvis jeg vil oppgradere til Full Drift senere?',
      a: 'Perfekt! Oppstart er ofte en test-periode. Hvis du ser at Full Drift passer bedre, kan du oppgradere når som helst. Ingen problem.',
    },
    {
      q: 'Hva er Heim BnB-forbindelsen?',
      a: 'Heim BnB er en ressurs-plattform med blogg, veiledninger og maler for BnB-verter. Oppstart-kunder får tilgang og kan fortsette å lære selv etter at oppstarten er ferdig.',
    },
    {
      q: 'Hva med teknologi og verktøy?',
      a: 'Vi introduserer deg til Airbnb, Booking.com, Hostaway, og grunnleggende prising. Vi lærer deg systemene slik at du er komfortabel med dem.',
    },
    {
      q: 'Prising og kostnader?',
      a: 'Oppstart starter fra kr 12 000 (engangsgebyr for setup), eller månedlig modell fra kr 4 000/mnd (typisk 3 måneder). Vi diskuterer hvilken som passer best for deg.',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Møte & planlegging',
      desc: 'Vi møtes (remote eller Tromsø). Du forteller om eiendommen, målene dine, og hva du ikke vet. Vi lager en oppstarts-plan.',
    },
    {
      step: '2',
      title: 'Setup av platformer',
      desc: 'Vi setter opp Airbnb og Booking.com-annonser, fotobrief, husregler, og Hostaway-system. Du er med og lærer.',
    },
    {
      step: '3',
      title: 'Prising & forberedelse',
      desc: 'Vi diskuterer prising-strategi, sesonger, og hvordan du skal håndtere gjester. Vi legger inn første opphold.',
    },
    {
      step: '4',
      title: 'Gjeste-oppfølging',
      desc: 'Første gjester kommer. Vi veileder deg gjennom hver booking, hver spørsmål, hver sjekk-ut. Du lærer ved å gjøre.',
    },
    {
      step: '5',
      title: 'Self-service readiness',
      a: 'Efter 1-3 måneder har du rutiner, erfaring, og selvtillit. Du er klar til å drive selv — eller oppgradere til Full Drift.',
    },
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: 'Du lærer, ikke bare observerer',
      desc: 'Du er med på alt og forstår hvordan det fungerer. Du blir selvdrevet etterpå.',
    },
    {
      icon: BookOpen,
      title: 'Heim BnB-ressurser',
      desc: 'Du får tilgang til blogg, veiledninger, maler, og tips. Du kan fortsette å lære selv.',
    },
    {
      icon: Zap,
      title: 'Profesjonell setup fra start',
      desc: 'Annonser, bilder, systemene dine er satt opp rett. Ikke amatørarbeid.',
    },
    {
      icon: CheckCircle,
      title: 'Lav terskel',
      desc: 'Du trenger ikke å være tech-savvy. Vi lærer deg systemene steg for steg.',
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
            Oppstart
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Vi lærer deg.<br />
            Du driver.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Du er helt ny. Vi veileder deg gjennom setup, systemene, og første gjester. Etterpå driver du selv — eller oppgraderer til Full Drift.
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
            Kom i gang →
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
            Oppstart er for deg hvis...
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
                'Du er helt ny til korttidsutleie',
                'Du har en eiendom, men vet ikke hvor du skal starte',
                'Du vil lære systemene og forstå prosessen',
                'Du vil være selvdrevet etterpå (eller oppgradere til Full Drift)',
                'Du er komfortabel med å lære og ta aktive valg',
                'Du gjøre det manuelt selv — i alle fall til å begynne med',
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

      {/* ========== FORDELER ========== */}
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
            Hva du får
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32,
          }}>
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx}>
                  <Icon size={40} style={{ color: COLORS.red, marginBottom: 16 }} />
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    {benefit.desc}
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
            Oppstarts-prosessen
          </h2>

          <div style={{
            display: 'grid',
            gap: 24,
          }}>
            {steps.map((item, idx) => (
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

      {/* ========== INNHOLD ========== */}
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
            Hva dekker vi
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            fontSize: 14,
            lineHeight: 1.9,
          }}>
            <div>
              <h3 style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Teknikk & setup
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Airbnb & Booking-setup</li>
                <li>✓ Husmanuell & husregler</li>
                <li>✓ Hostaway PMS-oppsett</li>
                <li>✓ Nøkkelsystem & tilgang</li>
                <li>✓ Kamera & dokumentasjon</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Operasjon & læring
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Prising-strategi første periode</li>
                <li>✓ Gjestekommunikasjon (du lærer)</li>
                <li>✓ Rengjøring-koordinering</li>
                <li>✓ Første gjester-håndtering</li>
                <li>✓ Troubleshooting & support</li>
              </ul>
            </div>
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            marginBottom: 32,
          }}>
            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 16, fontWeight: 700 }}>
                Engangsgebyr
              </h3>
              <div style={{
                fontSize: 28,
                fontWeight: 800,
                color: COLORS.red,
                marginBottom: 12,
              }}>
                kr 12 000
              </div>
              <p style={{
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
                color: 'rgba(255,255,255,0.85)',
              }}>
                Setup av alle systemer, møter, og første gjester-veiledning. Betales en gang.
              </p>
            </div>

            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 16, fontWeight: 700 }}>
                Månedlig modell
              </h3>
              <div style={{
                fontSize: 28,
                fontWeight: 800,
                color: COLORS.red,
                marginBottom: 12,
              }}>
                Fra kr 4 000/mnd
              </div>
              <p style={{
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
                color: 'rgba(255,255,255,0.85)',
              }}>
                Typisk 3 måneder. Dekker alle møter og veiledning. Fleksibelt slut når du er klar.
              </p>
            </div>
          </div>

          <div style={{
            background: '#F0E8E6',
            padding: '24px',
            borderRadius: 8,
            borderLeft: `4px solid ${COLORS.red}`,
            color: COLORS.text,
          }}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
              <strong>Velg det som passer deg best.</strong> Engangsgebyr hvis du vil rask start. Månedlig hvis du ønsker mer fleksibilitet og spredt kostnad. Vi diskuterer hvilken som funker best.
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
            Klar til å begynne?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Kontakt oss. Vi møtes, diskuterer din situasjon, og lager en plan.
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
            Kom i gang →
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

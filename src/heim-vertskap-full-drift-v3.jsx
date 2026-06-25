import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function FullDriftSide() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Hva betyr "Full Drift"?',
      a: 'Vi håndterer alt av drift: annonser, gjestekommunikasjon, prising, rengjøring-koordinering, kalender-styring og rapporter. Du beholder eierskapet — vi gjør jobben.',
    },
    {
      q: 'Hvordan fungerer prising?',
      a: '20% av netto leieinntekt. Det inkluderer alt — ingen skjulte gebyrer. Du får månedlig rapport som viser nøyaktig hvordan pengene fordeles.',
    },
    {
      q: 'Er det medvert eller framleie?',
      a: 'Det er ikke framleie. Du eier eiendommen. Du er juridisk utleier og mottar leieinntektene direkte. Vi administrerer driften på dine vegne.',
    },
    {
      q: 'Kan jeg se hva som skjer?',
      a: 'Ja. Du får månedlige rapporter med belegg, inntekter, gjestevurderinger og historikk. Du kan også be om rapporter når som helst.',
    },
    {
      q: 'Hva hvis det går galt?',
      a: 'Vi håndterer det. Ødelagt inventar, dårlige gjester, tekniske problemer — vi løser det. Du ringer oss, ikke omvendt.',
    },
    {
      q: 'Kan jeg slutte når som helst?',
      a: 'Kontrakten har 3 måneder varsel. Du kan si opp når som helst, men varslingsperioden er 3 måneder.',
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
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Optimalisering</a>
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
            Full Drift
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Vi håndterer alt.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Du beholder eierskapet. Vi gjør den daglige driften: annonser, gjestekommunikasjon, prising, rengjøring-koordinering, rapporter.
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
        </div>
      </section>

      {/* ========== IKKE FRAMLEIE ========== */}
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
            Det er ikke framleie
          </h2>

          <div style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: COLORS.text,
          }}>
            <p>
              <strong>Du eier eiendommen. Du er juridisk utleier.</strong> Leieinntektene går direkte til deg. Vi administrerer driften på dine vegne — ikke mer, ikke mindre.
            </p>
            <p>
              Vi setter opp annonser, svarer gjester, håndterer prising, koordinerer rengjøring, og gir deg rapporter. Du sitter igjen med eierskapet og 80% av netto inntekt.
            </p>
            <p>
              Det er forskjellen på Full Drift og framleie.
            </p>
          </div>
        </div>
      </section>

      {/* ========== HVA INNGÅR ========== */}
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
            Hva inngår
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
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
                Annonser & distribusjon
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Opprettelse av annonser</li>
                <li>✓ Bilder og beskrivelse</li>
                <li>✓ Multi-OTA-synkronisering</li>
                <li>✓ Løpende optimalisering</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Gjestehåndtering
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Gjestekommunikasjon (AI-assistert)</li>
                <li>✓ Check-in og check-out</li>
                <li>✓ Håndtering av spørsmål</li>
                <li>✓ Problem-løsning 24/7</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Prising & kalender
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Dynamisk prising (PriceLabs)</li>
                <li>✓ Markedsanalyse</li>
                <li>✓ Kalender-styring</li>
                <li>✓ Kanal-synkronisering</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Drift & rapporter
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Rengjøring-koordinering</li>
                <li>✓ Klargjøring</li>
                <li>✓ Månedlige rapporter</li>
                <li>✓ Rådgivning & optimalisering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PENGEFLYT ========== */}
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
            Slik fungerer økonomien
          </h2>

          <div style={{
            background: COLORS.dark,
            color: '#fff',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
            fontSize: 14,
            lineHeight: 1.9,
          }}>
            <p style={{ margin: '0 0 24px' }}>
              <strong>Eksempel fra praksis:</strong>
            </p>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '20px',
              borderRadius: 8,
              fontFamily: 'monospace',
            }}>
              <div>50 000 kr (etter provisjon til Airbnb/Booking)</div>
              <div style={{ color: 'rgba(255,255,255,0.6)' }}>- 2 000 kr vaskegebyr (lagt på gjest)</div>
              <div style={{ fontWeight: 700, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.2)' }}>= 48 000 kr netto</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>- 9 600 kr (20% Heim Vertskap)</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.red, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.2)' }}>= 38 400 kr til deg</div>
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
              <strong>Du vet nøyaktig hva du betaler for.</strong> 20% av det du tjener etter at vi har tatt kostnadene våre. Ingen gebyrer for annonser, ingen setup-gebyr, ingen skjulte kostnader.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ANSVAR ========== */}
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
            Hvem gjør hva?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
          }}>
            <div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Vi gjør
              </h3>
              <ul style={{
                fontSize: 14,
                lineHeight: 1.9,
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                <li>✓ Opprettelse og drift av annonser</li>
                <li>✓ Gjestekommunikasjon</li>
                <li>✓ Dynamisk prising</li>
                <li>✓ Kalender-styring</li>
                <li>✓ Rengjøring-koordinering</li>
                <li>✓ Problem-løsning</li>
                <li>✓ Rapportering</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Du gjør
              </h3>
              <ul style={{
                fontSize: 14,
                lineHeight: 1.9,
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                <li>✓ Eier eiendommen</li>
                <li>✓ Mottar leieinntektene</li>
                <li>✓ Betaler forsikring</li>
                <li>✓ Betaler strøm/internett</li>
                <li>✓ Håndterer vedlikehold</li>
                <li>✓ Oppfyller lovkrav</li>
              </ul>
            </div>
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
            Klar til å møte oss?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Vi møter deg gjerne. Vi ser på eiendommen, besvarer spørsmål, og viser hvordan Full Drift fungerer.
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

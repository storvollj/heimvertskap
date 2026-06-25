import React, { useState } from 'react';
import { TrendingUp, Zap, Shield, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function HomepageRewrite() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "Utrolig lydhør og kommunikativ gjennom hele oppholdet.",
      author: "Nattaporn",
      platform: "Airbnb"
    },
    {
      quote: "Host made sure we were okay most days, we felt really welcomed and cared for.",
      author: "Nick",
      platform: "Booking.com"
    },
    {
      quote: "Jorgen er estremamente disponibile og fikk oss til å føle oss som lokale gjennom sine anbefalinger.",
      author: "Giulia Rebecca",
      platform: "Booking.com"
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
          <nav style={{ display: 'flex', gap: 24, fontSize: 14 }}>
            <a href="#" style={{ color: COLORS.light, textDecoration: 'none' }}>Full Drift</a>
            <a href="#" style={{ color: COLORS.light, textDecoration: 'none' }}>Pakker</a>
            <a href="#" style={{ color: COLORS.red, textDecoration: 'none', fontWeight: 600 }}>Om oss</a>
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
            Tilpasset dine behov
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 24px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Enten du ønsker hjelp til å komme i gang, optimalisere eksisterende drift eller overlate alt til en profesjonell partner, finnes det en løsning som passer deg.
          </p>

          <p style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.85)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Heim Vertskap bygger på erfaring fra hundrevis av gjesteopphold i Tromsø og kombinerer personlig vertskap med moderne teknologi, markedsanalyse og automatisering.
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

      {/* ========== ERFARING ========== */}
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
            Erfaring bygget gjennom praksis
          </h2>

          <div style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.9)',
          }}>
            <p>
              Heim Vertskap startet med vår egen utleieenhet i Tromsø. Gjennom flere hundre gjesteopphold lærte vi hva som faktisk skaper gode resultater: god kommunikasjon, riktige systemer, effektiv drift og kontinuerlig forbedring.
            </p>
            <p>
              Siden den gang har erfaringen vokst videre gjennom drift av større flerromsanlegg og mer komplekse utleieoppsett.
            </p>
            <p>
              Vi står fortsatt tett på hele gjestereisen – fra booking og kommunikasjon til koordinering av vask, klargjøring og oppfølging. Det betyr at vi kjenner detaljene i hverdagen, samtidig som vi bygger systemer som gjør driften mer effektiv og skalerbar.
            </p>
          </div>
        </div>
      </section>

      {/* ========== HVORFOR VELGE ========== */}
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
            Derfor velger eiere Heim Vertskap
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
                'Lokal tilstedeværelse i Tromsø',
                'Erfaring fra hundrevis av gjesteopphold',
                'Personlig oppfølging og én fast kontaktperson',
                'Dokumentert høy gjestetilfredshet',
                'Dynamisk prising basert på markedsdata',
                'Automatisering som reduserer manuelt arbeid',
                'Innsikt og rapportering som gir bedre beslutninger',
                'Moderne systemer for profesjonell drift',
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

      {/* ========== ERFARING I TALL ========== */}
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
            Erfaring i tall
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
          }}>
            {[
              { number: '700+', label: 'reservasjoner håndtert' },
              { number: '1 500+', label: 'gjester tatt imot' },
              { number: '30+', label: 'nasjonaliteter' },
              { number: '12', label: 'samtidige enheter' },
              { number: '4.98⭐', label: 'Airbnb rating' },
              { number: '9.7/10', label: 'Booking.com rating' },
            ].map((stat, idx) => (
              <div key={idx} style={{
                background: '#3E2628',
                padding: '32px',
                borderRadius: 8,
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: COLORS.red,
                  marginBottom: 12,
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.8)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 48,
            textAlign: 'center',
          }}>
            Hva gjestene sier
          </h2>

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
            <div style={{ marginBottom: 24 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: 28, marginRight: 4 }}>⭐</span>
              ))}
            </div>

            <p style={{
              fontSize: 18,
              fontStyle: 'italic',
              lineHeight: 1.8,
              margin: '0 auto 24px',
              maxWidth: 700,
            }}>
              "{testimonials[testimonialIndex].quote}"
            </p>

            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>
                {testimonials[testimonialIndex].author}
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                {testimonials[testimonialIndex].platform}
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 24,
            }}>
              <button
                onClick={() => setTestimonialIndex(testimonialIndex === 0 ? 2 : testimonialIndex - 1)}
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
                {testimonialIndex + 1} / {testimonials.length}
              </span>
              <button
                onClick={() => setTestimonialIndex(testimonialIndex === 2 ? 0 : testimonialIndex + 1)}
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

      {/* ========== PAKKER ========== */}
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
            Pakker tilpasset deg
          </h2>

          {/* OPPSTART */}
          <div style={{
            background: '#3E2628',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, marginTop: 0 }}>Oppstart</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>
              For deg som vil komme riktig i gang
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: COLORS.red }}>Passer for:</h4>
                <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                  <li>• Førstegangsvert</li>
                  <li>• Ny eiendom på Airbnb eller Booking.com</li>
                  <li>• Deg som ønsker å lære systemene selv</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.red, marginBottom: 16 }}>Fra kr 4 000</div>
                <button style={{
                  background: COLORS.red,
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  Les mer →
                </button>
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '20px',
              borderRadius: 8,
            }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, marginTop: 0, color: COLORS.red }}>Hva inngår:</h4>
              <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Oppsett av Airbnb og Booking.com</li>
                <li>✓ Oppsett av channel manager og PMS</li>
                <li>✓ Automatisering av arbeidsflyt</li>
                <li>✓ Grunnleggende prisstrategi</li>
              </ul>
            </div>
          </div>

          {/* OPTIMALISERING */}
          <div style={{
            background: '#3E2628',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, marginTop: 0 }}>Optimalisering</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>
              For deg som allerede er i gang
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: COLORS.red }}>Passer for:</h4>
                <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                  <li>• Eksisterende verter</li>
                  <li>• Deg som ønsker høyere inntekter</li>
                  <li>• Deg som vil bruke mindre tid på drift</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.red, marginBottom: 16 }}>Fra kr 4 500/mnd</div>
                <button style={{
                  background: COLORS.red,
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  Les mer →
                </button>
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '20px',
              borderRadius: 8,
            }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, marginTop: 0, color: COLORS.red }}>Hva inngår:</h4>
              <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Analyse av marked og potensial</li>
                <li>✓ Optimalisering av prisstrategi</li>
                <li>✓ Dynamisk prising (PriceLabs)</li>
                <li>✓ AI-verktøy for gjestekommunikasjon</li>
                <li>✓ Månedlig rapportering</li>
              </ul>
            </div>
          </div>

          {/* FULL DRIFT */}
          <div style={{
            background: '#3E2628',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, marginTop: 0 }}>Full Drift</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>
              For deg som ønsker minst mulig arbeid
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: COLORS.red }}>Passer for:</h4>
                <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                  <li>• Travle yrkesaktive</li>
                  <li>• Investorer</li>
                  <li>• Deg som ønsker passiv løsning</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.red, marginBottom: 16 }}>20 % av netto</div>
                <button style={{
                  background: COLORS.red,
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  Les mer →
                </button>
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '20px',
              borderRadius: 8,
            }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, marginTop: 0, color: COLORS.red }}>Hva inngår:</h4>
              <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Opprettelse og drift av annonser</li>
                <li>✓ Gjestekommunikasjon 24/7</li>
                <li>✓ Dynamisk prising og optimalisering</li>
                <li>✓ Rengjøring-koordinering</li>
                <li>✓ Månedlige rapporter</li>
              </ul>
            </div>
          </div>

          {/* PARTNER */}
          <div style={{
            background: '#3E2628',
            padding: '40px',
            borderRadius: 12,
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, marginTop: 0 }}>Portefølje & Komplekse Eiendommer</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>
              For større og mer komplekse utleieoppsett
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: COLORS.red }}>Passer for:</h4>
                <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                  <li>• Investorer med flere enheter</li>
                  <li>• Leirsteder og flerromsanlegg</li>
                  <li>• Profesjonelle utleieaktører</li>
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.red, marginBottom: 16 }}>Etter avtale</div>
                <button style={{
                  background: COLORS.red,
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  width: '100%',
                }}>
                  Diskuter →
                </button>
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '20px',
              borderRadius: 8,
            }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, marginTop: 0, color: COLORS.red }}>Hva inngår:</h4>
              <ul style={{ fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>✓ Skreddersydd systemoppsett</li>
                <li>✓ Sentralisert drift og rapportering</li>
                <li>✓ Håndtering av flere salgskanaler</li>
                <li>✓ Strategisk rådgivning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEKNOLOGI ========== */}
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
            Teknologi som jobber for deg
          </h2>

          <div style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: COLORS.text,
          }}>
            <p>
              Vi bruker profesjonelle verktøy for distribusjon, dynamisk prising, markedsanalyse og automatisering.
            </p>
            <p>
              Teknologien er ikke målet i seg selv. Den er et verktøy for å skape bedre beslutninger, mer effektiv drift og bedre opplevelser for både eiere og gjester.
            </p>
            <p>
              Der andre ser enkeltstående oppgaver, ser vi systemer som kan forbedres. Det gir mindre manuelt arbeid, færre feil og bedre forutsetninger for lønnsom drift.
            </p>
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
            Vi møter deg gjerne for en uforpliktende prat. Vi ser på eiendommen, svarer på spørsmål og viser hvordan profesjonell korttidsutleie kan fungere i praksis.
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

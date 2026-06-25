import React from 'react';
import { CheckCircle, MapPin, Award, Users } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function OmOssSide() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Lokal tilstedeværelse',
      desc: 'Vi jobber fra Tromsø. Vi kjenner markedet, været, sesongene, og gjestene dine. Ikke fjernkontroll fra Oslo.',
    },
    {
      icon: Award,
      title: 'Erfaring fra praksis',
      desc: 'Vi startet med vår egen eiendom. Vi vet hva som fungerer fordi vi har gjort det selv. Hundrevis av gjesteopphold, tusenvis av timer.',
    },
    {
      icon: Users,
      title: 'Personlig oppfølging',
      desc: 'Du har en person du kan ringe. Ikke chatbot eller kundestøtte. En som kjenner eiendommen din og måls dine.',
    },
    {
      icon: MapPin,
      title: 'Langkjørighet',
      desc: 'Vi driver ikke som leverandør — vi driver som partner. Vi vinner når du vinner. Vi bygger langsiktige relasjoner.',
    },
  ];

  const team = [
    {
      name: 'Jørgen Storvoll',
      role: 'Grunnlegger & Operativ leder',
      desc: 'Har drevet korttidsutleie siden 2023. Startet med egen leilighet i Tromsø, skalerte til 12+ enheter. Kjernekompetanse: prising, gjestehåndtering, automatisering.',
    },
    {
      name: 'Ingunn Sofie B. Storvoll',
      role: 'Co-founder & Operativ partner',
      desc: 'Driftsekspert med erfaring fra hundrevis av gjesteopphold. Håndterer koordinering, rengjøring, og gjestekvalitet. Kjenner detaljene i hverdagen.',
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
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Optimalisering</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Oppstart</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: COLORS.light, textDecoration: 'none' }}>Pakker</a>
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
            Vi er Heim Vertskap.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Heim Vertskap er ikke et "brand" — det er en bedrift som driver korttidsutleie profesjonelt. Vi bygger på erfaring fra praksis, ikke teori.
          </p>
        </div>
      </section>

      {/* ========== BAKGRUNN ========== */}
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
            Historien
          </h2>

          <div style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: COLORS.text,
          }}>
            <p>
              <strong>Heim Vertskap startet med vår egen eiendom.</strong> I 2023 begynnte vi med en leilighet i Tromsø. Vi ville teste korttidsutleie selv — forstå hva som fungerer, hva som ikke fungerer, hvor inntekten kommer fra.
            </p>
            <p>
              Gjennom hundrevis av gjesteopphold lærte vi mye: prising er kritisk, gjestekommunikasjon er alt, og systemer skalerer eller imploderer. Vi bygget gradvis rutiner, automatiseringer, og strategi.
            </p>
            <p>
              Siden den gang har Heim Vertskap vokst. Fra vår egen enhet til drift av flere enheter — leiligheter, hytter, større anlegg. Fra personlige prosesser til skalerte systemer. Fra praksis til profesjonell drift.
            </p>
            <p>
              I dag hjelper vi andre eiere å oppnå samme resultat. Ikke som en "service provider" — som en partner som forstår driften fordi vi gjør det selv.
            </p>
          </div>
        </div>
      </section>

      {/* ========== TEAM ========== */}
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
            Hvem driver dette
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
          }}>
            {team.map((person, idx) => (
              <div
                key={idx}
                style={{
                  background: '#3E2628',
                  padding: '40px',
                  borderRadius: 12,
                }}
              >
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 800,
                  marginBottom: 8,
                  marginTop: 0,
                }}>
                  {person.name}
                </h3>
                <p style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: COLORS.red,
                  marginBottom: 16,
                }}>
                  {person.role}
                </p>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0,
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  {person.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 48,
            background: '#F0E8E6',
            padding: '32px',
            borderRadius: 12,
            color: COLORS.text,
          }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8 }}>
              <strong>Du treffer oss begge.</strong> Ikke en salgsrepresentant, ikke en random support-person. Du møter Jørgen og Ingunn — de som faktisk driver bedriften.
            </p>
          </div>
        </div>
      </section>

      {/* ========== VERDIER ========== */}
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
            Det vi står for
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32,
          }}>
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx}>
                  <Icon size={40} style={{ color: COLORS.red, marginBottom: 16 }} />
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: COLORS.text,
                  }}>
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
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
              { number: '700+', label: 'reservasjoner' },
              { number: '1 500+', label: 'gjester' },
              { number: '30+', label: 'nasjonaliteter' },
              { number: '4.98⭐', label: 'Airbnb rating' },
              { number: '9.7/10', label: 'Booking rating' },
              { number: '12+', label: 'samtidige enheter' },
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: '#3E2628',
                  padding: '32px',
                  borderRadius: 8,
                  textAlign: 'center',
                }}
              >
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
            Vi bruker teknologi som verktøy
          </h2>

          <div style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: COLORS.text,
            marginBottom: 40,
          }}>
            <p>
              Vi bruker profesjonelle verktøy: Airbnb, Booking.com, Hostaway, PriceLabs, Claude AI. Men teknologi er ikke målet — det er et middel.
            </p>
            <p>
              Teknologien lar oss skalere. Den reduserer repetitivt arbeid. Den gir oss data til bedre beslutninger. Men ingen bot kan erstatte ekte kommunikasjon med gjester, eller forståelse av hva som gjør en eiendom unik.
            </p>
          </div>

          <div style={{
            background: COLORS.dark,
            color: '#fff',
            padding: '40px',
            borderRadius: 12,
          }}>
            <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 18, fontWeight: 700 }}>
              Verktøy vi bruker
            </h3>
            <ul style={{
              fontSize: 15,
              lineHeight: 1.9,
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}>
              {[
                'Airbnb & Booking.com',
                'Hostaway (PMS)',
                'PriceLabs (dynamisk prising)',
                'Claude AI (gjestekommunikasjon)',
                'Google Sheets (rapportering)',
                'Slack (intern kommunikasjon)',
              ].map((tool, idx) => (
                <li key={idx}>
                  <span style={{ color: COLORS.red, marginRight: 8 }}>✓</span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========== FILOSIFI ========== */}
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
            Vår filosofi
          </h2>

          <div style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.9)',
          }}>
            <p>
              <strong>Profesjonalisme over personlighet.</strong> Vi er Heim Vertskap, bedriften. Ikke Jørgen & Ingunn som selger. Det betyr at det handler om det vi gjør, ikke hvem vi er.
            </p>
            <p>
              <strong>Praksis over teori.</strong> Vi forstår korttidsutleie fordi vi gjør det. Vi vet hva som fungerer, og vi vet hva som koster tid og tid uten å gi verdi.
            </p>
            <p>
              <strong>Transparens.</strong> Ingen skjulte avgifter. Ingen overraskelser. Du vet nøyaktig hvor pengene dine går, hva som skjer med eiendommen din, og hvorfor vi gjør det vi gjør.
            </p>
            <p>
              <strong>Langtkjørighet.</strong> Vi vinner når du vinner. Vi er ikke her for et prosjekt — vi er her for å bygge langsiktig verdi for deg.
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
            Vil du møte oss?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Vi er tilgjengelige for en prat. Du møter Jørgen og Ingunn — ikke en salgsrepresentant.
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

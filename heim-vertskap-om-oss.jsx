import React from 'react';
import { Users, Lightbulb, TrendingUp, Shield } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function OmOssSide() {
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
          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Om oss
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: 0,
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Jørgen og Ingunn driver Heim Vertskap. Vi kombinerer praktisk vertskapserfaringer med teknologisk innsikt for å gjøre korttidsutleie lønnsom og enkel.
          </p>
        </div>
      </section>

      {/* ========== PHOTO SECTION ========== */}
      <section style={{
        padding: '80px 24px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Photo placeholder */}
          <div style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#E8E6E2',
            borderRadius: '12px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: '#999',
            border: `2px dashed ${COLORS.muted}`,
          }}>
            [Foto: Jørgen og Ingunn]
          </div>

          <div style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: COLORS.text,
          }}>
            <p>
              Vi startet Heim Vertskap fordi vi så et gap i markedet. De fleste BnB-drivere gjør alt manuelt. Vi visste at det kunne være bedre — med riktig teknologi og erfaring.
            </p>
            <p>
              I desember 2023 satte vi opp vår første eiendom i Tromsø. Vi testet systemene, lærte hva som fungerer, og skalerte raskt. I dag driver vi 12+ enheter og håndterer 350+ gjester.
            </p>
            <p>
              Filosofien er enkel: <strong>Teknologi skal gjøre jobben. Vi skal løse problemene. Eieren skal tjene penger.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ========== BAKGRUNN ========== */}
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
            Bakgrunn
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            fontSize: 15,
            lineHeight: 1.9,
          }}>
            <div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Jørgen
              </h3>
              <p>
                Oppvokst i Tromsø. Har drevet egen virksomhet før og vet hva det krever å skalere operasjoner. Visste at BnB-drift kunne automatiseres bedre enn det gjorde.
              </p>
              <p>
                Fokus på teknologi og systemtenking. Han driver operasjonen, håndterer Hostaway-setup, PriceLabs-strategi, og sikrer at systemene fungerer.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 16,
                color: COLORS.red,
              }}>
                Ingunn Sofie
              </h3>
              <p>
                Praktisk person som forstår gjesteperspektivet. Håndterer gjestekommunikasjon, rengjøring-koordinering, og de menneskelige sidene av driften.
              </p>
              <p>
                Hun sikrer at hver gjest får en god opplevelse, og at systemene vi bygger faktisk fungerer i praksis. Hun merker hva som lugger før tallene gjør det.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ERFARING ========== */}
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
            Erfaring & resultater
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
            marginBottom: 40,
          }}>
            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <div style={{
                fontSize: 28,
                fontWeight: 800,
                color: COLORS.red,
                marginBottom: 8,
              }}>
                350+
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                gjester håndtert siden desember 2023
              </div>
            </div>

            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <div style={{
                fontSize: 28,
                fontWeight: 800,
                color: COLORS.red,
                marginBottom: 8,
              }}>
                12+
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                enheter under drift (vinterstasjon)
              </div>
            </div>

            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <div style={{
                fontSize: 28,
                fontWeight: 800,
                color: COLORS.red,
                marginBottom: 8,
              }}>
                4.98⭐
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                Airbnb rating
              </div>
            </div>

            <div style={{
              background: COLORS.dark,
              color: '#fff',
              padding: '32px',
              borderRadius: 12,
            }}>
              <div style={{
                fontSize: 28,
                fontWeight: 800,
                color: COLORS.red,
                marginBottom: 8,
              }}>
                9.7/10
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                Booking.com rating
              </div>
            </div>
          </div>

          <div style={{
            background: '#F0E8E6',
            padding: '32px',
            borderRadius: 12,
            borderLeft: `4px solid ${COLORS.red}`,
          }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8 }}>
              <strong>Lærdom:</strong> Det som funker er å kombinere lokal kunnskap (vi vet Tromsø-markedet) med moderne teknologi (PriceLabs, AI, automatisering). Ikke ett eller annet — begge.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FILOSOFI ========== */}
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
            Vår filosofi
          </h2>

          <div style={{
            display: 'grid',
            gap: 32,
          }}>
            {[
              {
                title: 'Eieren skal tjene',
                desc: 'Full Drift handler om at du tjener maksimalt. Vi tar 20%, men du får alt annet. Og du beholder kontrollen.',
              },
              {
                title: 'Teknologi skal jobbe',
                desc: 'Vi bruker verktøy som PriceLabs, Hostaway, Claude AI fordi de fungerer. Ikke fordi de høres bra ut. Ikke jargong — resultater.',
              },
              {
                title: 'Åpenhet',
                desc: 'Du skal vite hva som skjer. Månedlige rapporter, transparent kostnader, ingen skjulte avgifter. Kontrakten er klar.',
              },
              {
                title: 'Vi løser problemer',
                desc: 'Hvis noe går galt, ringer vi deg. Vi løser praktiske problemer. Teknologi skal gjøre jobben, ikke skape nye.',
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#3E2628',
                padding: '28px',
                borderRadius: 8,
              }}>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 12,
                  marginTop: 0,
                  color: COLORS.red,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HVORFOR VELGE OSS ========== */}
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
            Hvorfor velge Heim Vertskap?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}>
            {[
              {
                icon: Users,
                title: 'Lokal tilstedeværelse',
                desc: 'Vi er i Tromsø. Vi ser eiendommen din. Vi møter gjestene dine. Vi løser problemer på dagen.',
              },
              {
                icon: Lightbulb,
                title: 'Teknologi som funker',
                desc: 'Ikke fremtidsteknologi. Teknologi som vi bruker daglig og vet fungerer: Hostaway, PriceLabs, Claude AI.',
              },
              {
                icon: TrendingUp,
                title: 'Proven results',
                desc: '4.98 Airbnb, 9.7 Booking. 350+ gjester. Det er ikke gjetting — det er fakta fra våre egne prosjekter.',
              },
              {
                icon: Shield,
                title: 'Trygg kontrakt',
                desc: 'Alt er skriftlig definert. Du vet nøyaktig hva du får, hva det koster, og hvem som gjør hva.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx}>
                  <Icon size={40} style={{ color: COLORS.red, marginBottom: 16 }} />
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: COLORS.muted,
                    margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== KONTAKT ========== */}
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
            Vil du snakke?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Ring oss. Mail oss. Book en befaring. Vi møter gjerne deg for å diskutere hvordan Full Drift kan fungere for deg.
          </p>

          <div style={{
            display: 'flex',
            gap: 24,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 40,
          }}>
            <a href="mailto:hei@heimvertskap.no" style={{
              background: COLORS.red,
              color: '#fff',
              padding: '14px 32px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: 15,
            }}>
              Send mail
            </a>
            <button style={{
              background: 'transparent',
              border: `2px solid ${COLORS.red}`,
              color: COLORS.red,
              padding: '12px 32px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
            }}>
              Book befaring
            </button>
          </div>

          <p style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
          }}>
            Tromsø, Nord-Norge | <a href="tel:" style={{ color: COLORS.red, textDecoration: 'none' }}>Telefon på forespørsel</a>
          </p>
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

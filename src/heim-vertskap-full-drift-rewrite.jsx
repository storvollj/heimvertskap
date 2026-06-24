import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Zap, Shield, Users, ArrowRight } from 'lucide-react';

const COLORS = {
  bg: '#FCFAFA',
  dark: '#2E1618',
  red: '#E65154',
  text: '#2E1618',
  light: '#E8E6E2',
  muted: '#8B8B85',
};

export default function FullDriftRewrite() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Hva er medvert (co-hosting)?',
      a: 'Du er fortsatt juridisk eier. Pengene fra Airbnb og Booking går direkte til deg. Heim Vertskap håndterer driften — prising, gjestekommunikasjon, rengjøring-koordinering, rapporter. Du betaler 20% provisjon for det. Det er ikke framleie.',
    },
    {
      q: 'Hva gjør Heim Vertskap konkret?',
      a: 'Vi håndterer: annonser, gjestekommunikasjon 24/7 (AI), dynamisk prising (PriceLabs), booking-synkronisering, rengjøring-koordinering, reviews, driftsrapporter. Alt som gjør at du ikke trenger å tenke på det.',
    },
    {
      q: 'Hva er ansvarene mine?',
      a: 'Du er ansvarlig for: bygningsforsikring, strøm, internett, vedlikehold, lovpålagte krav, brannsikkerhet. Vi håndterer driften. Hvis noe går galt, er det definert i kontrakten hvem som gjør hva.',
    },
    {
      q: 'Hvordan fungerer pengeflyt?',
      a: 'Airbnb/Booking betaler deg direkte. Du mottar beløp etter deres provisjon og vaskegebyr. Vi trekker 20% av det netto beløpet og fakturerer månedlig. Du får resten.',
    },
    {
      q: 'Kan dere håndtere flere enheter?',
      a: 'Ja. Vi har erfaring med flereenhetsbygg, leirsteder og kompleks drift. Vi setter opp systemer som skalerer automatisk. Jo flere enheter, jo mer effektiv blir driften.',
    },
    {
      q: 'Hva gjør AI i driften?',
      a: 'Claude AI håndterer gjestekommunikasjon (spørsmål, konfirmering, oppfølging), analyserer driftsdata, genererer rapporter og identifiserer optimiseringspotensial. Det betyr raskere svar til gjester og mindre manuelt arbeid.',
    },
    {
      q: 'Hvordan er prising-optimalisering?',
      a: 'Vi bruker PriceLabs og markedsanalyse for å justere priser automatisk basert på etterspørsel, konkurranse og sesong. Det tjener typisk 15-25% mer enn manuell prising.',
    },
    {
      q: 'Hva hvis noe går galt?',
      a: 'Kontrakten definerer ansvar klart. Vi håndterer driftsproblemer (gjest-issues, system-feil). Du håndterer eier-problemer (forsikring, vedlikehold). Vi er kun ansvarlig ved grov uaktsomhet.',
    },
    {
      q: 'Kan jeg avslå en gjest eller booking?',
      a: 'Du er eier. Vi kan diskutere potensielle problemer, men finalbeslutningen er din. Vi foreslår, du bestemmer.',
    },
    {
      q: 'Hvordan følges driften?',
      a: 'Du får månedlig rapport: inntekter, belegg, gjest-data, rating-trend, optimiseringspotensial. Du kan når som helst kontakte oss for detaljer.',
    },
  ];

  const pillars = [
    {
      icon: TrendingUp,
      title: 'Datadrevet optimalisering',
      desc: 'PriceLabs + markedsanalyse justerer prisene automatisk basert på etterspørsel. 15-25% høyere inntekt enn manuell prising.',
    },
    {
      icon: Zap,
      title: 'Profesjonelle driftssystemer',
      desc: 'Hostaway, multi-OTA-synkronisering, automatiserte arbeidsflyter. Vi driver som overnattingsbedrift, ikke manuell drift.',
    },
    {
      icon: Shield,
      title: 'AI & automatisering',
      desc: 'Claude AI håndterer gjestekommunikasjon, analyser og rapporter. Raskere respons, mindre manuelt arbeid.',
    },
    {
      icon: Users,
      title: 'Lokal vertskapskompetanse',
      desc: '350+ gjester, 4.98⭐ Airbnb, 9.7/10 Booking. Vi vet Tromsø-markedet siden 2023.',
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
            Full Drift
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Vi gjør jobben.<br />
            Du tjener.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 32px',
            lineHeight: 1.7,
            maxWidth: 700,
          }}>
            Du beholder kontrollen og dine anmeldelser. Vi håndterer alt annet: prising, gjestekommunikasjon, rengjøring, rapporter. Du tjener 80% av netto inntekt.
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

      {/* ========== MEDVERT VS FRAMLEIE ========== */}
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
            Medvert vs Framleie
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
          }}>
            {/* Framleie */}
            <div style={{
              background: '#F0E8E6',
              padding: '40px',
              borderRadius: 12,
              border: '2px solid #DDD',
            }}>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 24,
                color: '#999',
              }}>
                ❌ Framleie
              </h3>
              <ul style={{
                fontSize: 14,
                lineHeight: 2,
                listStyle: 'none',
                padding: 0,
              }}>
                <li>Du gir fra deg kontrollen</li>
                <li>Noen andre blir teknisk eier</li>
                <li>De tar alle pengene først</li>
                <li>Du får en andel (om noe er igjen)</li>
                <li>Du har ingen oversikt</li>
                <li>Du mister dine anmeldelser</li>
              </ul>
            </div>

            {/* Medvert */}
            <div style={{
              background: '#E8F5E9',
              padding: '40px',
              borderRadius: 12,
              border: `2px solid ${COLORS.red}`,
            }}>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 24,
                color: COLORS.red,
              }}>
                ✅ Medvert (Full Drift)
              </h3>
              <ul style={{
                fontSize: 14,
                lineHeight: 2,
                listStyle: 'none',
                padding: 0,
              }}>
                <li>Du er juridisk eier</li>
                <li>Pengene går direkte til deg</li>
                <li>Du betaler 20% for driften</li>
                <li>Du tjener 80% av netto</li>
                <li>Full transparens og rapporter</li>
                <li>Du beholder dine anmeldelser</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT'S INCLUDED ========== */}
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
            Full Drift inkluderer
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

          <div style={{
            marginTop: 48,
            background: '#3E2628',
            padding: '32px',
            borderRadius: 8,
          }}>
            <h3 style={{ marginTop: 0, marginBottom: 20 }}>Konkret jobbing:</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              fontSize: 14,
              lineHeight: 1.8,
            }}>
              <div>
                <strong>Driftsstøtte:</strong> Annonser, bilder, tekst optimalisering
              </div>
              <div>
                <strong>Gjestekommunikasjon:</strong> AI-svar på spørsmål, 24/7
              </div>
              <div>
                <strong>Prising:</strong> Automatisk optimalisering basert på marked
              </div>
              <div>
                <strong>Bookingadministrasjon:</strong> Multi-OTA synkronisering
              </div>
              <div>
                <strong>Rengjøring:</strong> Koordinering og logistikk mellom opphold
              </div>
              <div>
                <strong>Reviews:</strong> Aktiv oppfølging for positive anmeldelser
              </div>
              <div>
                <strong>Rapporter:</strong> Månedlig oversikt over inntekter og data
              </div>
              <div>
                <strong>Teknologi:</strong> Hostaway, PriceLabs, Claude AI, automatisering
              </div>
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
            marginBottom: 48,
            textAlign: 'center',
          }}>
            Pengeflyt & økonomi
          </h2>

          <div style={{
            background: COLORS.dark,
            color: '#fff',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 40,
          }}>
            <div style={{
              fontSize: 14,
              marginBottom: 16,
            }}>
              <strong>Eksempel: 50 000 kr etter provisjon til Airbnb/Booking</strong>
            </div>
            <div style={{ fontSize: 13, lineHeight: 2, color: 'rgba(255,255,255,0.9)' }}>
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
            marginBottom: 40,
          }}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>Vaskegebyr</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
              Gjesten betaler vaskegebyr når de booker. Det dekker rengjøring, sengklær, håndklær og forbruksartikler. Beløpet tilfaller oss som del av driftsmodellen.
            </p>
          </div>

          <div style={{
            background: '#F0E8E6',
            padding: '24px',
            borderRadius: 8,
            borderLeft: `4px solid ${COLORS.red}`,
          }}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>Fakturering</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
              Vi fakturerer månedlig etterskuddsvis. Du får oversikt over alle tall: leieinntekter, vaskegebyr, Heim Vertskap-provisjon. Alt transparent.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ANSVAR & TRYGGHET ========== */}
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
            Ansvar & trygghet
          </h2>

          <div style={{
            background: '#3E2628',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
          }}>
            <h3 style={{ marginTop: 0, marginBottom: 24 }}>Vi gjør</h3>
            <ul style={{
              fontSize: 14,
              lineHeight: 2,
              listStyle: 'none',
              padding: 0,
            }}>
              <li>✓ Administrasjon av annonser og bilder</li>
              <li>✓ Gjestekommunikasjon (spørsmål, bekreftelse, oppfølging)</li>
              <li>✓ Prisoptimalisering og booking-synkronisering</li>
              <li>✓ Rengjøring-koordinering</li>
              <li>✓ Håndtering av reviews og rating</li>
              <li>✓ Driftsrapporter og analyse</li>
              <li>✓ Akutte hendelser (vi varsler deg og løser det)</li>
            </ul>
          </div>

          <div style={{
            background: '#3E2628',
            padding: '40px',
            borderRadius: 12,
            marginBottom: 32,
          }}>
            <h3 style={{ marginTop: 0, marginBottom: 24 }}>Du gjør</h3>
            <ul style={{
              fontSize: 14,
              lineHeight: 2,
              listStyle: 'none',
              padding: 0,
            }}>
              <li>✓ Bygningsforsikring</li>
              <li>✓ Strøm, internett, kommunale avgifter</li>
              <li>✓ Vedlikehold av bygg og inventar</li>
              <li>✓ Lovpålagte krav (utleieregistrering osv.)</li>
              <li>✓ Brannsikkerhet og sikkerhetskrav</li>
              <li>✓ Finalbeslutninger om gjester/bookinger</li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(230, 81, 84, 0.1)',
            padding: '24px',
            borderRadius: 8,
            borderLeft: `4px solid ${COLORS.red}`,
          }}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
              <strong>Trygghet:</strong> Alt er definert i skriftlig kontrakt. Heim Vertskap er kun ansvarlig ved grov uaktsomhet. Du har forsikring for skader. Ingen uklarhet.
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHO FITS ========== */}
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
            Full Drift er for deg hvis...
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
                'Du eier en eller flere enheter i Tromsø-området',
                'Du vil tjene penger uten å bruke 20+ timer/mnd på administrasjon',
                'Du vil at en ekspert håndterer prising og gjestekommunikasjon',
                'Du vil at systemene gjør jobben automatisk',
                'Du stoler på at driften fungerer — og at vi ringer hvis det er noe',
                'Du vil ha månedsrapporter slik at du vet hva som skjer',
                'Du vil ikke tenke på teknologi eller driftssystemet',
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
            textAlign: 'center',
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
            Klar for Full Drift?
          </h2>
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
            lineHeight: 1.7,
          }}>
            Vi møter deg i Tromsø. Vi ser eiendommen, svarer på alle spørsmål, og viser hvordan det fungerer.
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
            marginBottom: 32,
          }}>
            Book gratis befaring →
          </button>
          <p style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
          }}>
            Ingen forpliktelse. Vi diskuterer detaljer og svarer på spørsmål.
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

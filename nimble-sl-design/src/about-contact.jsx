// About + Contact

const About = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar active="about" onNav={onNav} />

      {/* Hero */}
      <section style={{ padding: '72px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}><span className="ev-dot" />About NimbleSL</div>
          <h1 style={{ fontSize: 64, maxWidth: 900 }}>
            We started in Gulshan in 2024 because<br/>
            <span className="grad-blue">offshore deserved better than offshore.</span>
          </h1>
          <p className="mt-8" style={{ fontSize: 19, maxWidth: 760 }}>
            NimbleSL was founded on a frustration: most Western companies still associate "offshore engineering" with cheap, slow, and bad. We've spent the last two years proving the opposite — that a Dhaka-based team can ship at Silicon Valley quality, with Silicon Valley discipline, at 40-60% the cost.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '32px 0 64px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            <Stat value="2024" label="Founded" accent="var(--text)" />
            <Stat value="32" label="Engineers on payroll" accent="var(--blue-2)" />
            <Stat value="12" label="Countries served" accent="#67E8F9" />
            <Stat value="98%" label="Client retention" accent="var(--emerald-2)" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '32px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Our story</div>
              <h2 className="mt-4" style={{ fontSize: 40 }}>Three engineers. One thesis.</h2>
              <p className="mt-6" style={{ fontSize: 16 }}>
                In late 2023, Anik Roy was working out of a Toptal contract in San Francisco — billing $145/hr for the same code his Bangladeshi friends were shipping for $25/hr through low-trust agencies. He flew home in January 2024 and started NimbleSL with two former DSC colleagues.
              </p>
              <p className="mt-4" style={{ fontSize: 16 }}>
                The thesis was simple: <b style={{ color: 'var(--text)' }}>build a Western-discipline engineering team in Dhaka.</b> Tight code reviews, demo every Friday, written design docs, no subcontracting. Charge Western clients direct — pass most of the savings on.
              </p>
              <p className="mt-4" style={{ fontSize: 16 }}>
                Two years later, we're 32 engineers, 4 designers, and 6 PMs. We've shipped 50+ projects across 12 countries. Our average client retention is 18 months. We've taken zero outside investment and we're still in the same Gulshan office we started in.
              </p>
            </div>

            <div>
              <div className="card" style={{ padding: 28, background: 'linear-gradient(180deg, rgba(28,35,51,0.7), rgba(20,25,37,0.5))' }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>TIMELINE</div>
                {[
                  { y: '2024 · Q1', t: 'NimbleSL founded', d: 'Anik, Mehrab, Tanha — 3 engineers, 1 office room.' },
                  { y: '2024 · Q3', t: 'First Western client', d: 'Rosachy ships PayFlow MVP in 8 weeks. Word spreads.' },
                  { y: '2025 · Q1', t: 'Product showroom launches', d: 'PayFlow + ClaimWise on subdomains. Live demos = lead magnet.' },
                  { y: '2025 · Q3', t: '50th project shipped', d: 'FraudShield AI hits 96% in production for Blackstone Vale.' },
                  { y: '2026 · Q2', t: 'AI Estimator launches', d: 'Claude-powered scoping. 3-min estimates with 87% confidence.' }
                ].map(t => (
                  <div key={t.y} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                    <div className="mono text-xs" style={{ color: 'var(--blue-2)', width: 80, flexShrink: 0, fontWeight: 600 }}>{t.y}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{t.t}</div>
                      <div className="text-xs text-2 mt-2">{t.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '0 0 96px', borderTop: '1px solid var(--border)', paddingTop: 96 }}>
        <div className="container">
          <SectionHeader eyebrow="What we believe" title="Five values. We refuse to compromise on these." align="center" />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {[
              { i: Icons.check, t: 'Receipts every Friday', d: 'Demo video, sprint report, Slack channel access. Always.' },
              { i: Icons.lock, t: 'Your IP is yours', d: 'No "platform fees" or "code royalties." You own everything we write.' },
              { i: Icons.users, t: 'No subcontracting', d: 'Every engineer on your project is on our W-2 equivalent.' },
              { i: Icons.dollar, t: 'Transparent pricing', d: 'Fixed-bid where possible. Hourly where it makes sense.' },
              { i: Icons.shield, t: 'Hand off cleanly', d: 'Runbooks, training videos, code walkthroughs. You can fire us.' }
            ].map(v => (
              <div key={v.t} className="card" style={{ padding: 22 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)', display: 'grid', placeItems: 'center', color: 'var(--blue-2)' }}><v.i size={16} /></div>
                <h4 className="mt-4" style={{ fontSize: 14, fontWeight: 700 }}>{v.t}</h4>
                <p className="text-xs mt-3">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="The team" title="Who you'll actually work with." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { n: 'Anik Roy', r: 'Founder & CEO', sub: 'Ex-Toptal · Ex-DSC', initials: 'AR', accent: '#3B82F6' },
              { n: 'Mehrab Khalid', r: 'Head of Engineering', sub: '12 yrs · ex-Pathao', initials: 'MK', accent: '#06B6D4' },
              { n: 'Tanha Hossain', r: 'Head of Design', sub: 'Ex-bKash · Ex-Sheba', initials: 'TH', accent: '#10B981' },
              { n: 'Sajid Parvez', r: 'Head of AI', sub: 'PhD ML · BUET', initials: 'SP', accent: '#A855F7' },
              { n: 'Raisa Ali', r: 'Head of Delivery', sub: 'ex-Therap · 8 yrs PM', initials: 'RA', accent: '#F59E0B' },
              { n: 'Nadia Sultana', r: 'Head of Mobile', sub: 'Flutter GDE · 6 yrs', initials: 'NS', accent: '#F43F5E' },
              { n: 'Rafsan Iqbal', r: 'Head of Infra', sub: 'AWS DevOps Pro', initials: 'RI', accent: '#3B82F6' },
              { n: 'Maya Chen', r: 'Head of US Sales', sub: 'Based in SF · Ex-Toptal', initials: 'MC', accent: '#06B6D4' }
            ].map(t => (
              <div key={t.n} className="card card-hover" style={{ padding: 22, textAlign: 'center' }}>
                <Avatar initials={t.initials} size={72} />
                <div style={{ fontWeight: 700, marginTop: 14 }}>{t.n}</div>
                <div className="text-sm" style={{ color: t.accent, marginTop: 4 }}>{t.r}</div>
                <div className="mono text-xs text-3 mt-2">{t.sub}</div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 }}>
                  <Icons.linkedin size={14} style={{ color: 'var(--text-3)', cursor: 'pointer' }} />
                  <Icons.github size={14} style={{ color: 'var(--text-3)', cursor: 'pointer' }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="btn btn-soft">+ 24 more engineers · See full team</button>
          </div>
        </div>
      </section>

      {/* Office */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div className="placeholder" style={{ height: 280 }}>
              Office photo — Gulshan-1<br/>
              <span style={{ opacity: 0.5 }}>1200 × 800 — bright workspace, plants, monitors</span>
            </div>
            <div className="placeholder" style={{ height: 280 }}>
              Office photo — engineering floor<br/>
              <span style={{ opacity: 0.5 }}>1200 × 800 — open workstations, whiteboards</span>
            </div>
          </div>
          <div className="mt-6" style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--text-2)' }}>
            <Icons.pin size={16} style={{ color: 'var(--blue-2)' }} />
            <span>House 27, Road 11, Gulshan-1, Dhaka 1212, Bangladesh</span>
            <span style={{ color: 'var(--text-3)' }}>·</span>
            <span className="mono text-sm">GMT +6</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Contact = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar onNav={onNav} />

      <section style={{ padding: '72px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}><span className="ev-dot" />Contact</div>
          <h1 style={{ fontSize: 56 }}>Four ways to reach us.<br/><span className="grad-blue">All get a same-day reply.</span></h1>
          <p className="mt-6" style={{ fontSize: 17, maxWidth: 580, margin: '24px auto 0' }}>
            We answer every email within 24 hours, no matter the timezone. Pick the channel that fits how you work.
          </p>
        </div>
      </section>

      {/* Channel cards */}
      <section style={{ padding: '24px 0 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { i: Icons.clock, t: 'Book a 30-min call', d: 'Discovery call with Anik or Maya (SF). Pick a slot on Calendar.', cta: 'Open Cal.com', emerald: true },
              { i: Icons.mail, t: 'Email us', d: 'hello@nimblesl.com — replies within 24h. Project briefs welcome.', cta: 'hello@nimblesl.com' },
              { i: Icons.message, t: 'WhatsApp / Telegram', d: 'For quick questions or urgent project chats.', cta: '+1 (415) 555-0192' },
              { i: Icons.sparkle, t: 'AI Estimator', d: 'Get a scoped estimate in 3 minutes — no email gate.', cta: 'Try the wizard' }
            ].map(c => (
              <div key={c.t} className="card card-hover" style={{ padding: 24, cursor: 'pointer' }}>
                <div style={{ width: 40, height: 40, borderRadius: 9, background: c.emerald ? 'rgba(16,185,129,0.15)' : 'rgba(59,130,246,0.15)', border: `1px solid ${c.emerald ? 'rgba(16,185,129,0.4)' : 'rgba(59,130,246,0.4)'}`, display: 'grid', placeItems: 'center', color: c.emerald ? 'var(--emerald-2)' : 'var(--blue-2)' }}>
                  <c.i size={18} />
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginTop: 14 }}>{c.t}</h4>
                <p className="text-xs mt-3">{c.d}</p>
                <div className="mono text-xs mt-6" style={{ color: c.emerald ? 'var(--emerald-2)' : 'var(--blue-2)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  {c.cta} <Icons.arrow size={11} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>
              <div style={{ padding: 48 }}>
                <h2 style={{ fontSize: 32 }}>Start a project</h2>
                <p className="mt-3">Fill the form below — we route you to the right person within 4 working hours.</p>

                <div className="mt-8" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { l: 'Full name', p: 'Jane Doe' },
                    { l: 'Work email', p: 'jane@company.com' },
                    { l: 'Company', p: 'Acme Inc.' },
                    { l: 'Role', p: 'CTO / VP Eng / Founder' }
                  ].map(f => (
                    <div key={f.l}>
                      <label className="mono text-xs text-3" style={{ display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.l}</label>
                      <input placeholder={f.p} style={{
                        width: '100%', padding: '12px 14px',
                        background: 'var(--surface)', border: '1px solid var(--border)',
                        borderRadius: 8, color: 'var(--text)', fontFamily: 'inherit', fontSize: 14, outline: 'none'
                      }} />
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="mono text-xs text-3" style={{ display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Project type</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {['New build', 'Rebuild / modernization', 'Staff augmentation', 'AI / ML project', 'UI/UX only', 'Not sure'].map((t, i) => (
                      <button key={t} style={{
                        padding: '8px 14px', borderRadius: 999,
                        background: i === 0 ? 'rgba(59,130,246,0.15)' : 'var(--surface)',
                        border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.5)' : 'var(--border)'}`,
                        color: i === 0 ? 'var(--blue-2)' : 'var(--text-2)',
                        fontSize: 13, cursor: 'pointer', fontFamily: 'inherit'
                      }}>{t}</button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mono text-xs text-3" style={{ display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tell us about your project</label>
                  <textarea placeholder="What are you building? Stage? Timeline?" style={{
                    width: '100%', minHeight: 120, padding: 14,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 8, color: 'var(--text)', fontFamily: 'inherit', fontSize: 14, outline: 'none', resize: 'vertical'
                  }} />
                </div>

                <div className="mt-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="text-xs text-3" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Icons.lock size={12} /> Your info stays with us. No third-party trackers.
                  </div>
                  <button className="btn btn-emerald" style={{ padding: '12px 22px' }}>
                    Send & schedule call <Icons.arrow size={14} />
                  </button>
                </div>
              </div>

              {/* Side panel */}
              <div style={{ padding: 40, background: 'linear-gradient(180deg, rgba(11,15,27,0.6), rgba(20,25,37,0.4))', borderLeft: '1px solid var(--border)' }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>HEADQUARTERS</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>Nimble Software Lab Ltd.</div>
                <div className="text-sm text-2 mt-2">
                  House 27, Road 11<br/>
                  Gulshan-1, Dhaka 1212<br/>
                  Bangladesh
                </div>
                <div className="mono text-xs text-3 mt-4">GMT +6 · Sun–Thu, 09:00–18:00</div>

                <div style={{ height: 1, background: 'var(--border)', margin: '24px 0' }} />

                <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>US PRESENCE</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>San Francisco satellite</div>
                <div className="text-sm text-2 mt-2">Maya Chen, Head of US Sales</div>
                <div className="mono text-xs text-3 mt-2">PT timezone · Mon–Fri</div>

                <div style={{ height: 1, background: 'var(--border)', margin: '24px 0' }} />

                <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>RESPONSE SLA</div>
                {[
                  ['Email', '< 24 hr', 'var(--emerald-2)'],
                  ['Estimator request', '< 4 hr', 'var(--blue-2)'],
                  ['Calendar booking', 'Instant', 'var(--emerald-2)']
                ].map(([k, v, c]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
                    <span className="text-2">{k}</span>
                    <span className="mono" style={{ color: c, fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { About, Contact });

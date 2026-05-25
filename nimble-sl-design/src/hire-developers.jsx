// Hire Developers / Staff Augmentation

const HireDevelopers = ({ onNav }) => {
  const skills = [
    { name: 'React', from: '$22/hr', count: 14, accent: '#60A5FA' },
    { name: 'Angular', from: '$24/hr', count: 9, accent: '#F43F5E' },
    { name: 'Flutter', from: '$26/hr', count: 7, accent: '#67E8F9' },
    { name: 'Node.js', from: '$22/hr', count: 11, accent: '#34D399' },
    { name: 'Python', from: '$25/hr', count: 12, accent: '#FCD34D' },
    { name: '.NET', from: '$28/hr', count: 6, accent: '#C084FC' },
    { name: 'AI / ML', from: '$38/hr', count: 5, accent: '#A855F7' },
    { name: 'DevOps', from: '$32/hr', count: 4, accent: '#F59E0B' }
  ];

  const developers = [
    { id: 'DEV-0142', role: 'Senior Full-Stack Engineer', stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'], yrs: 7, rate: '$32/hr', tz: 'GMT +6', avail: 'now', initials: 'AR' },
    { id: 'DEV-0287', role: 'ML Engineer', stack: ['PyTorch', 'LangChain', 'Claude API', 'FastAPI'], yrs: 5, rate: '$42/hr', tz: 'GMT +6', avail: 'in 2 wk', initials: 'MK' },
    { id: 'DEV-0356', role: 'Mobile Engineer (Flutter)', stack: ['Flutter', 'Dart', 'Firebase', 'gRPC'], yrs: 6, rate: '$28/hr', tz: 'GMT +6', avail: 'now', initials: 'TH' },
    { id: 'DEV-0411', role: 'DevOps & Infra', stack: ['Terraform', 'AWS', 'Kubernetes', 'Cloudflare'], yrs: 8, rate: '$36/hr', tz: 'GMT +6', avail: 'now', initials: 'NS' }
  ];

  return (
    <div className="page">
      <NavBar active="hire-developers" onNav={onNav} />

      <section style={{ padding: '64px 0 32px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}><span className="ev-dot" />Staff augmentation</div>
              <h1 style={{ fontSize: 60 }}>Hire pre-vetted developers.<br/><span className="grad-blue">Start in 48 hours.</span></h1>
              <p className="mt-6" style={{ fontSize: 18, maxWidth: 560 }}>
                Scale your engineering team with senior developers we've already trained and shipped with. Dedicated, part-time, or project-based. From $22/hr.
              </p>
              <div className="mt-8" style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-emerald" style={{ padding: '14px 22px' }}><Icons.clock size={14}/> Book a 15-min screening</button>
                <button className="btn btn-ghost" style={{ padding: '14px 22px' }}>Download rate card</button>
              </div>
              <div className="mt-8" style={{ display: 'flex', gap: 32 }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--blue-2)' }}>48hr</div>
                  <div className="text-xs text-3 mt-2">Avg time-to-start</div>
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--emerald-2)' }}>4–8hr</div>
                  <div className="text-xs text-3 mt-2">Overlap with EU / US-East</div>
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, fontFamily: 'var(--font-display)', color: '#FCD34D' }}>5+yr</div>
                  <div className="text-xs text-3 mt-2">Avg seniority</div>
                </div>
              </div>
            </div>

            {/* Engagement model card */}
            <div className="card" style={{ padding: 28 }}>
              <div className="mono text-xs text-3" style={{ marginBottom: 8 }}>ENGAGEMENT MODELS</div>
              {[
                { t: 'Dedicated', desc: 'Full-time, 40hr/wk, your direct report. Min 3-month engagement.', price: 'from $3,500/mo' },
                { t: 'Part-time', desc: 'Half-time, 20hr/wk. Same engineer, flexible cadence.', price: 'from $1,800/mo' },
                { t: 'Project-based', desc: 'Fixed-scope sprint or team. Outcome-priced, not hourly.', price: 'from $5,000/sprint' }
              ].map(m => (
                <div key={m.t} style={{ padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{m.t}</div>
                    <div className="mono text-sm" style={{ color: 'var(--emerald-2)', fontWeight: 600 }}>{m.price}</div>
                  </div>
                  <div className="text-xs text-2 mt-2">{m.desc}</div>
                </div>
              ))}
              <button className="btn btn-primary" style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}>Compare models →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills grid */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Skills available" title="Match by skill, seniority, or stack." sub="Click any to see pricing details and engineer profiles." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {skills.map(s => (
              <div key={s.name} className="card card-hover" style={{ padding: 24, cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.accent}22`, border: `1px solid ${s.accent}55`, display: 'grid', placeItems: 'center', color: s.accent, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14 }}>{s.name.slice(0,2)}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{s.name}</div>
                    <div className="mono text-xs text-3 mt-2">{s.count} engineers</div>
                  </div>
                </div>
                <div className="mt-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                  <div>
                    <div className="text-xs text-3 mono">FROM</div>
                    <div style={{ fontWeight: 700, color: 'var(--emerald-2)', fontSize: 14 }}>{s.from}</div>
                  </div>
                  <Icons.arrow size={14} style={{ color: 'var(--text-3)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer profiles */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Available now" title="Anonymized profiles. Real engineers." sub="Names redacted until contracts; everything else is real — interview them on a 30-min screening call." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {developers.map(d => (
              <div key={d.id} className="card card-hover" style={{ padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: 16 }}>
                  <Avatar initials={d.initials} size={56} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div>
                        <div className="mono text-xs text-3">{d.id}</div>
                        <h4 style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>{d.role}</h4>
                      </div>
                      <span className="tag tag-emerald" style={{ fontSize: 10 }}>Available {d.avail}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                      {d.stack.map(s => <span key={s} className="tag" style={{ fontSize: 10 }}>{s}</span>)}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                      <div>
                        <div className="mono text-xs text-3">YRS EXPERIENCE</div>
                        <div style={{ fontWeight: 700, marginTop: 2 }}>{d.yrs}+</div>
                      </div>
                      <div>
                        <div className="mono text-xs text-3">RATE</div>
                        <div className="mono" style={{ fontWeight: 700, color: 'var(--emerald-2)', marginTop: 2 }}>{d.rate}</div>
                      </div>
                      <div>
                        <div className="mono text-xs text-3">TIMEZONE</div>
                        <div className="mono" style={{ fontWeight: 700, marginTop: 2, fontSize: 13 }}>{d.tz}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-soft" style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}>Book a screening call →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timezone overlap */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{ padding: 40 }}>
            <SectionHeader eyebrow="Timezone overlap" title="Your morning is our afternoon." sub="GMT+6 (Dhaka) gives 4–6 hr overlap with EU and 2–4 hr with US-East. Most clients schedule daily standups 8–9 AM PST." />
            <div className="mt-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
                <div style={{ width: 140, fontSize: 12, color: 'var(--text-2)' }}>UTC Hour →</div>
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 1 }}>
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="mono text-xs text-3" style={{ textAlign: 'center' }}>{i}</div>
                  ))}
                </div>
              </div>
              {[
                { tz: 'Dhaka (NimbleSL)', offset: 6, work: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], color: '#3B82F6' },
                { tz: 'London (UK)', offset: 0, work: [9, 10, 11, 12, 13, 14, 15, 16, 17], color: '#10B981' },
                { tz: 'New York (US-East)', offset: -5, work: [14, 15, 16, 17, 18, 19, 20, 21, 22], color: '#F59E0B' },
                { tz: 'San Francisco (US-West)', offset: -8, work: [17, 18, 19, 20, 21, 22, 23, 0, 1], color: '#A855F7' }
              ].map(z => (
                <div key={z.tz} style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 6 }}>
                  <div style={{ width: 140, fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{z.tz}</div>
                  <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 1 }}>
                    {Array.from({ length: 24 }).map((_, i) => {
                      const active = z.work.includes(i);
                      return <div key={i} style={{ height: 22, background: active ? z.color : 'var(--surface-2)', borderRadius: 2, opacity: active ? 0.85 : 0.4 }} />;
                    })}
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24, padding: 16, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icons.check size={14} stroke={3} style={{ color: 'var(--emerald-2)' }} />
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Sweet spot for sync calls: 14:00–18:00 UTC</div>
                </div>
                <div className="text-xs text-2 mt-2">That's 8:00–12:00 PT, 11:00–15:00 ET, 14:00–18:00 GMT, 20:00–24:00 in Dhaka.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{ padding: 56, textAlign: 'center', background: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(16,185,129,0.08))', borderColor: 'rgba(59,130,246,0.3)' }}>
            <h2 style={{ fontSize: 40 }}>Need a developer this week?</h2>
            <p className="mt-3" style={{ maxWidth: 520, margin: '12px auto 0' }}>
              Book a 15-min screening — describe what you need, we'll line up two candidates within 24 hours.
            </p>
            <div className="mt-8" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-emerald"><Icons.clock size={14}/> Book screening</button>
              <button className="btn btn-primary"><Icons.mail size={14}/> Email the team</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

window.HireDevelopers = HireDevelopers;

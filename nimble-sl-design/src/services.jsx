// Services listing + AI/ML detail

const ServicesList = ({ onNav }) => {
  const services = [
    { slug: 'custom', icon: Icons.code, title: 'Custom Software Development', desc: 'Bespoke platforms engineered to your exact workflow. From greenfield to legacy modernization.', price: '$25K–$120K+', stack: ['Node.js', 'Python', '.NET', 'Go'], accent: 'blue' },
    { slug: 'web', icon: Icons.globe, title: 'Web Application Development', desc: 'SSR-first Angular, Next.js, React. Core Web Vitals 90+ baked in.', price: '$15K–$80K', stack: ['Angular 21', 'Next.js', 'React', 'Tailwind'], accent: 'cyan' },
    { slug: 'mobile', icon: Icons.mobile, title: 'Mobile App Development', desc: 'Flutter & React Native. Offline-first architecture across 8 production apps.', price: '$18K–$90K', stack: ['Flutter', 'React Native', 'Swift', 'Kotlin'], accent: 'purple' },
    { slug: 'cloud', icon: Icons.cloud, title: 'Cloud Solutions & DevOps', desc: 'AWS, GCP, Cloudflare. Terraform, GitOps, observability — infra you can hand off.', price: '$10K–$60K', stack: ['AWS', 'Terraform', 'K8s', 'Cloudflare'], accent: 'emerald' },
    { slug: 'ai', icon: Icons.brain, title: 'AI & Machine Learning', desc: 'RAG systems, LLM apps, GNN fraud detection. We shipped a 96%-accurate model.', price: '$20K–$120K', stack: ['Claude', 'GPT-4', 'PyTorch', 'LangChain'], accent: 'amber' },
    { slug: 'design', icon: Icons.palette, title: 'UI/UX Design', desc: 'Design systems, validated user flows, prototypes. Lead the design, or own the design.', price: '$5K–$40K', stack: ['Figma', 'Framer', 'Principle', 'Lottie'], accent: 'rose' }
  ];

  return (
    <div className="page">
      <NavBar active="services" onNav={onNav} />
      <section style={{ padding: '72px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}><span className="ev-dot" />Services</div>
          <h1 style={{ fontSize: 56 }}>Six disciplines.<br/><span className="grad-blue">One delivery team.</span></h1>
          <p className="mt-6" style={{ fontSize: 18, maxWidth: 620, margin: '24px auto 0' }}>
            No subcontractors, no agency markup. Engineers we hired, trained, and retained — shipping for clients in 12 countries since 2024.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {services.map((s, idx) => (
              <div key={s.slug} className="card card-hover" style={{ padding: 32, cursor: 'pointer' }} onClick={() => s.slug === 'ai' && onNav('service-detail')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: { blue: 'rgba(59,130,246,0.1)', cyan: 'rgba(6,182,212,0.1)', purple: 'rgba(168,85,247,0.1)', emerald: 'rgba(16,185,129,0.1)', amber: 'rgba(245,158,11,0.1)', rose: 'rgba(244,63,94,0.1)' }[s.accent],
                    border: `1px solid ${ { blue: 'rgba(59,130,246,0.4)', cyan: 'rgba(6,182,212,0.4)', purple: 'rgba(168,85,247,0.4)', emerald: 'rgba(16,185,129,0.4)', amber: 'rgba(245,158,11,0.4)', rose: 'rgba(244,63,94,0.4)' }[s.accent]}`,
                    display: 'grid', placeItems: 'center',
                    color: { blue: '#60A5FA', cyan: '#67E8F9', purple: '#C084FC', emerald: '#34D399', amber: '#FCD34D', rose: '#FDA4AF' }[s.accent]
                  }}>
                    <s.icon size={24} />
                  </div>
                  <div className="mono text-xs" style={{ color: 'var(--text-3)' }}>0{idx+1} / 06</div>
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 10 }}>{s.title}</h3>
                <p className="text-sm" style={{ marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                  {s.stack.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                  <div>
                    <div className="mono text-xs text-3">Typical range</div>
                    <div className="mono" style={{ color: 'var(--emerald-2)', fontWeight: 600, fontSize: 14, marginTop: 2 }}>{s.price}</div>
                  </div>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-2)', fontSize: 13, fontWeight: 600 }}>
                    Learn more <Icons.arrow size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{
            padding: 48,
            background: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(16,185,129,0.08))',
            border: '1px solid rgba(59,130,246,0.3)',
            display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32, alignItems: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: 32 }}>Not sure which service you need?</h3>
              <p className="mt-3">Describe your project — our AI Estimator suggests the right service mix, team composition, and budget range in 3 minutes.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button className="btn btn-emerald" onClick={() => onNav('estimator')}><Icons.sparkle size={14}/> Try AI Estimator</button>
              <button className="btn btn-ghost">Book a call</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ServiceDetail = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar active="services" onNav={onNav} />

      {/* Hero */}
      <section style={{ padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(800px 400px at 30% 0%, rgba(245,158,11,0.12), transparent 60%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          {/* breadcrumb */}
          <div className="mono text-xs" style={{ color: 'var(--text-3)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('homepage')}>Home</span>
            <Icons.arrow size={10} />
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('services')}>Services</span>
            <Icons.arrow size={10} />
            <span style={{ color: 'var(--text)' }}>AI & Machine Learning</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20, background: 'rgba(245,158,11,0.08)', color: '#FCD34D', borderColor: 'rgba(245,158,11,0.3)' }}>
                <Icons.brain size={11} /> AI & Machine Learning
              </div>
              <h1 style={{ fontSize: 60 }}>Ship ML systems that<br/>actually hit production.</h1>
              <p className="mt-6" style={{ fontSize: 18, maxWidth: 560 }}>
                RAG chatbots, LLM-powered tools, fraud detection, recommendation engines. We've shipped 6 ML systems live since 2024 — including a graph-neural-network fraud detector running at 96% accuracy at Blackstone Vale.
              </p>
              <div className="mt-8" style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-primary" onClick={() => onNav('estimator')}>Get a custom quote <Icons.arrow size={14}/></button>
                <button className="btn btn-ghost">Try FraudShield demo <Icons.external size={14}/></button>
              </div>
              <div className="mt-8" style={{ display: 'flex', gap: 32 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: '#FCD34D' }}>96%</div>
                  <div className="text-xs text-3 mt-2">Avg model accuracy in prod</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: '#FCD34D' }}>6</div>
                  <div className="text-xs text-3 mt-2">ML systems live</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: '#FCD34D' }}>$48K</div>
                  <div className="text-xs text-3 mt-2">Median project cost</div>
                </div>
              </div>
            </div>
            <div>
              {/* Architecture diagram preview */}
              <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(28,35,51,0.7), rgba(20,25,37,0.5))' }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>// RAG architecture · FraudShield AI</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { l: 'User query', c: '#60A5FA', i: Icons.user },
                    { l: 'Embedding · OpenAI ada-002', c: '#67E8F9', i: Icons.sparkle },
                    { l: 'Vector search · pgvector', c: '#34D399', i: Icons.search },
                    { l: 'Context + prompt · Claude Sonnet', c: '#C084FC', i: Icons.brain },
                    { l: 'Streaming response', c: '#FCD34D', i: Icons.zap }
                  ].map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <div style={{
                        padding: '12px 14px',
                        background: 'rgba(11,15,27,0.6)',
                        border: `1px solid ${step.c}55`,
                        borderRadius: 8,
                        display: 'flex', alignItems: 'center', gap: 12
                      }}>
                        <div style={{ width: 30, height: 30, borderRadius: 6, background: `${step.c}22`, color: step.c, display: 'grid', placeItems: 'center' }}>
                          <step.i size={14} />
                        </div>
                        <div className="mono" style={{ fontSize: 12, color: 'var(--text)' }}>{step.l}</div>
                      </div>
                      {i < arr.length - 1 && (
                        <div style={{ paddingLeft: 18, color: 'var(--text-3)' }}><Icons.arrowDown size={14} /></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-solution */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            <div>
              <div className="eyebrow" style={{ background: 'rgba(244,63,94,0.08)', color: '#FDA4AF', borderColor: 'rgba(244,63,94,0.3)' }}>The problem</div>
              <h2 className="mt-4" style={{ fontSize: 36 }}>POCs are easy. Production ML is brutal.</h2>
              <p className="mt-4">A weekend Jupyter notebook hits 88% accuracy. Six months later, the model has drifted, costs $14K/mo to serve, returns garbage on edge cases, and nobody on your team can debug it.</p>
              <div className="mt-6" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Vendor demos look magic, real data is messy',
                  'GPU bills balloon without observability',
                  'Hallucinations & prompt injection in prod',
                  'No clear hand-off from data team to backend'
                ].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 999, background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.4)', display: 'grid', placeItems: 'center', color: '#FDA4AF', fontSize: 10 }}>✕</div>
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ background: 'rgba(16,185,129,0.08)', color: 'var(--emerald-2)', borderColor: 'rgba(16,185,129,0.3)' }}>How we ship</div>
              <h2 className="mt-4" style={{ fontSize: 36 }}>Models you can debug, monitor, and own.</h2>
              <p className="mt-4">We build ML the way we build backends: typed, tested, observable, and handed off with runbooks. You get model cards, eval suites, and a Grafana dashboard — not a black box.</p>
              <div className="mt-6" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Eval suite with synthetic + real-world test sets',
                  'Cost guardrails per request, per tenant, per day',
                  'Drift monitoring + automated rollback',
                  'Prompts in version control, not config UIs'
                ].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 999, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', display: 'grid', placeItems: 'center', color: 'var(--emerald-2)' }}><Icons.check size={11} stroke={3} /></div>
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="What you get" title="No vague 'AI strategy.' Tangible deliverables." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { i: Icons.sparkle, t: 'LLM-Powered Applications', d: 'RAG chatbots, document Q&A, agent workflows. Claude/GPT-4 with citation, eval, and observability built-in.' },
              { i: Icons.shield, t: 'Custom ML Models', d: 'Fraud detection, churn prediction, demand forecasting. PyTorch & XGBoost, deployed on AWS SageMaker or your own infra.' },
              { i: Icons.brain, t: 'Computer Vision', d: 'Document OCR, ID verification, visual inspection. YOLO, Detectron2, Vertex AI Vision.' },
              { i: Icons.chart, t: 'Recommendation Engines', d: 'Two-tower deep learning, hybrid retrieval, real-time personalization. Tested across 3 e-commerce clients.' },
              { i: Icons.message, t: 'Voice & Conversational AI', d: 'Whisper STT, ElevenLabs TTS, full voice agent loops with interruption handling.' },
              { i: Icons.code, t: 'MLOps & Hand-off', d: 'CI/CD for models, feature stores, eval gates. Your team owns it from day one, not day 90.' }
            ].map(d => (
              <div key={d.t} className="card" style={{ padding: 24 }}>
                <d.i size={22} style={{ color: '#FCD34D' }} />
                <h4 className="mt-4" style={{ fontSize: 17, fontWeight: 700 }}>{d.t}</h4>
                <p className="text-sm mt-3">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Tech stack" title="The tools we actually ship with." sub="Not a logos wall — these are the libraries we have shipped at production scale, with senior engineers who know their edge cases." />
          <div className="mt-12" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { n: 'Claude (Anthropic)', a: 'purple' }, { n: 'GPT-4o', a: 'emerald' }, { n: 'Llama 3.1', a: 'blue' },
              { n: 'PyTorch', a: 'amber' }, { n: 'TensorFlow', a: 'amber' }, { n: 'XGBoost', a: 'rose' },
              { n: 'LangChain', a: 'cyan' }, { n: 'LlamaIndex', a: 'cyan' }, { n: 'pgvector', a: 'emerald' },
              { n: 'Pinecone', a: 'purple' }, { n: 'Weaviate', a: 'purple' }, { n: 'Qdrant', a: 'purple' },
              { n: 'AWS SageMaker', a: 'amber' }, { n: 'Vertex AI', a: 'blue' }, { n: 'Groq', a: 'rose' },
              { n: 'Modal', a: 'gray' }, { n: 'Replicate', a: 'gray' }, { n: 'Whisper', a: 'cyan' },
              { n: 'ElevenLabs', a: 'rose' }, { n: 'Cloudflare Workers AI', a: 'amber' }
            ].map(t => <TechBadge key={t.n} name={t.n} accent={t.a} />)}
          </div>
        </div>
      </section>

      {/* Related products + case study */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Related" title="Already built. Try the demos." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
            <div className="card" style={{ padding: 32, background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(168,85,247,0.04))', borderColor: 'rgba(168,85,247,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(168,85,247,0.2)', display: 'grid', placeItems: 'center' }}>
                  <Icons.shield size={20} style={{ color: '#C084FC' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 22 }}>FraudShield AI</h3>
                  <div className="mono text-xs text-3">fraudshield.nimblesl.com</div>
                </div>
                <span className="tag tag-purple" style={{ marginLeft: 'auto' }}>AI/ML</span>
              </div>
              <p>96% accurate fraud detection using graph neural networks. Try the live demo — upload a transaction CSV and watch the model classify in 30–60 seconds.</p>
              <div className="mt-6" style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-primary"><Icons.play size={14}/> Launch demo</button>
                <button className="btn btn-ghost" onClick={() => onNav('case-study')}>Read case study</button>
              </div>
            </div>
            <div className="card" style={{ padding: 32 }}>
              <div className="mono text-xs" style={{ color: 'var(--text-3)', marginBottom: 8 }}>CASE SNIPPET</div>
              <h4 style={{ fontSize: 17, fontWeight: 700 }}>From rule engine to GNN at Blackstone Vale</h4>
              <p className="text-sm mt-3">Replaced a 71%-accurate rules-based system with a graph neural net trained on 2.4M historical claims. Shipped in 6 weeks for $48K.</p>
              <div className="mt-6" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <div className="mono" style={{ color: 'var(--emerald-2)', fontSize: 22, fontWeight: 700 }}>+25pp</div>
                  <div className="text-xs text-3">Accuracy lift</div>
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--emerald-2)', fontSize: 22, fontWeight: 700 }}>$210K</div>
                  <div className="text-xs text-3">Saved vs US quote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing transparency */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Pricing" title="Transparent ranges. No surprises." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { tier: 'Discovery + POC', range: '$8K–$20K', dur: '3–4 weeks', incl: ['Use-case workshop', 'Data audit', 'Eval criteria', 'Prototype on real data', 'Go/no-go memo'] },
              { tier: 'MVP Build', range: '$25K–$60K', dur: '8–12 weeks', incl: ['Production model', 'API + observability', 'Eval suite (100+ tests)', 'Cost guardrails', 'Team training'], featured: true },
              { tier: 'Enterprise Build', range: '$60K–$120K+', dur: '14–24 weeks', incl: ['Multi-model architecture', 'Multi-tenant infra', 'Active learning loop', 'Compliance review', '12-month support'] }
            ].map(p => (
              <div key={p.tier} className="card" style={{
                padding: 32,
                background: p.featured ? 'linear-gradient(180deg, rgba(245,158,11,0.10), rgba(245,158,11,0.02))' : undefined,
                borderColor: p.featured ? 'rgba(245,158,11,0.4)' : 'var(--border)'
              }}>
                {p.featured && <span className="tag tag-amber" style={{ fontSize: 10, marginBottom: 12 }}>Most common</span>}
                <h4 style={{ fontSize: 20, fontWeight: 700 }}>{p.tier}</h4>
                <div className="mt-3" style={{ fontSize: 28, fontFamily: 'var(--font-display)', fontWeight: 800, color: p.featured ? '#FCD34D' : 'var(--text)' }}>{p.range}</div>
                <div className="mono text-xs text-3 mt-2">{p.dur}</div>
                <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.incl.map(i => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Icons.check size={13} stroke={2.5} style={{ color: 'var(--emerald-2)', flexShrink: 0 }} />
                      <span className="text-sm">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{ padding: 48, textAlign: 'center', background: 'linear-gradient(135deg, rgba(245,158,11,0.10), rgba(168,85,247,0.06))', borderColor: 'rgba(245,158,11,0.3)' }}>
            <h2 style={{ fontSize: 36 }}>Have an AI project in mind?</h2>
            <p className="mt-3" style={{ maxWidth: 480, margin: '12px auto 0' }}>Describe it in the Estimator — get a tailored scope, team mix, and budget range in 3 minutes.</p>
            <div className="mt-6" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-emerald" onClick={() => onNav('estimator')}><Icons.sparkle size={14}/> Try AI Estimator</button>
              <button className="btn btn-ghost">Book a discovery call</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { ServicesList, ServiceDetail });

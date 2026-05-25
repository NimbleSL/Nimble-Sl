import Image from 'next/image';

const CLIENTS = [
  { name: 'Hayaa', logo: '/assets/images/clients/hayaacola.jpg' },
  { name: 'Alieaz Resources', logo: '/assets/images/clients/ch15.jpg' },
  { name: 'WPEDO', logo: '/assets/images/clients/north-avenue.jpg' },
  { name: 'Rosachy', logo: '/assets/images/clients/rosachy.jpg' },
  { name: 'Artisan Energy', logo: '/assets/images/clients/wpedo.jpg' },
];

export function ClientLogos() {
  return (
    <section style={{ padding: '40px 0 48px', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <p className="text-center text-xs uppercase tracking-widest mb-8 font-mono" style={{ color: 'var(--text-3)' }}>
          Trusted by companies across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className="rounded-xl overflow-hidden transition-all duration-200 group-hover:scale-105"
                style={{
                  width: 100,
                  height: 100,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                }}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={76}
                  height={76}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-center" style={{ color: 'var(--text-3)' }}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

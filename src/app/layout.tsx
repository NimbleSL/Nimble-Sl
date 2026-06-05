import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getOrganizationJsonLd, getWebSiteJsonLd, getLocalBusinessJsonLd } from '@/lib/seo/jsonLd';
import { NimbleBot } from '@/components/widgets/NimbleBot';
import { StickyBar } from '@/components/widgets/StickyBar';
import { CookieBanner, ActivityToast, ExitIntent, LoadingScreen } from '@/components/overlays';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nimblesl.com'),
  title: {
    default: 'Nimble Software Lab — Custom Software Development Company',
    template: '%s | Nimble Software Lab',
  },
  description: 'Nimble Software Lab builds enterprise-grade software for startups and scale-ups worldwide. Custom web apps, mobile, AI & cloud solutions from Dhaka — 40–60% less than US/UK agencies.',
  keywords: [
    'Nimble Software Lab',
    'NimbleSL',
    'custom software development',
    'software development company Bangladesh',
    'offshore software development',
    'hire developers Bangladesh',
    'web application development',
    'mobile app development',
    'AI machine learning development',
    'SaaS development',
    'fintech software development',
    'staff augmentation',
    'remote software team',
    'Dhaka software company',
  ],
  authors: [{ name: 'Nimble Software Lab', url: 'https://nimblesl.com' }],
  creator: 'Nimble Software Lab',
  publisher: 'Nimble Software Lab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nimblesl.com',
    siteName: 'Nimble Software Lab',
    title: 'Nimble Software Lab — Custom Software Development Company',
    description: 'Enterprise-grade software development from Bangladesh. Custom web apps, mobile, AI & cloud. 40–60% less than US/UK agencies.',
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'Nimble Software Lab' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimble Software Lab — Custom Software Development',
    description: 'Enterprise-grade software development from Bangladesh. Custom web, mobile, AI & cloud — 40–60% less than US/UK agencies.',
    images: ['/og/default.png'],
  },
  icons: {
    icon: [
      { url: '/assets/images/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/images/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/logo/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/images/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = getOrganizationJsonLd();
  const websiteLd = getWebSiteJsonLd();
  const localBusinessLd = getLocalBusinessJsonLd();

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      style={{ overflowX: 'hidden' }}
    >
      <body style={{ overflowX: 'hidden' }}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="skip-link"
          >
            Skip to main content
          </a>
          <LoadingScreen />
          <Navbar />
          <div id="main-content" style={{ overflowX: 'hidden', width: '100%' }}>
            {children}
          </div>
          <Footer />
          <NimbleBot />
          <StickyBar />
          <CookieBanner />
          <ActivityToast />
          <ExitIntent />
        </ThemeProvider>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getOrganizationJsonLd, getWebSiteJsonLd, getLocalBusinessJsonLd } from '@/lib/seo/jsonLd';
import { NimbleBot } from '@/components/widgets/NimbleBot';
import { StickyBar } from '@/components/widgets/StickyBar';
import { ExitPopup } from '@/components/widgets/ExitPopup';
import { CookieBanner } from '@/components/widgets/CookieBanner';
import { SocialProof } from '@/components/widgets/SocialProof';

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
    default: 'NimbleSL — Custom Software Development Company',
    template: '%s | NimbleSL — Custom Software Development',
  },
  description: 'Enterprise-grade custom software development from Bangladesh. 50+ projects across 12 countries. Web, Mobile, AI & Cloud — 40-60% less than US/UK agencies. Zero compromise.',
  keywords: [
    'custom software development',
    'software development company bangladesh',
    'offshore software development',
    'hire developers bangladesh',
    'fintech app development',
    'mobile app development',
    'AI machine learning development',
    'staff augmentation',
  ],
  authors: [{ name: 'NimbleSL', url: 'https://nimblesl.com' }],
  creator: 'NimbleSL',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nimblesl.com',
    siteName: 'NimbleSL',
    title: 'NimbleSL — Custom Software Development Company',
    description: 'Enterprise-grade custom software development from Bangladesh. 50+ projects across 12 countries.',
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'NimbleSL' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NimbleSL — Custom Software Development',
    description: 'Enterprise-grade custom software development from Bangladesh.',
    images: ['/og/default.png'],
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
    >
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <NimbleBot />
          <StickyBar />
          <ExitPopup />
          <CookieBanner />
          <SocialProof />
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

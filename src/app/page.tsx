import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { ShowroomTeaser } from '@/components/sections/ShowroomTeaser';
import { EstimatorBanner } from '@/components/sections/EstimatorBanner';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { BlogTeaser } from '@/components/sections/BlogTeaser';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'NimbleSL — Custom Software Development Company | Bangladesh',
  description: 'Enterprise-grade custom software development from Bangladesh. 50+ projects, 12 countries, 40-60% cost savings vs US/UK agencies. Web, Mobile, AI, Cloud — zero compromise.',
  keywords: ['custom software development', 'software development company bangladesh', 'offshore development', 'hire developers'],
  openGraph: {
    title: 'NimbleSL — Silicon Valley Engineering, Bangladesh Pricing',
    description: '50+ enterprise platforms shipped. From $5K MVPs to $120K+ production systems.',
    url: 'https://nimblesl.com',
    images: [{ url: '/og/homepage.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <ShowroomTeaser />
      <EstimatorBanner />
      <ProcessTimeline />
      <IndustriesGrid />
      <TestimonialsCarousel />
      <BlogTeaser />
      <FinalCTA />
    </main>
  );
}

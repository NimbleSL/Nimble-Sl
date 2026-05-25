import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Project Estimator | Get Your Free Software Quote — NimbleSL',
  description: 'Get an instant AI-powered project estimate in 2 minutes. Real costs, real timelines, no sales fluff.',
  openGraph: {
    title: 'AI Project Estimator | Get Your Free Software Quote — NimbleSL',
    description: 'Get an instant AI-powered project estimate in 2 minutes. Real costs, real timelines, no sales fluff.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Project Estimator | Get Your Free Software Quote — NimbleSL',
    description: 'Get an instant AI-powered project estimate in 2 minutes. Real costs, real timelines, no sales fluff.',
  },
};

export default function ProjectEstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { feedConfig } from '@/data/feed'
import { FeedPosts } from './FeedPosts'

export const metadata: Metadata = {
  title: 'LinkedIn Feed',
  description: 'Our top LinkedIn posts on growth mindset, resilience, and personal development — curated from our 204,000+ follower community.',
  openGraph: {
    title: 'Growth Mindset LinkedIn Feed',
    description: 'Daily inspiration and insights from our LinkedIn community of 204,000+ followers.',
  },
}

export default function FeedPage() {
  return (
    <div className="py-12">
      <div className="container-narrow">
        <Breadcrumbs items={[{ name: 'Feed', href: '/feed' }]} />

        <AnimatedSection className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
            {feedConfig.pageName} Feed
          </h1>
          <p className="text-xl text-neutral-600">
            {feedConfig.description} {feedConfig.followers} followers.
          </p>
        </AnimatedSection>

        {/* Posts */}
        <FeedPosts />

        {/* CTA */}
        <AnimatedSection className="mt-12 text-center bg-[#0A66C2]/10 rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold text-neutral-950 mb-4">
            Get Daily Inspiration
          </h2>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Follow us on LinkedIn for daily growth mindset content, tips, and motivation.
          </p>
          <a
            href={feedConfig.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Follow {feedConfig.pageName}
          </a>
        </AnimatedSection>
      </div>
    </div>
  )
}

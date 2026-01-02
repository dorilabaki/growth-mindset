import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { glossaryTerms } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'A comprehensive glossary of growth mindset, personal development, and positive psychology terms and concepts.',
}

export default function GlossaryPage() {
  // Sort terms alphabetically
  const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term))

  return (
    <div className="py-12">
      <div className="container-wide">
        <Breadcrumbs items={[{ name: 'Glossary', href: '/glossary' }]} />

        <AnimatedSection className="max-w-3xl mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
            Growth Mindset Glossary
          </h1>
          <p className="text-xl text-neutral-600">
            Essential terms and concepts to understand on your personal development journey.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          {/* Quick Jump */}
          <div className="flex flex-wrap gap-2 mb-12 p-4 bg-neutral-50 rounded-xl">
            <span className="text-sm font-medium text-neutral-600 mr-2">Jump to:</span>
            {sortedTerms.map((term) => (
              <Link
                key={term.slug}
                href={`/glossary/${term.slug}`}
                className="px-3 py-1 text-sm bg-white border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                {term.term}
              </Link>
            ))}
          </div>

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {sortedTerms.map((term) => (
              <Link
                key={term.slug}
                href={`/glossary/${term.slug}`}
                className="block bg-surface-elevated border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-300 transition-all group"
              >
                <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {term.term}
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                  {term.definition}
                </p>
                <div className="mt-4 flex items-center text-sm text-primary-600 font-medium">
                  Read full definition
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

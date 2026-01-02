import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { glossaryTerms } from '@/lib/content'

interface Props {
  params: Promise<{ term: string }>
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    term: term.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: slug } = await params
  const term = glossaryTerms.find((t) => t.slug === slug)

  if (!term) {
    return { title: 'Term Not Found' }
  }

  return {
    title: `${term.term} - Definition`,
    description: term.definition,
  }
}

export default async function TermPage({ params }: Props) {
  const { term: slug } = await params
  const term = glossaryTerms.find((t) => t.slug === slug)

  if (!term) {
    notFound()
  }

  const definitionSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Growth Mindset Glossary',
      url: 'https://growthmindset.com/glossary',
    },
  }

  const relatedTermData = term.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }}
      />

      <div className="py-12">
        <article className="container-narrow">
          <Breadcrumbs
            items={[
              { name: 'Glossary', href: '/glossary' },
              { name: term.term, href: `/glossary/${term.slug}` },
            ]}
          />

          <AnimatedSection>
            <header className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Definition
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4">
                {term.term}
              </h1>
            </header>

            {/* Quick Definition */}
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <p className="text-lg text-primary-900 leading-relaxed">
                <strong>Definition:</strong> {term.definition}
              </p>
            </div>

            {/* Full Explanation */}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: formatContent(term.fullExplanation) }} />
          </AnimatedSection>

          {/* Related Terms */}
          {relatedTermData.length > 0 && (
            <AnimatedSection className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="font-display text-xl font-semibold text-neutral-900 mb-4">
                Related Terms
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedTermData.map((related) => related && (
                  <Link
                    key={related.slug}
                    href={`/glossary/${related.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-700 rounded-lg transition-colors"
                  >
                    {related.term}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Navigation */}
          <AnimatedSection className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <Link
                href="/glossary"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Glossary
              </Link>
            </div>
          </AnimatedSection>
        </article>
      </div>
    </>
  )
}

function formatContent(content: string): string {
  return content
    .split('\n\n')
    .map((paragraph) => {
      if (paragraph.startsWith('## ')) {
        return `<h2>${paragraph.slice(3)}</h2>`
      }
      if (paragraph.startsWith('### ')) {
        return `<h3>${paragraph.slice(4)}</h3>`
      }
      if (paragraph.includes('\n- ')) {
        const items = paragraph.split('\n- ').filter(Boolean)
        const intro = items[0].includes('- ') ? '' : `<p>${items.shift()}</p>`
        return `${intro}<ul>${items.map((item) => `<li>${item.replace(/^- /, '')}</li>`).join('')}</ul>`
      }
      const formatted = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      if (formatted.trim()) {
        return `<p>${formatted}</p>`
      }
      return ''
    })
    .join('')
}

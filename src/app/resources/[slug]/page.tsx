import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/Button'
import { articles } from '@/lib/content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Growth Mindset',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Growth Mindset',
      logo: {
        '@type': 'ImageObject',
        url: 'https://growthmindset.com/logo.png',
      },
    },
  }

  const faqSchema = article.faqs && article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  // Get related articles (same category, different slug)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="py-12">
        <article className="container-narrow">
          <Breadcrumbs
            items={[
              { name: 'Resources', href: '/resources' },
              { name: article.title, href: `/resources/${article.slug}` },
            ]}
          />

          <AnimatedSection>
            <header className="mb-12">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-neutral-600 mb-6">
                {article.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span>{article.readTime}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </header>

            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />

            {/* FAQ Section */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="mt-16 pt-12 border-t border-neutral-200">
                <h2 className="font-display text-2xl font-bold text-neutral-950 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {article.faqs.map((faq, index) => (
                    <div key={index} className="bg-neutral-50 rounded-xl p-6">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-600">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </AnimatedSection>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <AnimatedSection className="mt-16 pt-12 border-t border-neutral-200">
              <h2 className="font-display text-2xl font-bold text-neutral-950 mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => (
                  <a
                    key={related.slug}
                    href={`/resources/${related.slug}`}
                    className="block bg-surface-elevated border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <span className="inline-block px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-3">
                      {related.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-neutral-900 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      {related.description}
                    </p>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* CTA */}
          <AnimatedSection className="mt-16 text-center bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-2xl font-bold text-neutral-950 mb-4">
              Want to Learn More?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Check out our comprehensive guides for in-depth strategies on developing a growth mindset.
            </p>
            <Button href="/guides">
              Explore Guides
            </Button>
          </AnimatedSection>
        </article>
      </div>
    </>
  )
}

function formatContent(content: string): string {
  // Simple markdown-like formatting for the content
  return content
    .split('\n\n')
    .map((paragraph) => {
      // Handle headings
      if (paragraph.startsWith('## ')) {
        return `<h2>${paragraph.slice(3)}</h2>`
      }
      if (paragraph.startsWith('### ')) {
        return `<h3>${paragraph.slice(4)}</h3>`
      }
      // Handle lists
      if (paragraph.includes('\n- ')) {
        const items = paragraph.split('\n- ').filter(Boolean)
        const intro = items[0].includes('- ') ? '' : `<p>${items.shift()}</p>`
        return `${intro}<ul>${items.map((item) => `<li>${item.replace(/^- /, '')}</li>`).join('')}</ul>`
      }
      // Handle tables (simple)
      if (paragraph.includes('|')) {
        const rows = paragraph.trim().split('\n')
        const headerRow = rows[0].split('|').filter(Boolean).map((cell) => cell.trim())
        const dataRows = rows.slice(2).map((row) => row.split('|').filter(Boolean).map((cell) => cell.trim()))
        return `<table><thead><tr>${headerRow.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${dataRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`
      }
      // Handle bold
      const formatted = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      if (formatted.trim()) {
        return `<p>${formatted}</p>`
      }
      return ''
    })
    .join('')
}

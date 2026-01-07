import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/Button'
import { guides } from '@/lib/content'
import { marked } from 'marked'

// Configure marked for synchronous parsing
marked.use({ async: false })

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    return { title: 'Guide Not Found' }
  }

  return {
    title: guide.title,
    description: guide.description,
  }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="py-12">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: 'Guides', href: '/guides' },
              { name: guide.title, href: `/guides/${guide.slug}` },
            ]}
          />

          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="font-semibold text-neutral-900 mb-4">Table of Contents</p>
                <nav className="space-y-1">
                  {guide.chapters.map((chapter, index) => (
                    <a
                      key={index}
                      href={`#chapter-${index}`}
                      className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                    >
                      {chapter.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="min-w-0">
              <AnimatedSection>
                <header className="mb-12">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                    Comprehensive Guide
                  </span>
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4 leading-tight">
                    {guide.title}
                  </h1>
                  <p className="text-xl text-neutral-600 mb-6">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <span>{guide.readTime}</span>
                    <span>•</span>
                    <span>{guide.chapters.length} chapters</span>
                  </div>
                </header>

                {/* Mobile Table of Contents */}
                <div className="lg:hidden bg-neutral-50 rounded-xl p-6 mb-12">
                  <p className="font-semibold text-neutral-900 mb-4">Table of Contents</p>
                  <nav className="space-y-2">
                    {guide.chapters.map((chapter, index) => (
                      <a
                        key={index}
                        href={`#chapter-${index}`}
                        className="flex items-center gap-3 text-sm text-neutral-600 hover:text-primary-600"
                      >
                        <span className="w-6 h-6 rounded-full bg-neutral-200 text-neutral-600 text-xs flex items-center justify-center">
                          {index + 1}
                        </span>
                        {chapter.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Chapters */}
                <div className="space-y-16">
                  {guide.chapters.map((chapter, index) => (
                    <section key={index} id={`chapter-${index}`} className="scroll-mt-28">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex items-center justify-center">
                          {index + 1}
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950">
                          {chapter.title}
                        </h2>
                      </div>
                      <div
                        className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-neutral-950 prose-h3:text-[1.375rem] prose-h3:mt-10 prose-h3:mb-4 prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3 prose-p:text-neutral-600 prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-primary-600 prose-a:underline prose-a:underline-offset-2 prose-strong:text-neutral-900 prose-strong:font-semibold prose-li:text-neutral-600 prose-li:mb-3 prose-li:leading-[1.75] prose-ul:my-8 prose-ul:pl-6 prose-ul:list-disc prose-ol:my-8 prose-ol:pl-6 prose-ol:list-decimal prose-hr:my-12 prose-table:my-6 prose-th:bg-neutral-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-neutral-200 prose-blockquote:my-8 prose-blockquote:pl-6 prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:italic prose-blockquote:text-neutral-500 prose-code:text-primary-700 prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-neutral-900 prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8"
                        dangerouslySetInnerHTML={{ __html: marked.parse(chapter.content) as string }}
                      />
                    </section>
                  ))}
                </div>
              </AnimatedSection>

              {/* Navigation */}
              <AnimatedSection className="mt-16 pt-12 border-t border-neutral-200">
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <Link
                    href="/guides"
                    className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Guides
                  </Link>
                  <Button href="/resources">
                    Explore Articles
                  </Button>
                </div>
              </AnimatedSection>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}


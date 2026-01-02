import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { faqs } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about growth mindset, personal development, and how to transform your thinking patterns.',
}

export default function FAQPage() {
  // Group FAQs by category
  const categories = [...new Set(faqs.map((faq) => faq.category))]
  const faqsByCategory = categories.reduce((acc, category) => {
    acc[category] = faqs.filter((faq) => faq.category === category)
    return acc
  }, {} as Record<string, typeof faqs>)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="py-12">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />

          <AnimatedSection className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-neutral-600">
              Common questions about growth mindset, personal development, and transforming your thinking.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-12">
              {categories.map((category) => (
                <section key={category}>
                  <h2 className="font-display text-xl font-semibold text-neutral-900 mb-6 pb-2 border-b border-neutral-200">
                    {category}
                  </h2>
                  <div className="space-y-4">
                    {faqsByCategory[category].map((faq, index) => (
                      <details
                        key={index}
                        className="group bg-surface-elevated border border-neutral-200 rounded-xl overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-neutral-50 transition-colors">
                          <h3 className="font-semibold text-neutral-900 pr-4">
                            {faq.question}
                          </h3>
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-open:bg-primary-100 transition-colors">
                            <svg
                              className="w-5 h-5 text-neutral-600 group-open:text-primary-600 group-open:rotate-180 transition-all"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-16 text-center bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-2xl font-bold text-neutral-950 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Get in touch and we&apos;ll help you find the answers.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}

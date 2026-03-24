import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Growth Mindset. We welcome collaboration, speaking inquiries, media requests, and general questions about our content.',
  openGraph: {
    title: 'Contact Growth Mindset',
    description: 'Have questions or want to collaborate? We\'d love to hear from you.',
  },
}

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container-wide">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Have questions about growth mindset or want to collaborate? We&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                  <p className="text-neutral-600">hello@growthmindset.academy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/growth-mindset-big-brain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:underline"
                  >
                    @growth-mindset
                  </a>
                  <p className="text-sm text-neutral-600 mt-1">204,412 followers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Response Time</h3>
                  <p className="text-neutral-600">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-xl">
              <h3 className="font-semibold text-neutral-900 mb-4">What We Can Help With</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Content collaboration and partnerships
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Speaking and workshop inquiries
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Media and press requests
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  General questions about our content
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-surface-elevated border border-neutral-200 rounded-2xl p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

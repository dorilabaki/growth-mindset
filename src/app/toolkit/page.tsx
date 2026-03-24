import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardTitle, CardDescription, CardTag } from '@/components/Card'
import { Button } from '@/components/Button'
import { ToolkitForm } from './ToolkitForm'

export const metadata: Metadata = {
  title: 'Free Growth Mindset Toolkit — Daily Practices to Rewire Your Thinking',
  description:
    'Get our free 30-day toolkit with science-backed exercises, journaling prompts, and habit trackers based on Carol Dweck\'s research. Join 204K+ in our community.',
  openGraph: {
    title: 'Free Growth Mindset Toolkit',
    description:
      'Science-backed daily exercises, journaling prompts, and habit trackers to shift from a fixed to a growth mindset.',
    type: 'website',
  },
}

const toolkitSections = [
  {
    tag: '30 Days',
    title: 'Daily Mindset Exercises',
    description:
      'One focused practice per day drawn from Carol Dweck\'s mindset research and positive psychology. Each exercise takes 5–10 minutes and builds a cumulative shift in how you interpret challenges.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    color: 'primary' as const,
  },
  {
    tag: '45 Prompts',
    title: 'Growth Journaling Prompts',
    description:
      'Structured reflection prompts rooted in self-determination theory and Angela Duckworth\'s grit research. Designed to surface fixed mindset patterns and replace them with growth-oriented narratives.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    color: 'accent' as const,
  },
  {
    tag: 'Weekly',
    title: 'Habit Tracking Sheets',
    description:
      'Weekly trackers based on BJ Fogg\'s Tiny Habits methodology and James Clear\'s habit loop framework. Track effort, learning, and process — not just outcomes.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'primary' as const,
  },
  {
    tag: '10 Reframes',
    title: 'Fixed → Growth Language Shifts',
    description:
      'A pocket guide to recognizing fixed mindset language and instantly reframing it. Includes the research behind each shift and real-world scripts for work, learning, and relationships.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    color: 'accent' as const,
  },
]

const researchBacking = [
  {
    name: 'Carol Dweck',
    role: 'Stanford University',
    quote: 'In a growth mindset, challenges are exciting rather than threatening.',
  },
  {
    name: 'Angela Duckworth',
    role: 'University of Pennsylvania',
    quote: 'Enthusiasm is common. Endurance is rare.',
  },
  {
    name: 'Anders Ericsson',
    role: 'Florida State University',
    quote: 'Deliberate practice is the single most powerful mechanism for improving performance.',
  },
]

export default function ToolkitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-surface pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Free Resource — No credit card required
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 mb-6 leading-tight">
            The{' '}
            <span className="text-gradient">Growth Mindset Toolkit</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-neutral-700 mb-4">
            Daily Practices to Rewire Your Thinking
          </p>

          <p className="text-lg text-neutral-600 mb-10 max-w-lg mx-auto">
            30 days of science-backed exercises, journaling prompts, and habit trackers — built on Carol Dweck&apos;s research and positive psychology. Completely free.
          </p>

          <div className="max-w-md mx-auto mb-6">
            <ToolkitForm />
          </div>

          <p className="text-sm text-neutral-500">
            Trusted by our 204K+ LinkedIn community. No spam, ever.
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              What&apos;s Inside the Toolkit
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto">
              Four evidence-based modules designed to create lasting mindset change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {toolkitSections.map((section) => (
              <Card key={section.title} className="flex gap-5 items-start">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                  section.color === 'primary'
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-accent-100 text-accent-600'
                }`}>
                  {section.icon}
                </div>
                <div>
                  <CardTag variant={section.color}>{section.tag}</CardTag>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research Backing */}
      <AnimatedSection className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Grounded in Peer-Reviewed Research
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto">
              Every exercise in this toolkit is derived from published research by leading psychologists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchBacking.map((researcher) => (
              <Card key={researcher.name}>
                <blockquote className="text-neutral-700 italic mb-4 leading-relaxed">
                  &ldquo;{researcher.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-neutral-100">
                  <p className="font-display font-semibold text-neutral-900">{researcher.name}</p>
                  <p className="text-sm text-neutral-600">{researcher.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Social Proof */}
      <AnimatedSection className="py-14 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-accent-300 mb-2">204K+</p>
              <p className="text-primary-200">LinkedIn community members</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2">30</p>
              <p className="text-primary-200">Daily practices included</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-accent-300 mb-2">100%</p>
              <p className="text-primary-200">Free — always</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Bottom CTA */}
      <AnimatedSection className="py-20 md:py-28 bg-gradient-to-b from-primary-50 to-surface">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
            Ready to start growing?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            Enter your email and get instant access to the full toolkit — no waiting, no purchase required.
          </p>
          <div className="max-w-md mx-auto mb-4">
            <ToolkitForm />
          </div>
          <p className="text-sm text-neutral-500">
            Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}

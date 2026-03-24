import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardTitle, CardDescription, CardTag } from '@/components/Card'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Your Toolkit Is On Its Way — Growth Mindset Hub',
  description: 'Thank you for downloading the Growth Mindset Toolkit. Here are your first exercises to get started today.',
  robots: { index: false },
}

const exercises = [
  {
    tag: 'Carol Dweck · Stanford',
    title: 'The "Not Yet" Reframe',
    description:
      'When you catch yourself saying "I can\'t do this," add two words: "…not yet." This small shift activates a growth-oriented frame. In her research, Dweck found that students who received a grade of "Not Yet" instead of "Failing" showed significantly greater persistence and resilience than those who received a failing grade — because "Not Yet" communicates that learning is still in progress.',
    step: 'Practice: For one full day, whenever you think or say "I can\'t," pause and add "yet." Notice how it changes your internal experience of the challenge.',
    color: 'primary' as const,
  },
  {
    tag: 'Anders Ericsson · Florida State',
    title: 'Deliberate Practice Session Design',
    description:
      'Ericsson\'s decades of research on expert performers showed that what separates experts from novices isn\'t the number of hours practiced — it\'s the quality of practice. Deliberate practice means targeting a specific weakness, operating at the edge of your current ability, and receiving immediate feedback.',
    step: 'Practice: Choose one skill you want to improve. Block 20 focused minutes. Define a specific sub-skill to target (not "get better at writing" but "write stronger opening sentences"). Work just past your comfort zone, then review what worked.',
    color: 'accent' as const,
  },
  {
    tag: 'Angela Duckworth · UPenn',
    title: 'The Grit Journal',
    description:
      'Duckworth\'s research identified two components of grit: passion (sustained interest over time) and perseverance (persistence despite setbacks). Her work with military cadets, spelling bee champions, and teachers showed that grit predicts success over and above talent or IQ in demanding domains.',
    step: 'Practice: At the end of each day, write three sentences — (1) What long-term goal did I take a step toward today? (2) What obstacle did I push through? (3) What does my effort today say about who I\'m becoming?',
    color: 'primary' as const,
  },
  {
    tag: 'Gabriele Oettingen · NYU',
    title: 'WOOP Goal Setting',
    description:
      'Oettingen\'s research on mental contrasting challenges the assumption that positive visualization alone drives success. Her studies found that people who also vividly imagined the obstacles standing between them and their goals were far more likely to take concrete action than those who only visualized the positive outcome.',
    step: 'Practice: For any goal, write: Wish (what you want), Outcome (the best result), Obstacle (the inner barrier most likely to block you), Plan (if [obstacle], then I will [specific action]). This if-then structure converts intention into behavior.',
    color: 'accent' as const,
  },
]

export default function ThankYouPage() {
  return (
    <>
      {/* Confirmation Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-surface pt-12 pb-16 md:pt-20 md:pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow relative text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-950 mb-4">
            Your toolkit is on its way!
          </h1>
          <p className="text-lg text-neutral-600 mb-2 max-w-md mx-auto">
            Check your inbox — the Growth Mindset Toolkit will arrive shortly.
          </p>
          <p className="text-sm text-neutral-500">
            While you wait, start with these four foundational exercises below.
          </p>
        </div>
      </section>

      {/* Exercises */}
      <AnimatedSection className="py-16 md:py-24 bg-surface">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-3">
              Start today with these four exercises
            </h2>
            <p className="text-neutral-600 max-w-lg mx-auto">
              Each is based on peer-reviewed research. You don&apos;t need the full toolkit to begin — pick one and do it now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exercises.map((exercise, i) => (
              <Card key={i}>
                <CardTag variant={exercise.color}>{exercise.tag}</CardTag>
                <CardTitle>{exercise.title}</CardTitle>
                <CardDescription>{exercise.description}</CardDescription>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="text-sm font-medium text-neutral-700 leading-relaxed">
                    {exercise.step}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA to Guides */}
      <AnimatedSection className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-surface">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-4">
            Go deeper with our guides
          </h2>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            Our comprehensive guides expand on these concepts with the full research context, practical case studies, and step-by-step frameworks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/guides" size="lg">
              Explore All Guides
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button href="/resources" variant="outline" size="lg">
              Browse Articles
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* LinkedIn nudge */}
      <AnimatedSection className="py-12 bg-surface border-t border-neutral-200">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
                Join 204K+ on LinkedIn
              </h3>
              <p className="text-primary-200 text-sm">
                Daily mindset content, research insights, and community discussions.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/company/growth-mindset-big-brain/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Growth Mindset on LinkedIn (opens in new tab)"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow Growth Mindset
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/Button'
import { Card, CardTitle, CardDescription, CardTag } from '@/components/Card'
import { NewsletterForm } from '@/components/NewsletterForm'
import { articles, guides } from '@/lib/content'

const pillars = [
  {
    title: 'Mindset Fundamentals',
    description: 'Understand the science behind growth mindset and how your beliefs shape your potential.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/resources',
    color: 'primary',
  },
  {
    title: 'Resilience Building',
    description: 'Develop the mental strength to overcome obstacles and bounce back from setbacks stronger.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    href: '/glossary/resilience',
    color: 'accent',
  },
  {
    title: 'Deliberate Practice',
    description: 'Master the art of focused learning and skill development for continuous improvement.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    href: '/glossary/deliberate-practice',
    color: 'primary',
  },
  {
    title: 'Personal Growth',
    description: 'Transform your habits and mindset with actionable strategies for lasting change.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    href: '/guides',
    color: 'accent',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3)
  const featuredGuide = guides[0]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-surface pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              +200k people developing their mindset
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 mb-6 leading-tight">
              Unlock Your Potential with a{' '}
              <span className="text-gradient">Growth Mindset</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join our community learning to embrace challenges, persist through obstacles,
              and transform limitations into opportunities for growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/guides/complete-guide-growth-mindset" size="lg">
                Start Your Journey
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button href="/resources" variant="outline" size="lg">
                Explore Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Your Path to Growth
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our core pillars designed to help you develop a stronger, more resilient mindset.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar) => (
              <motion.div key={pillar.title} variants={itemVariants}>
                <Card href={pillar.href} className="h-full group">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    pillar.color === 'primary'
                      ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
                      : 'bg-accent-100 text-accent-600 group-hover:bg-accent-200'
                  }`}>
                    {pillar.icon}
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Guide Section */}
      <AnimatedSection className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Featured Guide
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
                {featuredGuide.title}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {featuredGuide.description}
              </p>
              <ul className="space-y-3 mb-8">
                {featuredGuide.chapters.slice(0, 4).map((chapter, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-sm font-medium flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-neutral-700">{chapter.title}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-neutral-500">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 text-neutral-500 text-sm font-medium flex items-center justify-center mt-0.5">
                    +
                  </span>
                  <span>And {featuredGuide.chapters.length - 4} more chapters...</span>
                </li>
              </ul>
              <Button href={`/guides/${featuredGuide.slug}`}>
                Read Full Guide
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl flex items-center justify-center p-8">
                <svg className="w-full h-full text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{featuredGuide.readTime}</p>
                    <p className="text-sm text-neutral-500">Comprehensive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Latest Articles Section */}
      <AnimatedSection className="py-20 md:py-28 bg-surface">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-2">
                Latest Articles
              </h2>
              <p className="text-lg text-neutral-600">
                Fresh insights to fuel your personal growth journey.
              </p>
            </div>
            <Button href="/resources" variant="outline">
              View All Articles
            </Button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredArticles.map((article) => (
              <motion.div key={article.slug} variants={itemVariants}>
                <Card href={`/resources/${article.slug}`} className="h-full">
                  <CardTag variant="primary">{article.category}</CardTag>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-sm text-neutral-500">
                    <span>{article.readTime}</span>
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Social Proof Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-accent-300 mb-2">+200k</p>
              <p className="text-primary-200">people developing their mindset</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2">500K+</p>
              <p className="text-primary-200">Monthly Engagements</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-accent-300 mb-2">50+</p>
              <p className="text-primary-200">Countries Reached</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection className="py-20 md:py-28 bg-gradient-to-b from-primary-50 to-surface">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
            Start Your Growth Journey Today
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
            Get weekly insights, practical tips, and motivation delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Join 50,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </AnimatedSection>

      {/* LinkedIn CTA Section */}
      <AnimatedSection className="py-16 bg-surface border-t border-neutral-200">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8 md:p-12">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Follow Us on LinkedIn
              </h3>
              <p className="text-primary-200">
                Join our community for daily inspiration and growth mindset content.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/company/growth-mindset"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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

import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Growth Mindset, our mission to help 200,000+ people develop a growth mindset and achieve their full potential through personal development.',
}

const values = [
  {
    title: 'Continuous Learning',
    description: 'We believe that the capacity to learn is not fixed. Every day is an opportunity for growth.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Embrace Challenges',
    description: 'Challenges are not obstacles—they are opportunities for growth and transformation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Effort Over Talent',
    description: "Natural ability is just the starting point. It's effort and persistence that lead to mastery.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: 'Learn from Criticism',
    description: 'Feedback is a gift. We use it to improve, not to defend.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Celebrate Others',
    description: "Others' success inspires us. We learn from their journeys.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Persistence Matters',
    description: 'Setbacks are temporary. Giving up is permanent. We choose to persist.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container-wide">
        <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

        {/* Hero */}
        <AnimatedSection className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-6">
            Empowering People to Grow Beyond Limits
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Growth Mindset is a personal development platform helping over 204,000 people
            embrace challenges, persist through obstacles, and unlock their full potential.
          </p>
        </AnimatedSection>

        {/* Mission */}
        <AnimatedSection className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl font-bold text-neutral-950 mb-4">
              Making Growth Mindset Accessible to Everyone
            </h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              We believe that everyone has the potential to grow, learn, and improve—regardless
              of their starting point. Our mission is to make the science of growth mindset
              accessible, practical, and actionable.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Through our content, guides, and community, we help people shift from fixed
              thinking patterns to growth-oriented approaches that transform how they
              tackle challenges, view setbacks, and pursue their goals.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
              <svg className="w-24 h-24 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-neutral-950 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These principles guide everything we create and share with our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface-elevated border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection className="bg-neutral-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl font-bold text-neutral-950 mb-6">
              The Conversation That Started It All
            </h2>
            <div className="prose text-neutral-600 space-y-4">
              <p>
                In 2021, a talented colleague missed out on a promotion she deserved. When asked why she
                didn&apos;t apply, she said: &quot;I&apos;m just not leadership material.&quot; That answer
                stuck with us. Not because it was wrong, but because she genuinely believed it.
              </p>
              <p>
                We had just read Carol Dweck&apos;s research on fixed vs. growth mindsets. The science was
                clear: abilities aren&apos;t fixed. The brain changes. Skills develop. But somewhere between
                academic papers and real life, this message was getting lost.
              </p>
              <p>
                So we started sharing one insight per day on LinkedIn. Simple posts about how beliefs shape
                outcomes. The response caught us off guard. Within months, thousands of people were sharing
                their own stories of breaking through self-imposed limits.
              </p>
              <p>
                That colleague? She applied for the next opening. Got it. Now she manages a team of twelve.
                Her story became the first of many we&apos;ve witnessed in our community of 204,000+ people
                across 50 countries, all proving that potential is not predetermined.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              Community Voices
            </span>
            <h2 className="font-display text-3xl font-bold text-neutral-950 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real insights from our 204,000+ LinkedIn community on growth, learning, and ownership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-600 text-sm mb-4 italic">&quot;The moment we think we &apos;know everything&apos; is the moment we stop growing. True expertise isn&apos;t about having all the answers—it&apos;s about having the curiosity to find better ones.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">AK</div>
                <div>
                  <p className="font-medium text-neutral-900 text-sm">Areeb Khan</p>
                  <p className="text-xs text-neutral-500">Marketing Specialist, MBA</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-600 text-sm mb-4 italic">&quot;What usually shuts learning down is not ego, it is success. Things are working, so nobody wants to slow down and question what got them here.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">PA</div>
                <div>
                  <p className="font-medium text-neutral-900 text-sm">Pat Alacqua</p>
                  <p className="text-xs text-neutral-500">Business Growth Strategist</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-600 text-sm mb-4 italic">&quot;Blame essentially outsources your agency. Ownership, even in situations that aren&apos;t your fault, empowers you to be part of the solution and ultimately, to learn and grow.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">MS</div>
                <div>
                  <p className="font-medium text-neutral-900 text-sm">Maria Sabio, CCHT</p>
                  <p className="text-xs text-neutral-500">Clinical Hypnotherapist & Life Coach</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-600 text-sm mb-4 italic">&quot;The fastest risers I&apos;ve worked with weren&apos;t always the smartest—they were the most teachable. Defending what you &apos;know&apos; is just fear wearing a confident mask.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">AS</div>
                <div>
                  <p className="font-medium text-neutral-900 text-sm">Azimuswan Shipar</p>
                  <p className="text-xs text-neutral-500">Executive Virtual Assistant</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-600 text-sm mb-4 italic">&quot;Blame may protect the ego in the moment, but it quietly gives away the one thing that actually matters: control. Ownership, on the other hand, creates options.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">CC</div>
                <div>
                  <p className="font-medium text-neutral-900 text-sm">Corliss Charles-Sutton, MBA</p>
                  <p className="text-xs text-neutral-500">Executive Leadershift Advisor</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <p className="text-neutral-600 text-sm mb-4 italic">&quot;Blame preserves comfort. Responsibility creates movement. The moment someone shifts from explaining why something failed to owning what comes next, progress resumes.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">NA</div>
                <div>
                  <p className="font-medium text-neutral-900 text-sm">Nicole Arsenault</p>
                  <p className="text-xs text-neutral-500">Marketing Coordinator, MBA Student</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Success Stories */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Real Results
            </span>
            <h2 className="font-display text-3xl font-bold text-neutral-950 mb-4">
              Growth Mindset in Action
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From world-class athletes to everyday professionals, these stories show what happens when you believe abilities can be developed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <div className="text-sm text-primary-600 font-medium mb-2">Sports Psychology</div>
              <h3 className="font-display font-semibold text-lg text-neutral-900 mb-3">Michael Jordan&apos;s 9,000 Missed Shots</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                &quot;I&apos;ve missed more than 9,000 shots in my career. I&apos;ve lost almost 300 games. 26 times, I&apos;ve been trusted to take the game winning shot and missed. I&apos;ve failed over and over and over again in my life. And that is why I succeed.&quot; Jordan was cut from his high school varsity team, then used that rejection to fuel a career of relentless improvement.
              </p>
            </div>
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <div className="text-sm text-primary-600 font-medium mb-2">Business Transformation</div>
              <h3 className="font-display font-semibold text-lg text-neutral-900 mb-3">Satya Nadella&apos;s Microsoft Turnaround</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                When Nadella became CEO in 2014, Microsoft had a &quot;know-it-all&quot; culture. He shifted it to &quot;learn-it-all.&quot; Employees were encouraged to experiment and fail. The result? Microsoft&apos;s market cap grew from $300B to over $3T. Nadella credits growth mindset as the foundation of this transformation.
              </p>
            </div>
            <div className="bg-surface-elevated border border-neutral-200 rounded-xl p-6">
              <div className="text-sm text-primary-600 font-medium mb-2">Research Validation</div>
              <h3 className="font-display font-semibold text-lg text-neutral-900 mb-3">Stanford Study: 47% Trust Increase</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                A Harvard Business Review study found that employees at companies that foster growth mindset are 47% more likely to say their colleagues are trustworthy. They&apos;re also 34% more likely to feel a strong sense of ownership and commitment to the company&apos;s future.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-950 mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
            Ready to start your growth journey? Explore our resources or follow us on LinkedIn for daily inspiration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/resources" size="lg">
              Explore Resources
            </Button>
            <a
              href="https://www.linkedin.com/company/growth-mindset"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

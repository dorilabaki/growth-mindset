import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardTitle, CardDescription } from '@/components/Card'
import { guides } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Comprehensive guides on developing a growth mindset, building resilience, and achieving personal transformation.',
}

export default function GuidesPage() {
  return (
    <div className="py-12">
      <div className="container-wide">
        <Breadcrumbs items={[{ name: 'Guides', href: '/guides' }]} />

        <AnimatedSection className="max-w-3xl mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
            Comprehensive Guides
          </h1>
          <p className="text-xl text-neutral-600">
            In-depth resources to help you understand and apply growth mindset principles
            for lasting transformation.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Card key={guide.slug} href={`/guides/${guide.slug}`} className="group">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    Comprehensive Guide
                  </span>
                  <span className="text-sm text-neutral-500">{guide.readTime}</span>
                </div>
                <CardTitle as="h2">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="text-sm text-neutral-500 mb-2">Chapters included:</p>
                  <ul className="space-y-1">
                    {guide.chapters.slice(0, 3).map((chapter, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                        <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-500 text-xs flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="line-clamp-1">{chapter.title}</span>
                      </li>
                    ))}
                    {guide.chapters.length > 3 && (
                      <li className="text-sm text-neutral-500 ml-7">
                        +{guide.chapters.length - 3} more chapters
                      </li>
                    )}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardTitle, CardDescription, CardTag } from '@/components/Card'
import { articles } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore our collection of articles on growth mindset, personal development, resilience, and achieving your full potential.',
}

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <div className="container-wide">
        <Breadcrumbs items={[{ name: 'Resources', href: '/resources' }]} />

        <AnimatedSection className="max-w-3xl mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
            Resources
          </h1>
          <p className="text-xl text-neutral-600">
            Practical insights and strategies to help you develop a growth mindset
            and unlock your potential.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.slug} href={`/resources/${article.slug}`} className="h-full">
                <CardTag variant="primary">{article.category}</CardTag>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-sm text-neutral-500">
                  <span>{article.readTime}</span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AnimatedSection } from '@/components/AnimatedSection'
import { feedPosts } from '@/lib/content'

const categories = ['All', ...new Set(feedPosts.map((post) => post.category))]

export default function FeedPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? feedPosts
    : feedPosts.filter((post) => post.category === activeCategory)

  return (
    <div className="py-12">
      <div className="container-narrow">
        <Breadcrumbs items={[{ name: 'Feed', href: '/feed' }]} />

        <AnimatedSection className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
            Growth Mindset Feed
          </h1>
          <p className="text-xl text-neutral-600">
            Daily inspiration and insights from our LinkedIn community of 204,000+ followers.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-elevated border border-neutral-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Growth Mindset</p>
                  <p className="text-sm text-neutral-500">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
                <span className="ml-auto px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="whitespace-pre-line text-neutral-700 leading-relaxed mb-6">
                {post.content}
              </div>

              {/* Engagement */}
              <div className="flex items-center gap-6 pt-4 border-t border-neutral-100">
                <button className="flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors group">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                  <span className="font-medium">{post.likes.toLocaleString()}</span>
                </button>
                <button className="flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors group">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg>
                  <span className="font-medium">{post.comments.toLocaleString()}</span>
                </button>
                <a
                  href="https://www.linkedin.com/company/growth-mindset-big-brain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-2 text-[#0A66C2] hover:text-[#004182] transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  View on LinkedIn
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-12 text-center bg-[#0A66C2]/10 rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold text-neutral-950 mb-4">
            Get Daily Inspiration
          </h2>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Follow us on LinkedIn for daily growth mindset content, tips, and motivation.
          </p>
          <a
            href="https://www.linkedin.com/company/growth-mindset-big-brain/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Follow Growth Mindset
          </a>
        </AnimatedSection>
      </div>
    </div>
  )
}

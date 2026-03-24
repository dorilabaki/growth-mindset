'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'

export function LeadMagnetBanner() {
  const [dismissed, setDismissed] = useState(false)

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 rounded-2xl p-8 md:p-10"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl" />
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-4 right-4 text-primary-300 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-14 h-14 bg-accent-400/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-400/20 text-accent-300 rounded-full text-xs font-medium mb-2">
                Free Resource
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
                Get the Growth Mindset Toolkit
              </h3>
              <p className="text-primary-200 text-sm leading-relaxed max-w-lg">
                30 science-backed daily exercises, 45 journaling prompts, and habit trackers — based on Carol Dweck&apos;s research. Free for our 204K+ community.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Button href="/toolkit" variant="primary" size="md" className="bg-accent-500 hover:bg-accent-600 whitespace-nowrap">
                Get Free Toolkit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useState } from 'react'
import { Button } from './Button'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate submission - replace with actual newsletter integration
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 text-center">
        <svg className="w-12 h-12 text-primary-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-display font-semibold text-lg text-primary-900 mb-1">You&apos;re in!</h3>
        <p className="text-primary-700">Check your inbox to confirm your subscription.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

export function ToolkitForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'duplicate'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.status === 409) {
        setStatus('duplicate')
        return
      }

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      router.push(`/toolkit/thank-you?email=${encodeURIComponent(email)}`)
    } catch {
      setErrorMsg('Connection error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'duplicate') {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 text-center">
        <p className="font-semibold text-primary-900 mb-1">Already registered!</p>
        <p className="text-primary-700 text-sm">
          You&apos;re already on the list.{' '}
          <button
            onClick={() => router.push('/toolkit/thank-you')}
            className="underline underline-offset-2 hover:text-primary-900 transition-colors"
          >
            Access your toolkit →
          </button>
        </p>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="toolkit-email" className="sr-only">
          Email address
        </label>
        <input
          id="toolkit-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <Button type="submit" disabled={status === 'loading'} size="md">
          {status === 'loading' ? 'Sending…' : 'Get Free Toolkit'}
        </Button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">{errorMsg}</p>
      )}
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="text-center">
        <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          Looks like you&apos;ve wandered off the growth path. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">
            Go Home
          </Button>
          <Button href="/resources" variant="outline">
            Explore Resources
          </Button>
        </div>
      </div>
    </div>
  )
}

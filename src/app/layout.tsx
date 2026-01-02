import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://growthmindset.com'),
  title: {
    default: 'Growth Mindset | Transform Your Potential Through Personal Development',
    template: '%s | Growth Mindset',
  },
  description: 'Join 204,000+ followers learning to develop a growth mindset. Discover strategies for personal development, resilience, and achieving your full potential.',
  keywords: ['growth mindset', 'personal development', 'self improvement', 'motivation', 'success habits', 'positive psychology', 'goal setting', 'mindset coaching', 'resilience', 'life coaching'],
  authors: [{ name: 'Growth Mindset' }],
  creator: 'Growth Mindset',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growthmindset.com',
    siteName: 'Growth Mindset',
    title: 'Growth Mindset | Transform Your Potential',
    description: 'Join 204,000+ followers learning to develop a growth mindset.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Growth Mindset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Mindset | Transform Your Potential',
    description: 'Join 204,000+ followers learning to develop a growth mindset.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Growth Mindset',
    url: 'https://growthmindset.com',
    logo: 'https://growthmindset.com/logo.png',
    description: 'A leading personal development platform helping people develop a growth mindset and achieve their full potential.',
    foundingDate: '2020',
    sameAs: [
      'https://www.linkedin.com/company/growth-mindset',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://growthmindset.com/contact',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '5-10',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Growth Mindset',
      'Personal Development',
      'Self Improvement',
      'Positive Psychology',
      'Goal Setting',
      'Resilience',
      'Mindset Coaching',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

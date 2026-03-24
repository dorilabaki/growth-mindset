import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Growth Mindset privacy policy — how we collect, use, and protect your information.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <div className="py-12">
      <div className="container-narrow">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy' }]} />

        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-neutral-950 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-600 mb-10">Last updated: {lastUpdated}</p>

          <div className="prose">
            <p>
              Growth Mindset (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates
              growthmindset.academy. This Privacy Policy explains how we collect, use, and
              protect information when you visit our website or sign up for our resources.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>
                <strong>Email address</strong> — when you sign up for our free toolkit or
                newsletter. We use this to deliver the resource you requested and send
                occasional growth mindset content.
              </li>
              <li>
                <strong>Contact form data</strong> — name, email, and message when you contact
                us. We use this solely to respond to your inquiry.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Deliver the free resources and content you requested</li>
              <li>Send periodic emails with growth mindset insights (you can unsubscribe at any time)</li>
              <li>Respond to your messages and inquiries</li>
              <li>Analyze website traffic to improve our content (via Google Analytics, using anonymized data)</li>
            </ul>

            <h2>Cookies and Analytics</h2>
            <p>
              We use Google Analytics to understand how visitors interact with our site. Google
              Analytics collects anonymized data such as pages visited and time spent on the site.
              No personally identifiable information is shared with Google Analytics.
            </p>
            <p>
              You can opt out of Google Analytics tracking by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics opt-out browser add-on
              </a>
              .
            </p>

            <h2>Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third
              parties. We may share data with trusted service providers who assist us in operating
              our website, subject to confidentiality agreements.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your email address as long as you remain subscribed to our content. You
              may unsubscribe at any time by clicking the unsubscribe link in any email we send,
              or by contacting us at{' '}
              <a href="mailto:hello@growthmindset.academy">hello@growthmindset.academy</a>.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent and unsubscribe at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@growthmindset.academy">hello@growthmindset.academy</a>.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children under 13. We do not knowingly collect
              personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy
              on this page with a revised &quot;last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@growthmindset.academy">hello@growthmindset.academy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Growth Mindset terms of service — the rules and guidelines for using our website and resources.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <div className="py-12">
      <div className="container-narrow">
        <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms' }]} />

        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-neutral-950 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-neutral-600 mb-10">Last updated: {lastUpdated}</p>

          <div className="prose">
            <p>
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using
              growthmindset.academy (the &quot;Site&quot;) operated by Growth Mindset
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using the
              Site, you agree to be bound by these Terms.
            </p>

            <h2>Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use. Prohibited uses include:</p>
            <ul>
              <li>Distributing unsolicited commercial communications (spam)</li>
              <li>Attempting to gain unauthorized access to any part of the Site</li>
              <li>Using the Site to distribute malware or harmful content</li>
              <li>Scraping or harvesting data from the Site without our written permission</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this Site — including articles, guides, graphics, logos, and
              design — is the property of Growth Mindset or its content suppliers and is
              protected by applicable intellectual property laws.
            </p>
            <p>
              You may share our content with proper attribution (a link to the original page).
              You may not reproduce, distribute, or create derivative works without our express
              written permission.
            </p>

            <h2>Free Resources</h2>
            <p>
              Our free toolkit and other downloadable resources are provided for personal,
              non-commercial use only. You may not sell, resell, or distribute these resources
              without written permission.
            </p>

            <h2>Disclaimers</h2>
            <p>
              The content on this Site is provided for educational and informational purposes
              only. It does not constitute professional psychological, medical, or coaching
              advice. Always seek the advice of a qualified professional with any questions you
              may have.
            </p>
            <p>
              We make no representations or warranties of any kind, express or implied, about
              the completeness, accuracy, or reliability of the information on the Site.
            </p>

            <h2>External Links</h2>
            <p>
              Our Site may contain links to third-party websites. These links are provided for
              your convenience only. We have no control over the content of those sites and
              accept no responsibility for them or for any loss or damage that may arise from
              your use of them.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Growth Mindset shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising
              from your use of, or inability to use, the Site or its content.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will post the updated
              Terms on this page with a revised &quot;last updated&quot; date. Your continued
              use of the Site after any changes constitutes your acceptance of the new Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with applicable law,
              without regard to its conflict of law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:hello@growthmindset.academy">hello@growthmindset.academy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

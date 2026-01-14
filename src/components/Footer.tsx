import Link from 'next/link'

const footerLinks = {
  learn: [
    { name: 'Resources', href: '/resources' },
    { name: 'Guides', href: '/guides' },
    { name: 'Glossary', href: '/glossary' },
    { name: 'FAQ', href: '/faq' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Feed', href: '/feed' },
    { name: 'Contact', href: '/contact' },
  ],
  topics: [
    { name: 'Growth Mindset', href: '/glossary/growth-mindset' },
    { name: 'Resilience', href: '/glossary/resilience' },
    { name: 'Deliberate Practice', href: '/glossary/deliberate-practice' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-primary-200">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Growth Mindset
              </span>
            </Link>
            <p className="text-primary-300 mb-6 max-w-sm">
              Helping over 204,000 people develop a growth mindset and unlock their full potential through personal development.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/growth-mindset-big-brain/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-800 hover:bg-accent-500 text-primary-300 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Topics</h3>
            <ul className="space-y-3">
              {footerLinks.topics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-400">
            &copy; {new Date().getFullYear()} Growth Mindset. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

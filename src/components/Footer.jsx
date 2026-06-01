import { Link } from 'react-router-dom'
import siteConfig from '../data/site-config.json'

const PAGE_LINKS = [
  ['Collections', '/collections'],
  ['How It Works', '/how-it-works'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

const LEGAL_LINKS = [
  ['Privacy Policy', '/privacy-policy'],
  ['Terms & Conditions', '/terms'],
  ['Refunds & Returns', '/refunds'],
  ['Copyright', '/copyright'],
  ['Disclaimer', '/disclaimer'],
]

export default function Footer() {
  const { business } = siteConfig
  const hasEmail = business.email && !business.email.includes('[TO BE ADDED')
  const hasInstagram = business.instagram && !business.instagram.includes('[TO BE ADDED')

  return (
    <footer className="bg-[#111111] border-t border-[#cc0000]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="font-playfair text-xl text-[#f5f0e8] mb-2">{business.name}</p>
            <p className="text-[#555] text-sm leading-relaxed">{business.tagline}</p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-5">Pages</p>
            <nav className="flex flex-col gap-2.5">
              {PAGE_LINKS.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-[#888888] text-sm hover:text-[#f5f0e8] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-5">Legal</p>
            <nav className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-[#888888] text-sm hover:text-[#f5f0e8] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-5">Contact</p>
            <div className="flex flex-col gap-2.5">
              {hasEmail && (
                <a
                  href={`mailto:${business.email}`}
                  className="text-[#888888] text-sm hover:text-[#f5f0e8] transition-colors break-all"
                >
                  {business.email}
                </a>
              )}
              {hasInstagram && (
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] text-sm hover:text-[#f5f0e8] transition-colors"
                >
                  Instagram
                </a>
              )}
              <p className="text-[#555] text-sm">{business.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a]">
        <p className="text-center text-[#444] text-xs py-5">
          © 2025 The Full Picture. All rights reserved. Melbourne, Australia.
        </p>
      </div>
    </footer>
  )
}

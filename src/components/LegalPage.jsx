import { Link } from 'react-router-dom'
import PageHero from './PageHero'
import SEOHead from './SEOHead'

const LEGAL_LINKS = [
  ['Privacy Policy', '/privacy-policy'],
  ['Terms & Conditions', '/terms'],
  ['Refunds & Returns', '/refunds'],
  ['Copyright', '/copyright'],
  ['Disclaimer', '/disclaimer'],
]

export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <>
      <SEOHead title={title} />
      <PageHero title={title} />

      <div className="bg-[#0a0a0a] py-14 px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#555] text-xs uppercase tracking-widest mb-10">
            Last updated: {lastUpdated}
          </p>

          <div className="legal-content">{children}</div>

          <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
            <p className="text-[10px] uppercase tracking-widest text-[#555] mb-4">Legal</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_LINKS.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-[#666] text-sm hover:text-[#f5f0e8] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

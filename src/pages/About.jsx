import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import ScrollFadeIn from '../components/ScrollFadeIn'
import Button from '../components/Button'
import CollectionCard from '../components/CollectionCard'
import { Link } from 'react-router-dom'
import siteConfig from '../data/site-config.json'
import collections from '../data/collections.json'

export default function About() {
  const { about, inkOriginals, process: proc } = siteConfig
  const sorted = [...collections].sort((a, b) => a.sortOrder - b.sortOrder)

  const hasAboutBody = about.body && !about.body.includes('[TO BE ADDED')
  const hasAboutImage = about.image && !about.image.includes('[TO BE ADDED')

  return (
    <>
      <SEOHead title={about.heading} description={about.subheading} />
      <PageHero title={about.heading} subtitle={about.subheading} />

      {/* ── Section A: The Business ───────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                {hasAboutBody ? (
                  <p className="text-[#888888] text-sm leading-relaxed">{about.body}</p>
                ) : (
                  <p className="text-[#555] text-sm italic">
                    About copy coming soon.
                  </p>
                )}
              </div>
              {hasAboutImage && (
                <div className="bg-[#1a1a1a] aspect-[4/3] overflow-hidden">
                  <img
                    src={about.image}
                    alt="The Full Picture"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.parentElement.style.display = 'none' }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section B: How The Work Is Made ──────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-8">
              {proc.heading}
            </h2>
            <p className="font-playfair italic text-[#888888] leading-relaxed text-lg">
              {proc.body}
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section C: Ink Originals ──────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#1a1a1a] py-20 px-6">
          <div className="max-w-4xl mx-auto border border-[#c9a84c] p-10 md:p-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-5">Ink Originals</p>
            <h2 className="font-playfair text-3xl text-[#f5f0e8] mb-2">{inkOriginals.heading}</h2>
            <p className="text-[#888888] text-sm mb-8">{inkOriginals.subheading}</p>
            <p className="text-[#888888] text-sm leading-relaxed mb-7 max-w-lg">{inkOriginals.body}</p>
            <ul className="space-y-2 mb-8">
              {inkOriginals.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-[#888888] text-sm">
                  <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">—</span>
                  {d}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="text-[#f5f0e8] text-sm hover:text-[#cc0000] transition-colors underline underline-offset-4"
            >
              Enquire →
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section D: Custom Work ────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-2xl mx-auto border-l-2 border-[#cc0000] pl-8">
            <p className="font-playfair text-xl text-[#f5f0e8] mb-4">
              Every suburb has its own character. If yours does not have a collection yet, it can.
            </p>
            <Button to="/contact" variant="outline">Get In Touch</Button>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section E: Collections Preview ───────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-playfair text-3xl text-[#f5f0e8]">The Collections</h2>
              <Link
                to="/collections"
                className="text-sm text-[#cc0000] hover:text-[#ff1a1a] transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sorted.map((c) => (
                <CollectionCard key={c.slug} collection={c} />
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}

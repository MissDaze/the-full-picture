import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import ScrollFadeIn from '../components/ScrollFadeIn'
import Button from '../components/Button'
import CollectionCard from '../components/CollectionCard'
import siteConfig from '../data/site-config.json'
import collections from '../data/collections.json'
import testimonials from '../data/testimonials.json'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { business, hero, inkOriginals, process: proc } = siteConfig

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const txt = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  const heroCards = Object.values(hero.images || {}).filter(Boolean)

  const cardStyle = (i) => {
    const rotations = [-2, 0, 2]
    const offsets = [-80, 0, 80]
    const rot = rotations[i] ?? (i % 2 === 0 ? -2 : 2)
    const offset = offsets[i] ?? (i % 2 === 0 ? -80 : 80)
    return {
      opacity: mounted ? 1 : 0,
      transform: mounted
        ? `rotate(${rot}deg) translateX(0)`
        : `rotate(${rot}deg) translateX(${offset}px)`,
      transition: `opacity 0.5s ease ${200 + i * 150}ms, transform 0.5s ease ${200 + i * 150}ms`,
    }
  }

  const sorted = [...collections].sort((a, b) => a.sortOrder - b.sortOrder)
  const featured = sorted.find((c) => c.isFeatured)
  const rest = sorted.filter((c) => !c.isFeatured)

  const activeTestimonials = testimonials
    .filter((t) => t.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <>
      <SEOHead
        title={null}
        description="Original hyper-local art staged on your walls, printed for your listing, gifted to your buyer. Starting from $295 AUD."
      />

      {/* ── SECTION A: HERO ─────────────────────────────────── */}
      <section className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-24 pt-28">
        <div className="max-w-4xl mx-auto text-center mb-16 w-full">
          <p style={txt(0)} className="text-[10px] uppercase tracking-[0.25em] text-[#cc0000] mb-5">
            {hero.label}
          </p>
          <h1 style={txt(200)} className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] mb-5 leading-tight">
            {business.name}
          </h1>
          <p style={txt(400)} className="font-playfair italic text-xl md:text-2xl text-[#f5f0e8]/80 mb-5">
            {hero.headline}
          </p>
          <p style={txt(600)} className="text-[#888888] text-base leading-relaxed max-w-[520px] mx-auto mb-10">
            {hero.subtext}
          </p>
          <div style={txt(800)}>
            <Button to="/collections" variant="primary">
              {hero.cta}
            </Button>
          </div>
        </div>

        {/* Before/After cards — renders however many images are in site-config hero.images */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center w-full max-w-5xl">
          {heroCards.map((src, i) => (
            <div
              key={i}
              style={cardStyle(i)}
              className="w-full md:w-[300px] lg:w-[340px] flex-shrink-0 shadow-2xl"
            >
              <div className="relative border-2 border-[#c9a84c] aspect-[4/3] bg-[#1a1a1a] overflow-hidden">
                <img
                  src={src}
                  alt="Before and after"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="absolute inset-y-0 left-1/2 w-px bg-[#c9a84c]/40 -translate-x-px" />
                <span className="absolute top-2.5 left-3 text-[9px] uppercase tracking-[0.2em] text-[#c9a84c] font-semibold">Before</span>
                <span className="absolute top-2.5 right-3 text-[9px] uppercase tracking-[0.2em] text-[#c9a84c] font-semibold">After</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION B: WHAT I DO ───────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-12">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#cc0000] mb-4">Digital Staging</p>
                <p className="text-[#888888] text-sm leading-relaxed">
                  I take your listing and place original, hyper-local artwork directly onto your walls — digitally, before a single print is ordered. You receive fully staged images of your actual property to use in your marketing and listing photos. The art is selected specifically for the property. Nothing is pulled from a generic catalogue.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#cc0000] mb-4">Prints &amp; Settlement Gifts</p>
                <p className="text-[#888888] text-sm leading-relaxed">
                  Once you have approved the staged set, you choose which pieces go to print. Physical prints are dispatched to you — ready to gift to the buyer at settlement. That moment is yours. A piece of original art, handed over by you. Something that goes on a wall, stays in the home, and keeps your name in the room long after the commission is banked.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#cc0000] mb-4">Virtual Tours</p>
                <p className="text-[#888888] text-sm leading-relaxed">
                  Every package includes a professional virtual tour of the property, built from your room photos and property description. One brief covers the staging, the tour, and the prints. Nothing for you to coordinate separately.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── SECTION C: ART STAYS ──────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-[680px] mx-auto pl-8 border-l-4 border-[#cc0000]">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-8">
              Art Stays. Everything Else Doesn&apos;t.
            </h2>
            <div className="space-y-5 text-[#888888] text-sm leading-relaxed">
              <p>Most settlement gifts are gone within the week. A bottle of wine. A hamper. Something opened, enjoyed, and forgotten before the keys are cold.</p>
              <p>A print on a wall is different. It gets framed. It gets placed. It becomes part of the home.</p>
              <p>Every dinner guest who pauses and asks where it came from — the buyer tells them your name. That conversation happens once a month. For years.</p>
              <p>That is not a gift. That is a referral strategy built into the settlement itself.</p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── SECTION D: WHAT MAKES THIS DIFFERENT ──────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-12">
              What Makes This Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#cc0000] mb-4">Art Built For The Suburb</p>
                <p className="text-[#888888] text-sm leading-relaxed">
                  The artwork placed on your listing walls is not generic furniture from a catalogue. It is original art built around a specific place — the streets, the landmarks, the character of the area. A buyer purchasing in a suburb recognises something of it in the work. That connection is what makes it worth keeping.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#cc0000] mb-4">The Staging And The Gift Are The Same Thing</p>
                <p className="text-[#888888] text-sm leading-relaxed">
                  The artwork placed on the walls during digital staging is the same artwork the buyer takes home at settlement. By the time the sale is complete the buyer has already spent weeks looking at their print on the walls of their new home. They already know where it is going.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#cc0000] mb-4">One Brief. Everything Handled.</p>
                <p className="text-[#888888] text-sm leading-relaxed">
                  Digital staging, virtual tour, and settlement gift sourced separately means three vendors, three rounds of back-and-forth, three invoices. Send room photos and a property description. Everything else is handled. One invoice. 30-day terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── SECTION E: INK ORIGINALS ──────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#1a1a1a] py-20 px-6">
          <div className="max-w-4xl mx-auto border border-[#c9a84c] p-10 md:p-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-5">Ink Originals</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-5">
              {inkOriginals.heading}
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-7 max-w-lg">
              {inkOriginals.body}
            </p>
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
              To enquire, get in touch.
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── SECTION F: COLLECTIONS PREVIEW ────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-10">
              Current Collections
            </h2>

            {featured && (
              <div className="mb-8">
                <CollectionCard collection={featured} featured />
              </div>
            )}

            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                {rest.map((c) => (
                  <CollectionCard key={c.slug} collection={c} />
                ))}
              </div>
            )}

            <Link
              to="/collections"
              className="text-sm text-[#cc0000] hover:text-[#ff1a1a] transition-colors tracking-wide underline underline-offset-4"
            >
              All Collections →
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── SECTION G: HOW THE WORK IS MADE ──────────────── */}
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

      {/* ── SECTION H: HOW IT WORKS ───────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-14">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {[
                { n: '1', title: 'Send Me The Listing', body: 'Room photos and a property description. That is the brief.' },
                { n: '2', title: 'I Stage It', body: 'Original artwork placed on your walls — digitally. Staged images back to you to approve and use in your marketing.' },
                { n: '3', title: 'Prints Are Dispatched To You', body: 'You nominate which pieces go to print and what sizes you need. Prints are produced and dispatched to you — ready to gift to your buyer at settlement.' },
                { n: '4', title: 'Invoiced On 30 Days', body: 'One invoice. 30-day terms. No upfront payment.' },
              ].map((step) => (
                <div key={step.n} className="relative">
                  <div
                    className="absolute -top-4 -left-2 font-playfair font-bold text-[#cc0000]/10 select-none leading-none"
                    style={{ fontSize: '7rem' }}
                  >
                    {step.n}
                  </div>
                  <div className="relative pt-10">
                    <h3 className="font-playfair text-lg text-[#f5f0e8] mb-3">{step.title}</h3>
                    <p className="text-[#888888] text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── SECTION I: CUSTOM WORK ────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#1a1a1a] py-20 px-6">
          <div className="max-w-2xl mx-auto border-l-2 border-[#cc0000] pl-8">
            <p className="font-playfair text-2xl text-[#f5f0e8] mb-4">
              Don&apos;t see your suburb?
            </p>
            <p className="text-[#888888] text-sm leading-relaxed mb-8">
              If a collection doesn&apos;t exist for your area yet, I&apos;ll build one. Brief me on the suburb — the streets, the landmarks, the feeling of the neighbourhood.
            </p>
            <Button to="/contact" variant="outline">Get In Touch</Button>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── TESTIMONIALS (only if active entries exist) ───── */}
      {activeTestimonials.length > 0 && (
        <ScrollFadeIn>
          <section className="bg-[#0a0a0a] py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-3xl text-[#f5f0e8] mb-10">What Agents Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeTestimonials.map((t, i) => (
                  <div key={i} className="bg-[#111111] p-8 border-l-2 border-[#cc0000]">
                    <p className="font-playfair italic text-[#f5f0e8] text-lg mb-6 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-[#f5f0e8] text-sm font-medium">{t.agentName}</p>
                    <p className="text-[#888888] text-xs">{t.agency}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>
      )}
    </>
  )
}

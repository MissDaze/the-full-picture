import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import ScrollFadeIn from '../components/ScrollFadeIn'
import Button from '../components/Button'
import InquiryModal from '../components/InquiryModal'
import { Link } from 'react-router-dom'
import siteConfig from '../data/site-config.json'

const STEPS = [
  {
    n: '1',
    title: 'Send Me The Listing',
    body: 'All I need to get started is a set of room photos — one per room — and a short description of the property. Style, suburb, the kind of buyer you are expecting. That is the brief. Nothing else required from you at this stage.',
  },
  {
    n: '2',
    title: 'I Stage It Digitally',
    body: 'I select artwork from the collection that suits the property and place it onto the walls of your listing digitally. You receive fully staged images of your actual rooms — not a generic showroom — to use in your listing photos and marketing. If the existing collections suit the property I will work from those. If the suburb needs its own work I will build it.',
  },
  {
    n: '3',
    title: 'You Approve. Prints Are Dispatched To You.',
    body: 'Once you have approved the staged set you nominate which pieces go to print and in what sizes. Physical prints are produced and dispatched to you. The virtual tour is built from your photos and description and delivered in the same round. You gift the print to your buyer at settlement — that moment is yours to own.',
  },
  {
    n: '4',
    title: 'One Invoice. 30 Days.',
    body: 'Everything in a single invoice on 30-day terms. Digital staging. Virtual tour. Physical prints. No upfront payment. No multiple vendors. No chasing.',
  },
]

export default function HowItWorks() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)
  const { pricing, inkOriginals, process: proc } = siteConfig

  return (
    <>
      <SEOHead title="How It Works" description="One brief. Everything handled." />
      <PageHero title="How It Works" subtitle="One brief. Everything handled." />

      {/* ── Steps ─────────────────────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 md:gap-8">
              {STEPS.map((step) => (
                <div key={step.n} className="relative">
                  <div
                    className="absolute -top-4 -left-2 font-playfair font-bold text-[#cc0000]/10 select-none leading-none"
                    style={{ fontSize: '7rem' }}
                  >
                    {step.n}
                  </div>
                  <div className="relative pt-12">
                    <h3 className="font-playfair text-lg text-[#f5f0e8] mb-3">{step.title}</h3>
                    <p className="text-[#888888] text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Pricing ───────────────────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-10">Pricing</h2>

            <div className="border border-[#cc0000] p-10 md:p-14 mb-6">
              <p className="font-playfair text-2xl text-[#f5f0e8] mb-2">The Full Picture</p>
              <p className="text-[#888888] text-sm mb-8">Everything handled. One brief.</p>

              <p className="font-playfair text-4xl text-[#cc0000] mb-8">
                From {pricing.startingFrom}
              </p>

              <ul className="space-y-3 mb-8">
                {pricing.baseIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#f5f0e8]">
                    <span className="text-[#cc0000] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#888888] text-sm leading-relaxed border-t border-[#1a1a1a] pt-6">
                {pricing.scalesNote}
              </p>
            </div>

            <p className="text-[#555] text-xs leading-relaxed mb-10">{pricing.paymentNote}</p>

            <Button
              variant="primary"
              onClick={() => {
                setModalSuccess(false)
                setModalOpen(true)
              }}
            >
              Get A Quote
            </Button>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Art Stays ─────────────────────────────────────── */}
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

      {/* ── Ink Originals ─────────────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#1a1a1a] py-20 px-6">
          <div className="max-w-4xl mx-auto border border-[#c9a84c] p-10 md:p-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-5">Ink Originals</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-2">
              {inkOriginals.heading}
            </h2>
            <p className="text-[#888888] text-sm mb-8">{inkOriginals.subheading}</p>
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
            <p className="text-[#888888] text-sm leading-relaxed mb-6 border-t border-[#333] pt-6">
              {proc.body}
            </p>
            <p className="text-[#888888] text-sm leading-relaxed mb-8">
              For Ink Originals, the finished composition is then rendered entirely by hand using fineliners and gel pens. This is a process that takes a minimum of one week per piece. No two Ink Originals are identical.
            </p>
            <Link
              to="/contact"
              className="text-[#f5f0e8] text-sm hover:text-[#cc0000] transition-colors underline underline-offset-4"
            >
              Enquire
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Custom Commissions ────────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] mb-5">
              Need A Collection Built For Your Suburb?
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-8">
              If your market does not have a collection yet it can. Brief me on the suburb — the streets, the landmarks, the feeling of the place — and I will develop something specific to your market. Custom commission inquiries welcome.
            </p>
            <Button to="/contact" variant="outline">Get In Touch</Button>
          </div>
        </section>
      </ScrollFadeIn>

      {modalOpen && (
        <InquiryModal
          onClose={() => setModalOpen(false)}
          onSuccess={() => setModalSuccess(true)}
          isSuccess={modalSuccess}
        />
      )}
    </>
  )
}

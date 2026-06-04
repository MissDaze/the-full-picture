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
    title: 'Send the listing brief',
    body: 'Room photos, property description, suburb, buyer profile and campaign timing. No separate staging brief, video-tour brief and gifting brief required.',
  },
  {
    n: '2',
    title: 'The campaign assets are built',
    body: 'Collection artwork is selected to suit the property and integrated into the listing imagery. The same direction informs the digital video tour.',
  },
  {
    n: '3',
    title: 'Approve the direction',
    body: 'You approve the staged visuals, select print options, and decide whether the campaign needs the Deluxe framed giclée upgrade.',
  },
  {
    n: '4',
    title: 'Gift the buyer something that lasts',
    body: 'Prints are dispatched ready for settlement. The buyer receives artwork they have already seen in the home they purchased.',
  },
]

export default function HowItWorks() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)
  const { pricing, inkOriginals, process: proc } = siteConfig

  return (
    <>
      <SEOHead title="How It Works" description="One brief. Staging, digital video tour and settlement gift handled." />
      <PageHero title="How It Works" subtitle="One brief. A clear quote. A complete listing-to-settlement package." />

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-4 gap-10 md:gap-8">
            {STEPS.map((step) => (
              <div key={step.n} className="relative border-t border-[#333] pt-10">
                <div className="absolute -top-10 right-0 font-playfair font-bold text-[#cc0000]/15 select-none leading-none text-7xl">
                  {step.n}
                </div>
                <h3 className="font-playfair text-xl text-[#f5f0e8] mb-4 relative">{step.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed relative">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-5">Packages</h2>
              <p className="text-[#888888] text-sm leading-relaxed">
                Choose the service level for the campaign: digital staging, a digital video tour, print gifting, or a premium framed handover. For agents who use The Full Picture regularly, ongoing accounts are eligible for 30-day invoicing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {pricing.tiers.map((tier) => (
                <div key={tier.name} className="border border-[#242424] bg-[#0d0d0d] p-8">
                  <h3 className="font-playfair text-2xl text-[#f5f0e8] mb-4">{tier.name}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed mb-7">{tier.description}</p>
                  <div className="space-y-3 text-sm">
                    <p className="flex justify-between border-b border-[#222] pb-2"><span className="text-[#777]">Studio / 1 bed</span><span className="text-[#f5f0e8]">{tier.studio}</span></p>
                    <p className="flex justify-between border-b border-[#222] pb-2"><span className="text-[#777]">2–4 bed</span><span className="text-[#f5f0e8]">{tier.standard}</span></p>
                    <p className="flex justify-between gap-4"><span className="text-[#777]">Luxury</span><span className="text-[#f5f0e8] text-right">{tier.luxury}</span></p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-[#c9a84c]/70 bg-[#1a1a1a] p-8 md:p-10 mb-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] mb-4">Deluxe upgrade</p>
              <h3 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] mb-4">Framed giclée collection, ready to hang.</h3>
              <p className="text-[#888888] text-sm leading-relaxed max-w-3xl">{pricing.deluxe}</p>
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

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-[720px] mx-auto pl-8 border-l-4 border-[#cc0000]">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-8">
              {proc.heading}
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-5">{proc.body}</p>
            <p className="text-[#888888] text-sm leading-relaxed">
              A bottle of wine disappears. A hamper gets eaten. A framed print stays in the home, starts conversations, and keeps the agent attached to the moment long after the campaign is over.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#1a1a1a] py-20 px-6">
          <div className="max-w-4xl mx-auto border border-[#c9a84c] p-10 md:p-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-5">Ink Originals</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-2">{inkOriginals.heading}</h2>
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
            <Link to="/contact" className="text-[#f5f0e8] text-sm hover:text-[#cc0000] transition-colors underline underline-offset-4">
              Enquire →
            </Link>
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

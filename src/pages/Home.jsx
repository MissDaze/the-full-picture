import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import ScrollFadeIn from '../components/ScrollFadeIn'
import Button from '../components/Button'
import CollectionCard from '../components/CollectionCard'
import siteConfig from '../data/site-config.json'
import collections from '../data/collections.json'
import testimonials from '../data/testimonials.json'

const SERVICE_CARDS = [
  {
    label: 'Win listings',
    title: 'Show vendors a campaign edge.',
    body: 'Give sellers a reason to choose your listing presentation: property-specific marketing assets, not the same generic staging every other agent can buy.',
  },
  {
    label: 'Market faster',
    title: 'One brief replaces three vendors.',
    body: 'Digital staging, virtual tour presentation and settlement gift production are handled together. One round of direction. One invoice. 30-day terms.',
  },
  {
    label: 'Create connection',
    title: 'The campaign becomes part of the home.',
    body: 'The artwork buyers see in the listing can become the framed artwork they receive at settlement. The marketing asset becomes the memory.',
  },
]

const STEPS = [
  ['1', 'Send the listing', 'Room photos, property description, suburb, buyer profile and campaign timing. That is the brief.'],
  ['2', 'Staging assets are built', 'Original collection artwork is selected and digitally integrated into the property imagery for campaign use.'],
  ['3', 'Tour + print options', 'The staged rooms can become virtual-tour visuals, print selections and framed giclée upgrade options.'],
  ['4', 'Settlement handover', 'Approved prints are dispatched ready for the buyer gift. Deluxe packages arrive framed and ready to hang.'],
]

export default function Home() {
  const { business, hero, pricing, process: proc } = siteConfig
  const sorted = [...collections].sort((a, b) => a.sortOrder - b.sortOrder)
  const featured = sorted.find((c) => c.isFeatured)
  const rest = sorted.filter((c) => !c.isFeatured)
  const activeTestimonials = testimonials.filter((t) => t.isActive).sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <>
      <SEOHead
        title={null}
        description="Digital staging, virtual-tour presentation and settlement gifts handled together for real estate agents."
      />

      <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden px-6 pt-28 pb-20 flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(204,0,0,0.16),transparent_35%),linear-gradient(180deg,#0a0a0a,#111111)]" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center w-full">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#cc0000] mb-5">{hero.label}</p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-[#b6b0a7] text-base md:text-lg leading-relaxed max-w-xl mb-9">
              {hero.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button to="/contact" variant="primary">{hero.cta}</Button>
              <Button to="/how-it-works" variant="outline">{hero.secondaryCta}</Button>
            </div>
            <div className="grid grid-cols-3 gap-5 max-w-xl border-t border-[#222] pt-7">
              {['Staging', 'Virtual tour', 'Settlement gift'].map((item) => (
                <div key={item}>
                  <p className="font-playfair text-[#f5f0e8] text-lg">{item}</p>
                  <p className="text-[#666] text-xs mt-1">handled together</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-[#cc0000]/20" />
            <div className="relative bg-[#111111] border border-[#242424] p-3 shadow-2xl">
              <img src={hero.images.card1} alt="Digitally staged listing using The Full Picture artwork" className="w-full aspect-[16/10] object-cover block" />
            </div>
            <div className="hidden md:block absolute -bottom-12 -left-10 w-[38%] bg-[#111111] border border-[#2a2a2a] p-2 shadow-2xl">
              <img src={hero.images.card2} alt="Framed artwork cards for settlement gifting" className="w-full aspect-[4/5] object-cover block" />
            </div>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#cc0000] mb-4">What you are really buying</p>
              <h2 className="font-playfair text-3xl md:text-5xl text-[#f5f0e8] leading-tight mb-5">
                A complete real-estate marketing transformation service.
              </h2>
              <p className="text-[#888888] text-sm md:text-base leading-relaxed">
                Not just artwork. Not just staging. Not just a tour. The Full Picture gives agents a way to present the listing, create buyer emotion and deliver a memorable handover without physical staging costs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICE_CARDS.map((card) => (
                <div key={card.label} className="border border-[#242424] bg-[#0d0d0d] p-8 hover:border-[#cc0000]/60 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#cc0000] mb-5">{card.label}</p>
                  <h3 className="font-playfair text-2xl text-[#f5f0e8] mb-4">{card.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#cc0000] mb-4">Proof in the room</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-6">
                Actual collection artwork, staged into property marketing.
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed mb-6">
                Your listing images become campaign assets. The same selected artworks can then appear in the tour, the print package and the settlement gift.
              </p>
              <p className="font-playfair italic text-[#f5f0e8] text-xl border-l-2 border-[#cc0000] pl-5">
                {proc.body}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/service/st-kilda-dining.png" alt="St Kilda dining room artwork staging" className="w-full h-full object-cover bg-[#111]" />
              <img src="/images/service/st-kilda-bedroom.png" alt="St Kilda bedroom artwork staging" className="w-full h-full object-cover bg-[#111] mt-10" />
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-14">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {STEPS.map(([n, title, body]) => (
                <div key={n} className="relative border-t border-[#333] pt-8">
                  <div className="font-playfair text-6xl text-[#cc0000]/20 absolute -top-8 right-0">{n}</div>
                  <h3 className="font-playfair text-xl text-[#f5f0e8] mb-3 relative">{title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed relative">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#cc0000] mb-4">Packages</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-5">Choose the campaign level. Upgrade the handover.</h2>
              <p className="text-[#888888] text-sm leading-relaxed">Every package is built around one brief and one invoice. The Deluxe upgrade can be added to any package when the campaign calls for a premium framed handover.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {pricing.tiers.map((tier) => (
                <div key={tier.name} className="border border-[#242424] bg-[#111111] p-8">
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
            <div className="border border-[#c9a84c]/70 bg-[#1a1a1a] p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] mb-4">Deluxe upgrade</p>
                <h3 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] mb-4">Framed giclée collection, ready to hang.</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{pricing.deluxe}</p>
              </div>
              <img src="/images/service/framed-cards.png" alt="Framed giclée artwork cards" className="w-full lg:w-72 object-cover bg-[#0a0a0a]" />
            </div>
            <p className="text-[#555] text-xs mt-6">{pricing.paymentNote}</p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#cc0000] mb-4">Collections</p>
                <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8]">Artwork selected for the property.</h2>
              </div>
              <Link to="/collections" className="text-sm text-[#cc0000] hover:text-[#ff1a1a] underline underline-offset-4">All Collections →</Link>
            </div>
            {featured && <div className="mb-8"><CollectionCard collection={featured} featured /></div>}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {rest.slice(0, 6).map((c) => <CollectionCard key={c.slug} collection={c} />)}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] mb-5">Have a listing coming up?</h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-8">Send the suburb, room photos and campaign timing. I will recommend the best package and collection direction.</p>
            <Button to="/contact" variant="primary">Start a listing brief</Button>
          </div>
        </section>
      </ScrollFadeIn>

      {activeTestimonials.length > 0 && (
        <ScrollFadeIn>
          <section className="bg-[#111111] py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeTestimonials.map((t, i) => (
                <div key={i} className="border-l-2 border-[#cc0000] pl-6">
                  <p className="font-playfair italic text-[#f5f0e8] text-lg mb-5">“{t.quote}”</p>
                  <p className="text-[#f5f0e8] text-sm">{t.agentName}</p>
                  <p className="text-[#888888] text-xs">{t.agency}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>
      )}
    </>
  )
}

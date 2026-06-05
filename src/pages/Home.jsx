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
    title: 'Give vendors a clear reason to choose you.',
    body: 'Walk into the listing presentation with a campaign idea that feels specific to the property: staged visuals, tour direction and a settlement gift already considered.',
  },
  {
    label: 'Market faster',
    title: 'One brief replaces three vendors.',
    body: 'Digital staging, a digital video tour and print gifting are handled together, reducing back-and-forth and helping the campaign move faster.',
  },
  {
    label: 'Create connection',
    title: 'The campaign becomes part of the home.',
    body: 'The artwork buyers see in the listing can become the framed artwork they receive at settlement. The marketing asset becomes the memory.',
  },
]

const AGENT_BENEFITS = [
  'Stronger listing presentations for vendors',
  'Campaign images that stand out from generic digital staging',
  'Faster marketing workflow from one brief',
  'A digital video tour, not just another set of still images',
  'No physical staging costs or furniture logistics',
  'A clearer point of difference for agents and agencies',
  'Buyer connection through artwork selected for the property',
  'A settlement gift that stays in the home and keeps your name remembered',
  '30-day invoicing available for ongoing agent accounts',
]

const BEFORE_AFTER = {
  before: [
    '/images/service/before-after/before-empty-01.jpg',
    '/images/service/before-after/before-empty-02.jpg',
  ],
  video: '/images/service/before-after/after-video-tour.mp4',
  poster: '/images/service/before-after/after-video-poster.jpg',
}

const STEPS = [
  ['1', 'Send the listing', 'Room photos, property description, suburb, buyer profile and campaign timing. That is the brief.'],
  ['2', 'Staging assets are built', 'Original collection artwork is selected and digitally integrated into the property imagery for campaign use.'],
  ['3', 'Video tour + print options', 'The staged rooms can become a polished digital video tour, print selections and framed giclée upgrade options.'],
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
        <section className="bg-[#0a0a0a] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid grid-cols-1 gap-8 border-b border-[#242424] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#cc0000]">Before → after proof</p>
                <h2 className="font-playfair text-3xl leading-tight text-[#f5f0e8] md:text-5xl">
                  Empty listing photos become a campaign video agents can actually use.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-[#9a9a9a] lg:justify-self-end">
                Send the empty room photos. The Full Picture turns them into staged campaign content: a polished digital video tour, still campaign assets, and artwork selections that can continue into the buyer gift.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
              <div className="flex flex-col gap-5">
                <div className="border border-[#242424] bg-[#101010] p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#777]">Before</p>
                    <p className="text-xs text-[#666]">Empty listing stills supplied by the agent</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {BEFORE_AFTER.before.map((src, index) => (
                      <div key={src} className="overflow-hidden bg-[#050505]">
                        <img
                          src={src}
                          alt={`Empty listing before image ${index + 1}`}
                          className="block aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative border border-[#cc0000]/60 bg-[#111111] p-4 shadow-[0_0_35px_rgba(204,0,0,0.16)] md:p-5">
                <div className="absolute left-6 top-6 z-10 bg-[#cc0000] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#f5f0e8]">
                  After: digital video tour
                </div>
                <video
                  src={BEFORE_AFTER.video}
                  poster={BEFORE_AFTER.poster}
                  className="block max-h-[760px] w-full bg-[#050505] object-contain"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="grid grid-cols-1 gap-4 border-t border-[#242424] pt-5 text-sm text-[#9a9a9a] md:grid-cols-3">
                  <p><span className="font-playfair text-[#f5f0e8]">1.</span> Empty room photos become styled visual content.</p>
                  <p><span className="font-playfair text-[#f5f0e8]">2.</span> The finished deliverable includes a video tour, not just still images.</p>
                  <p><span className="font-playfair text-[#f5f0e8]">3.</span> The same artwork direction can become the settlement gift.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#cc0000] mb-4">What you are really buying</p>
              <h2 className="font-playfair text-3xl md:text-5xl text-[#f5f0e8] leading-tight mb-5">
                A practical advantage for agents from listing pitch to settlement.
              </h2>
              <p className="text-[#888888] text-sm md:text-base leading-relaxed">
                The Full Picture helps agents win the vendor, market the property, create buyer emotion and deliver a memorable handover — without coordinating physical staging, generic artwork, a separate video tour provider and a separate gift supplier.
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
            <div className="mt-8 grid grid-cols-1 gap-3 border border-[#242424] bg-[#0a0a0a] p-6 md:grid-cols-2 lg:grid-cols-4">
              {AGENT_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex gap-3 text-sm leading-relaxed text-[#a7a7a7]">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#cc0000]" />
                  <span>{benefit}</span>
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
                Your listing images become campaign assets. The same selected artworks can then appear in the digital video tour, the print package and the settlement gift.
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
              <p className="text-[#888888] text-sm leading-relaxed">Every package is built around one brief and a clear quoted scope. Ongoing agent accounts are eligible for 30-day invoicing when the service becomes part of their regular campaign workflow.</p>
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

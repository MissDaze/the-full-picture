import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import ScrollFadeIn from '../components/ScrollFadeIn'
import Button from '../components/Button'
import CollectionCard from '../components/CollectionCard'
import siteConfig from '../data/site-config.json'
import collections from '../data/collections.json'

const BEFORE_AFTER = {
  before: [
    '/images/service/before-after/before-empty-01.jpg',
    '/images/service/before-after/before-empty-02.jpg',
  ],
  video: '/images/service/before-after/after-video-tour.mp4',
  poster: '/images/service/before-after/after-video-poster.jpg',
}

const OFFER_PARTS = [
  {
    label: 'Digital staging',
    title: 'Make the listing feel considered before physical staging is involved.',
    body: 'Artwork is selected to suit the property and digitally staged into supplied room photos, giving agents stronger visual material for vendor conversations and campaign use.',
  },
  {
    label: 'Campaign video tour',
    title: 'Turn the staged direction into usable video content.',
    body: 'The staged property direction becomes a polished digital video tour designed for campaign marketing, social use and listing presentation.',
  },
  {
    label: 'Settlement gift',
    title: 'Carry the campaign idea through to handover.',
    body: 'Selected artwork can be printed or framed as a buyer gift, creating continuity between the marketing campaign and the settlement moment.',
  },
]

const AGENT_BENEFITS = [
  'One brief instead of multiple supplier conversations',
  'Stronger presentation assets for vendor meetings',
  'Campaign visuals that feel more distinctive than generic staging',
  'No physical staging logistics or furniture coordination',
  'A digital video tour ready for campaign use',
  'Artwork direction that can continue from marketing to handover',
  'A buyer gift that feels connected to the property',
  '30-day invoicing available for ongoing agent accounts',
]

const STEPS = [
  ['1', 'Send the listing brief', 'Send the suburb, room photos, property type, buyer profile if known, and campaign timing.'],
  ['2', 'Artwork direction is selected', 'The Full Picture selects artwork that suits the property, campaign tone and intended buyer.'],
  ['3', 'Campaign assets are created', 'The empty room photos are staged digitally, and the approved direction can become a digital video tour.'],
  ['4', 'Print or framed gifting is prepared', 'If included, selected artwork is prepared as prints or framed pieces for settlement handover.'],
]

const FAQS = [
  {
    q: 'What do you need from me to get started?',
    a: 'Send the suburb, room photos, property type, buyer profile if known, and campaign timing. If you already know which package you want, include that too.',
  },
  {
    q: 'Do I need physical staging?',
    a: 'No. The service is designed to create staged visual content from supplied room photos without coordinating physical furniture staging.',
  },
  {
    q: 'Is the tour a video or still images?',
    a: 'The tour is a digital video tour. Still campaign images can also be included depending on the package.',
  },
  {
    q: 'What is included in each package?',
    a: 'Staging Only includes digitally staged campaign stills. Staging + Tour adds a digital video tour. Staging + Tour + Print adds physical prints for buyer gifting.',
  },
  {
    q: 'Can I use the visuals in my campaign marketing?',
    a: 'Yes. The staged visuals and video tour are created for use in the specific property campaign. Usage applies to that listing unless otherwise agreed.',
  },
  {
    q: 'Are framed options available?',
    a: 'Yes. Any package can be upgraded to framed archival giclée prints, quoted per campaign.',
  },
  {
    q: 'How does invoicing work?',
    a: 'One-off campaigns are quoted and confirmed before work begins. 30-day invoicing is available for ongoing agent accounts that use the service regularly.',
  },
  {
    q: 'What happens after I submit a listing brief?',
    a: 'You receive a recommendation for the best package and artwork direction, along with a quote. Work begins once the scope is confirmed.',
  },
]

export default function Home() {
  const { business, hero, pricing } = siteConfig
  const sorted = [...collections].sort((a, b) => a.sortOrder - b.sortOrder)
  const featured = sorted.find((c) => c.isFeatured)
  const rest = sorted.filter((c) => !c.isFeatured)

  return (
    <>
      <SEOHead
        title={null}
        description="Digital staging, campaign video tour content and settlement artwork gifting for Melbourne real estate agents."
      />

      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-6 pb-20 pt-28 flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(204,0,0,0.18),transparent_34%),linear-gradient(180deg,#0a0a0a,#111111)]" />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#cc0000]">{hero.label}</p>
            <h1 className="mb-6 font-playfair text-5xl leading-tight text-[#f5f0e8] md:text-6xl lg:text-7xl">
              Campaign assets and settlement gifting, handled in one brief.
            </h1>
            <p className="mb-9 max-w-xl text-base leading-relaxed text-[#b6b0a7] md:text-lg">
              The Full Picture helps Melbourne real estate agents present listings better, create distinctive campaign content, and deliver a more memorable buyer handover — without coordinating separate staging, video and gift suppliers.
            </p>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" variant="primary">Start a listing brief</Button>
              <Button to="/how-it-works" variant="outline">See how it works</Button>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-5 border-t border-[#222] pt-7">
              {['Digital staging', 'Video tour', 'Buyer gift'].map((item) => (
                <div key={item}>
                  <p className="font-playfair text-lg text-[#f5f0e8]">{item}</p>
                  <p className="mt-1 text-xs text-[#666]">handled together</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-[#cc0000]/20" />
            <div className="relative border border-[#242424] bg-[#111111] p-3 shadow-2xl">
              <img src={hero.images.card1} alt="Digitally staged listing using The Full Picture artwork" className="block aspect-[16/10] w-full object-cover" />
            </div>
            <div className="absolute -bottom-12 -left-10 hidden w-[38%] border border-[#2a2a2a] bg-[#111111] p-2 shadow-2xl md:block">
              <img src={hero.images.card2} alt="Framed artwork cards for settlement gifting" className="block aspect-[4/5] w-full object-cover" />
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
                  Empty listing photos become campaign-ready video content.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-[#9a9a9a] lg:justify-self-end">
                Send through the empty room photos. The Full Picture stages the space with selected artwork, builds visual direction around the property, and turns the result into campaign assets agents can use in their marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
              <div className="border border-[#242424] bg-[#101010] p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#777]">Before</p>
                  <p className="text-xs text-[#666]">Empty listing stills supplied by the agent</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {BEFORE_AFTER.before.map((src, index) => (
                    <div key={src} className="overflow-hidden bg-[#050505]">
                      <img src={src} alt={`Empty listing before image ${index + 1}`} className="block aspect-[4/3] w-full object-cover" />
                    </div>
                  ))}
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
                  <p><span className="font-playfair text-[#f5f0e8]">1.</span> Empty rooms become styled visual content.</p>
                  <p><span className="font-playfair text-[#f5f0e8]">2.</span> The finished deliverable includes a video tour, not just still images.</p>
                  <p><span className="font-playfair text-[#f5f0e8]">3.</span> The same artwork direction can become the settlement gift.</p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[#5f5f5f]">
              Shown as work proof only. No sales outcome or campaign result is implied.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#111111] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">The service</p>
              <h2 className="mb-5 font-playfair text-3xl leading-tight text-[#f5f0e8] md:text-5xl">
                From listing pitch to settlement, handled in one brief.
              </h2>
              <p className="text-sm leading-relaxed text-[#888888] md:text-base">
                The Full Picture combines three parts of the campaign workflow that agents would usually manage separately: staging visuals, video content, and buyer gifting.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {OFFER_PARTS.map((card) => (
                <div key={card.label} className="border border-[#242424] bg-[#0d0d0d] p-8 transition-colors hover:border-[#cc0000]/60">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#cc0000]">{card.label}</p>
                  <h3 className="mb-4 font-playfair text-2xl text-[#f5f0e8]">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#888888]">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">Why agents use it</p>
              <h2 className="mb-5 font-playfair text-3xl text-[#f5f0e8] md:text-4xl">A sharper campaign without adding more suppliers.</h2>
              <p className="text-sm leading-relaxed text-[#888888]">Clearer assets, fewer moving parts, and a handover that feels connected to the listing.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 border border-[#242424] bg-[#111111] p-6 md:grid-cols-2 lg:grid-cols-4">
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
        <section className="bg-[#111111] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">Packages</p>
              <h2 className="mb-5 font-playfair text-3xl text-[#f5f0e8] md:text-4xl">Choose the campaign level. Add print or framing when needed.</h2>
              <p className="text-sm leading-relaxed text-[#888888]">Every campaign is quoted before work begins. Standard pricing is available for common listing types. Luxury, larger or more complex campaigns are priced to scope.</p>
            </div>
            <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {pricing.tiers.map((tier) => (
                <div key={tier.name} className="flex h-full flex-col border border-[#242424] bg-[#0d0d0d] p-8">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#777]">{tier.bestFor}</p>
                  <h3 className="mb-4 font-playfair text-2xl text-[#f5f0e8]">{tier.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-[#888888]">{tier.description}</p>
                  <ul className="mb-8 space-y-2 text-sm text-[#aaa]">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex gap-3"><span className="text-[#cc0000]">—</span>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-3 text-sm">
                    <p className="flex justify-between border-b border-[#222] pb-2"><span className="text-[#777]">Studio / 1 bed</span><span className="text-[#f5f0e8]">{tier.studio}</span></p>
                    <p className="flex justify-between border-b border-[#222] pb-2"><span className="text-[#777]">2–4 bed</span><span className="text-[#f5f0e8]">{tier.standard}</span></p>
                    <p className="flex justify-between gap-4"><span className="text-[#777]">Luxury / larger</span><span className="text-right text-[#f5f0e8]">{tier.luxury}</span></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-8 border border-[#c9a84c]/70 bg-[#1a1a1a] p-8 md:p-10">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#c9a84c]">Deluxe framed upgrade</p>
              <h3 className="mb-4 font-playfair text-2xl text-[#f5f0e8] md:text-3xl">Framed giclée collection, ready to hang.</h3>
              <p className="max-w-3xl text-sm leading-relaxed text-[#888888]">{pricing.deluxe}</p>
            </div>
            <p className="mb-10 text-xs leading-relaxed text-[#666]">{pricing.paymentNote}</p>
            <Button to="/contact" variant="primary">Start a listing brief</Button>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">Process</p>
              <h2 className="font-playfair text-3xl text-[#f5f0e8] md:text-4xl">Simple enough to fit into a live campaign.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
              {STEPS.map(([n, title, body]) => (
                <div key={n} className="relative border-t border-[#333] pt-8">
                  <div className="absolute -top-8 right-0 font-playfair text-6xl text-[#cc0000]/20">{n}</div>
                  <h3 className="relative mb-3 font-playfair text-xl text-[#f5f0e8]">{title}</h3>
                  <p className="relative text-sm leading-relaxed text-[#888888]">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-[#777]">After you submit a brief, you’ll receive a package recommendation and quote before work begins.</p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#111111] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">Artwork direction</p>
                <h2 className="font-playfair text-3xl text-[#f5f0e8] md:text-4xl">Selected around the property, not pulled from a generic catalogue.</h2>
              </div>
              <Link to="/collections" className="text-sm text-[#cc0000] underline underline-offset-4 transition-colors hover:text-[#ff1a1a]">View collections →</Link>
            </div>
            <p className="mb-10 max-w-3xl text-sm leading-relaxed text-[#888888]">
              Collections give each campaign a visual direction. Some are suburb-led, some are darker and more cinematic, and others are better suited to statement interiors or framed gifts.
            </p>
            {featured && <div className="mb-8"><CollectionCard collection={featured} featured /></div>}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rest.slice(0, 5).map((c) => <CollectionCard key={c.slug} collection={c} />)}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto max-w-4xl border-l-2 border-[#cc0000] pl-8">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">Direct service</p>
            <h2 className="mb-6 font-playfair text-3xl text-[#f5f0e8] md:text-4xl">
              Built for agents who want the campaign and handover to feel connected.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-[#888888] md:text-base">
              <p>
                The Full Picture is a founder-led service based in Melbourne. Each campaign is handled directly, with artwork selected around the property and the practical needs of the agent: presentation, marketing, video content and settlement gifting.
              </p>
              <p>
                It is designed to keep the process efficient while giving the listing a more distinctive visual identity than generic staging or standard buyer gifts.
              </p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#111111] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">FAQ</p>
              <h2 className="font-playfair text-3xl text-[#f5f0e8] md:text-4xl">Practical questions, answered plainly.</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {FAQS.map((item) => (
                <div key={item.q} className="border border-[#242424] bg-[#0d0d0d] p-6">
                  <h3 className="mb-3 font-playfair text-xl text-[#f5f0e8]">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-[#888888]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] px-6 py-24 text-center">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#cc0000]">Start here</p>
            <h2 className="mb-5 font-playfair text-3xl text-[#f5f0e8] md:text-4xl">Have a listing coming up?</h2>
            <p className="mb-8 text-sm leading-relaxed text-[#888888]">
              Send through the suburb, room photos, property type and campaign timing. I’ll recommend the best package and artwork direction for the listing.
            </p>
            <Button to="/contact" variant="primary">Start a listing brief</Button>
            <p className="mt-5 text-xs text-[#666]">No obligation. You’ll receive a recommendation and quote before work begins.</p>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}

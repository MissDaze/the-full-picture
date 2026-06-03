import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import CollectionCard from '../components/CollectionCard'
import Button from '../components/Button'
import ScrollFadeIn from '../components/ScrollFadeIn'
import collections from '../data/collections.json'

export default function Collections() {
  const sorted = [...collections].sort((a, b) => a.sortOrder - b.sortOrder)
  const featured = sorted.find((c) => c.isFeatured)
  const rest = sorted.filter((c) => !c.isFeatured)

  return (
    <>
      <SEOHead
        title="The Collections"
        description="Hyper-local fine art collections for real estate agents across Melbourne and beyond."
      />
      <PageHero
        title="The Collections"
        subtitle="Curated artwork sets for listing campaigns, virtual tours and settlement gifts."
      />

      <div className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid grid-cols-1 gap-8 border-b border-[#202020] pb-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#cc0000]">
                Campaign-ready collections
              </p>
              <h2 className="font-playfair text-3xl leading-tight text-[#f5f0e8] md:text-4xl">
                Built to look deliberate, not decorative.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-[#8f8f8f] md:justify-self-end">
              Each collection is presented as a finished campaign direction: a lead image, a clear use case, and a structured set of works that can move from digital staging into tour visuals and print handover.
            </p>
          </div>

          {featured && (
            <ScrollFadeIn className="mb-10">
              <CollectionCard collection={featured} featured />
            </ScrollFadeIn>
          )}

          {rest.length > 0 && (
            <ScrollFadeIn>
              <div className="mb-16 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((c) => (
                  <CollectionCard key={c.slug} collection={c} />
                ))}
              </div>
            </ScrollFadeIn>
          )}

          {/* Custom commission */}
          <ScrollFadeIn>
            <div className="border border-dashed border-[#cc0000]/80 bg-[#101010] p-10 text-center md:p-14">
              <p className="font-playfair text-2xl text-[#f5f0e8] mb-3">
                Don&apos;t see your suburb?
              </p>
              <p className="text-[#888888] text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                Commission a collection built for your market.
              </p>
              <Button to="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </>
  )
}

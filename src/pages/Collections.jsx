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
      <PageHero title="The Collections" />

      <div className="bg-[#0a0a0a] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          {featured && (
            <ScrollFadeIn className="mb-8">
              <CollectionCard collection={featured} featured />
            </ScrollFadeIn>
          )}

          {rest.length > 0 && (
            <ScrollFadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
                {rest.map((c) => (
                  <CollectionCard key={c.slug} collection={c} />
                ))}
              </div>
            </ScrollFadeIn>
          )}

          {/* Custom commission */}
          <ScrollFadeIn>
            <div className="border border-dashed border-[#cc0000] p-10 md:p-14 text-center">
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

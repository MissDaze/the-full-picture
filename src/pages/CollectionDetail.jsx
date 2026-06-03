import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import CollectionCard from '../components/CollectionCard'
import Button from '../components/Button'
import Lightbox from '../components/Lightbox'
import InquiryModal from '../components/InquiryModal'
import ScrollFadeIn from '../components/ScrollFadeIn'
import collections from '../data/collections.json'

export default function CollectionDetail() {
  const { slug } = useParams()
  const collection = collections.find((c) => c.slug === slug)
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)

  if (!collection) {
    return (
      <>
        <SEOHead title="Collection Not Found" />
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-playfair text-3xl text-[#f5f0e8] mb-5">
            This collection does not exist.
          </h1>
          <Link
            to="/collections"
            className="text-[#cc0000] hover:text-[#ff1a1a] transition-colors text-sm"
          >
            ← View all collections
          </Link>
        </div>
      </>
    )
  }

  const mockups = collection.mockups || []
  const artwork = collection.artwork || []
  const otherCollections = collections
    .filter((c) => c.slug !== slug)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .slice(0, 3)
  const firstImage = collection.coverImage || collection.mockups?.[0] || collection.artwork?.[0]

  return (
    <>
      <SEOHead title={collection.name} description={collection.shortDescription} />

      {/* ── Section A: Header banner ─────────────────────── */}
      <section className="relative flex min-h-[58vh] flex-col items-center justify-end overflow-hidden px-6 pb-16 pt-32 text-center">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        {firstImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${firstImage})`,
              filter: 'brightness(0.18)',
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#cc0000]">
            {collection.category}
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] mb-4 leading-tight">
            {collection.name}
          </h1>
          <p className="text-[#888888] text-base">{collection.shortDescription}</p>
        </div>
      </section>

      {/* ── Section B: About ─────────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] px-6 py-18 md:py-20">
          <div className="mx-auto max-w-[760px] border-l border-[#cc0000]/70 pl-7">
            <p className="font-playfair text-xl italic leading-relaxed text-[#9a9a9a] md:text-2xl">
              {collection.fullDescription}
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section C: The Work ──────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            {mockups.length > 0 && (
              <div className="mb-16">
                <div className="mb-8 flex flex-col gap-3 border-b border-[#2a2a2a] pb-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#cc0000]">
                      Campaign views
                    </p>
                    <h2 className="font-playfair text-2xl text-[#f5f0e8] md:text-3xl">
                      Staged presentation
                    </h2>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-[#777]">
                    Lead visuals are cropped consistently so the collection reads like a professional campaign set.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {mockups.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className="group block overflow-hidden border border-[#2a2a2a] bg-[#050505] p-3 text-left transition-colors hover:border-[#cc0000]/70"
                      onClick={() => setLightboxSrc(src)}
                    >
                      <span className="block aspect-[3/2] overflow-hidden bg-[#0a0a0a]">
                        <img
                          src={src}
                          alt={`${collection.name} campaign view ${i + 1}`}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015] group-hover:brightness-110"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {artwork.length > 0 && (
              <div>
                <div className="mb-8 flex flex-col gap-3 border-b border-[#2a2a2a] pb-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#cc0000]">
                      Artwork set
                    </p>
                    <h2 className="font-playfair text-2xl text-[#f5f0e8] md:text-3xl">
                      The works
                    </h2>
                  </div>
                  <p className="text-sm text-[#777]">{artwork.length} works in this collection</p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
                  {artwork.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className="group flex aspect-[4/5] items-center justify-center overflow-hidden border border-[#242424] bg-[#080808] p-3 transition-colors hover:border-[#cc0000]/70 md:p-4"
                      onClick={() => setLightboxSrc(src)}
                    >
                      <img
                        src={src}
                        alt={`${collection.name} artwork ${i + 1}`}
                        className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section D: Ink Originals note ───────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-10 px-6">
          <div className="max-w-2xl mx-auto border border-[#c9a84c] p-8">
            <p className="text-[#888888] text-sm leading-relaxed mb-4">
              This collection is available as an Ink Original — hand-drawn using fineliners and gel
              pens. By request only. Minimum one week notice.
            </p>
            <Link
              to="/contact"
              className="text-[#c9a84c] text-sm hover:text-[#f5f0e8] transition-colors underline underline-offset-4"
            >
              Enquire →
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section E: Get In Touch ──────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] py-20 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-[#888888] text-sm leading-relaxed mb-8">
              Interested in this collection for a listing? Send me the property details and
              I&apos;ll put something together.
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setModalSuccess(false)
                setModalOpen(true)
              }}
            >
              Make An Inquiry
            </Button>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section F: Other collections ────────────────── */}
      {otherCollections.length > 0 && (
        <ScrollFadeIn>
          <section className="bg-[#0a0a0a] py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-2xl text-[#f5f0e8] mb-10">Other Collections</h2>
              <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherCollections.map((c) => (
                  <CollectionCard key={c.slug} collection={c} />
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>
      )}

      {/* Lightbox */}
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={collection.name}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      {/* Inquiry modal */}
      {modalOpen && (
        <InquiryModal
          collectionName={collection.name}
          onClose={() => setModalOpen(false)}
          onSuccess={() => setModalSuccess(true)}
          isSuccess={modalSuccess}
        />
      )}
    </>
  )
}

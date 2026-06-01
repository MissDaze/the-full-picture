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

  const allImages = [...(collection.mockups || []), ...(collection.artwork || [])]
  const otherCollections = collections
    .filter((c) => c.slug !== slug)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .slice(0, 3)
  const firstImage = collection.mockups?.[0]

  return (
    <>
      <SEOHead title={collection.name} description={collection.shortDescription} />

      {/* ── Section A: Header banner ─────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col items-center justify-end text-center px-6 pb-14 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        {firstImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${firstImage})`,
              filter: 'brightness(0.2)',
            }}
          />
        )}
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] mb-4 leading-tight">
            {collection.name}
          </h1>
          <p className="text-[#888888] text-base">{collection.shortDescription}</p>
        </div>
      </section>

      {/* ── Section B: About ─────────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#0a0a0a] py-16 px-6">
          <div className="max-w-[720px] mx-auto">
            <p className="font-playfair italic text-[#888888] text-lg leading-relaxed">
              {collection.fullDescription}
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── Section C: The Work ──────────────────────────── */}
      <ScrollFadeIn>
        <section className="bg-[#111111] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] mb-10">The Works</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
              {allImages.map((src, i) => (
                <div
                  key={i}
                  className="break-inside-avoid mb-3 cursor-pointer overflow-hidden bg-[#1a1a1a]
                    hover:brightness-110 transition-all duration-300"
                  onClick={() => setLightboxSrc(src)}
                >
                  <img
                    src={src}
                    alt={`${collection.name} — work ${i + 1}`}
                    className="w-full h-auto block"
                    onError={(e) => {
                      e.target.parentElement.classList.add('aspect-[4/3]')
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              ))}
            </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

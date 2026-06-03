import { Link } from 'react-router-dom'

export default function CollectionCard({ collection, featured = false }) {
  const firstImage = collection.coverImage || collection.mockups?.[0] || collection.artwork?.[0]
  const artworkCount = collection.artwork?.length || 0

  if (featured) {
    return (
      <article className="group relative overflow-hidden border border-[#2a2a2a] bg-[#101010] transition-colors duration-300 hover:border-[#cc0000]/70">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] min-h-[420px]">
          <Link to={`/collections/${collection.slug}`} className="relative block bg-[#050505] p-4 md:p-5">
            <span className="absolute left-8 top-8 z-10 bg-[#cc0000] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#f5f0e8]">
              Featured
            </span>
            <div className="h-full min-h-[300px] overflow-hidden bg-[#0a0a0a]">
              {firstImage ? (
                <img
                  src={firstImage}
                  alt={collection.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015] group-hover:brightness-110"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              ) : (
                <div className="h-full w-full bg-[#1a1a1a]" />
              )}
            </div>
          </Link>

          <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[#cc0000]">
                {collection.category}
              </p>
              <h3 className="mb-5 font-playfair text-3xl leading-tight text-[#f5f0e8] md:text-4xl">
                {collection.name}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-[#9a9a9a]">
                {collection.shortDescription}
              </p>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-[#252525] pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#666]">
                {artworkCount} works
              </p>
              <Link
                to={`/collections/${collection.slug}`}
                className="text-sm tracking-wide text-[#cc0000] transition-colors hover:text-[#ff1a1a]"
              >
                View Collection →
              </Link>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#242424] bg-[#101010] transition-all duration-300 hover:-translate-y-1 hover:border-[#cc0000]/70 hover:shadow-[0_0_24px_rgba(204,0,0,0.18)]">
      <Link to={`/collections/${collection.slug}`} className="block bg-[#050505] p-3">
        <div className="aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
          {firstImage ? (
            <img
              src={firstImage}
              alt={collection.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          ) : (
            <div className="h-full w-full bg-[#1a1a1a]" />
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#cc0000]">
          {collection.category}
        </p>
        <h3 className="mb-3 min-h-[3.5rem] font-playfair text-2xl leading-tight text-[#f5f0e8]">
          {collection.name}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-[#8f8f8f]">
          {collection.shortDescription}
        </p>
        <div className="flex items-center justify-between border-t border-[#252525] pt-5">
          <p className="text-xs text-[#5f5f5f]">{artworkCount} works</p>
          <Link
            to={`/collections/${collection.slug}`}
            className="text-sm tracking-wide text-[#cc0000] transition-colors hover:text-[#ff1a1a]"
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  )
}

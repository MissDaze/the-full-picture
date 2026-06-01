import { Link } from 'react-router-dom'

export default function CollectionCard({ collection, featured = false }) {
  const firstImage = collection.mockups?.[0]

  return (
    <div
      className={`group relative bg-[#111111] overflow-hidden transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(204,0,0,0.25)]
        hover:border-[#cc0000] border border-transparent ${featured ? 'w-full' : ''}`}
    >
      {featured && (
        <span className="absolute top-4 left-4 z-10 bg-[#cc0000] text-[#f5f0e8] text-[10px] uppercase tracking-[0.2em] px-3 py-1">
          Featured
        </span>
      )}

      <div className={`overflow-hidden bg-[#1a1a1a] ${featured ? 'h-80 md:h-[420px]' : 'h-56'}`}>
        {firstImage ? (
          <img
            src={firstImage}
            alt={collection.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <div className="w-full h-full bg-[#1a1a1a]" />
        )}
      </div>

      <div className={`p-6 ${featured ? 'md:p-10' : ''}`}>
        <h3 className={`font-playfair text-[#f5f0e8] mb-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {collection.name}
        </h3>
        <p className="text-[#888888] text-sm mb-5 leading-relaxed">
          {collection.shortDescription}
        </p>
        <Link
          to={`/collections/${collection.slug}`}
          className="text-sm text-[#cc0000] hover:text-[#ff1a1a] transition-colors tracking-wide"
        >
          View Collection →
        </Link>
      </div>
    </div>
  )
}

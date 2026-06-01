import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 cursor-pointer"
      style={{ animation: 'fadeIn 0.25s ease' }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-6 text-white text-4xl leading-none hover:text-[#cc0000] transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain cursor-default"
        style={{ animation: 'lightboxScale 0.25s ease' }}
        onClick={(e) => e.stopPropagation()}
      />

      <style>{`
        @keyframes lightboxScale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  ['Collections', '/collections'],
  ['How It Works', '/how-it-works'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const solid = !isHome || scrolled
  const navBg = solid
    ? 'bg-[#111111] shadow-lg'
    : 'bg-transparent'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-playfair text-xl text-[#f5f0e8] hover:text-white transition-colors tracking-wide"
          >
            The Full Picture
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === path
                    ? 'text-[#cc0000]'
                    : 'text-[#f5f0e8] hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-[#f5f0e8] p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="2" y1="5" x2="20" y2="5" />
              <line x1="2" y1="11" x2="20" y2="11" />
              <line x1="2" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-6 text-[#888888] hover:text-[#f5f0e8] text-4xl leading-none transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="flex flex-col items-center gap-8">
            {NAV_LINKS.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="font-playfair text-3xl text-[#f5f0e8] hover:text-[#cc0000] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" />
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#cc0000] mb-6">404</p>
        <h1 className="font-playfair text-4xl text-[#f5f0e8] mb-6">Page not found.</h1>
        <Link to="/" className="text-[#888888] text-sm hover:text-[#f5f0e8] transition-colors underline underline-offset-4">
          Back to home →
        </Link>
      </div>
    </>
  )
}

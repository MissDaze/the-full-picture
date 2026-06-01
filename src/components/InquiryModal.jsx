import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import collections from '../data/collections.json'
import siteConfig from '../data/site-config.json'
import { submitToFormspree } from '../utils/formspree'

const INTEREST_OPTIONS = [
  ...collections.map((c) => c.name),
  'Ink Original',
  'Custom Commission',
  'General Inquiry',
]

const INPUT = `w-full bg-[#0a0a0a] border border-[#2a2a2a] text-[#f5f0e8] px-4 py-3 text-sm
  focus:outline-none focus:border-[#cc0000] transition-colors placeholder-[#444]`
const LABEL = 'block text-[10px] uppercase tracking-[0.15em] text-[#666] mb-2'
const ERR = 'text-[#ff1a1a] text-xs mt-1'

export default function InquiryModal({ collectionName, onClose, onSuccess, isSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { interest: collectionName || 'General Inquiry' } })
  const [submitError, setSubmitError] = useState(false)
  const overlayRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const onSubmit = async (data) => {
    setSubmitError(false)
    const result = await submitToFormspree(siteConfig.telegram, data)
    if (result.ok) {
      onSuccess()
    } else {
      setSubmitError(true)
    }
  }

  const hasEmail = siteConfig.business.email && !siteConfig.business.email.includes('[TO BE ADDED')

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/75"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-[#111111] overflow-y-auto"
        style={{ animation: 'slideInRight 0.3s ease' }}
      >
        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        <div className="p-8 md:p-10">
          <div className="flex justify-between items-start mb-8">
            <h2 className="font-playfair text-2xl text-[#f5f0e8]">Make An Inquiry</h2>
            <button
              onClick={onClose}
              className="text-[#555] hover:text-[#f5f0e8] text-3xl leading-none transition-colors ml-4"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {isSuccess ? (
            <div className="py-16 text-center">
              <p className="font-playfair text-2xl text-[#f5f0e8]">
                Thanks — I&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className={LABEL}>Name *</label>
                <input
                  type="text"
                  className={INPUT}
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className={ERR}>{errors.name.message}</p>}
              </div>

              <div>
                <label className={LABEL}>Agency / Company *</label>
                <input
                  type="text"
                  className={INPUT}
                  placeholder="Your agency or company"
                  {...register('agency', { required: 'Agency is required' })}
                />
                {errors.agency && <p className={ERR}>{errors.agency.message}</p>}
              </div>

              <div>
                <label className={LABEL}>Email *</label>
                <input
                  type="email"
                  className={INPUT}
                  placeholder="your@email.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                  })}
                />
                {errors.email && <p className={ERR}>{errors.email.message}</p>}
              </div>

              <div>
                <label className={LABEL}>Phone</label>
                <input type="tel" className={INPUT} placeholder="Optional" {...register('phone')} />
              </div>

              <div>
                <label className={LABEL}>Property Suburb</label>
                <input type="text" className={INPUT} placeholder="Optional" {...register('suburb')} />
              </div>

              <div>
                <label className={LABEL}>Interested In *</label>
                <select
                  className={`${INPUT} cursor-pointer`}
                  {...register('interest', { required: true })}
                >
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={LABEL}>Message *</label>
                <textarea
                  rows={4}
                  className={INPUT}
                  placeholder="Tell me about the property or what you are looking for."
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <p className={ERR}>{errors.message.message}</p>}
              </div>

              {submitError && (
                <p className="text-[#ff1a1a] text-sm leading-relaxed">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#cc0000] text-[#f5f0e8] py-3.5 text-sm tracking-wide
                  hover:bg-[#ff1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import ScrollFadeIn from '../components/ScrollFadeIn'
import collections from '../data/collections.json'
import siteConfig from '../data/site-config.json'
import { submitToFormspree } from '../utils/formspree'

const INTEREST_OPTIONS = [
  ...collections.map((c) => c.name),
  'Ink Original',
  'Custom Commission',
  'General Inquiry',
]

const INPUT = `w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f0e8] px-4 py-3 text-sm
  focus:outline-none focus:border-[#cc0000] transition-colors placeholder-[#444]`
const LABEL = 'block text-[10px] uppercase tracking-[0.15em] text-[#666] mb-2'
const ERR = 'text-[#ff1a1a] text-xs mt-1'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const { business, telegram } = siteConfig
  const hasEmail = business.email && !business.email.includes('[TO BE ADDED')
  const hasInstagram = business.instagram && !business.instagram.includes('[TO BE ADDED')

  const onSubmit = async (data) => {
    setSubmitError(false)
    const result = await submitToFormspree(telegram, data)
    if (result.ok) {
      setSuccess(true)
      reset()
    } else {
      setSubmitError(true)
    }
  }

  return (
    <>
      <SEOHead title="Get In Touch" description="Send a property brief and get a quote." />
      <PageHero title="Get In Touch" />

      <div className="bg-[#0a0a0a] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
              {/* Form */}
              <div>
                {success ? (
                  <div className="py-16">
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
                      <input
                        type="tel"
                        className={INPUT}
                        placeholder="Optional"
                        {...register('phone')}
                      />
                    </div>

                    <div>
                      <label className={LABEL}>Property Suburb</label>
                      <input
                        type="text"
                        className={INPUT}
                        placeholder="Optional"
                        {...register('suburb')}
                      />
                    </div>

                    <div>
                      <label className={LABEL}>Interested In *</label>
                      <select
                        className={`${INPUT} cursor-pointer`}
                        {...register('interest', { required: true })}
                      >
                        <option value="">Select one…</option>
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={LABEL}>Message *</label>
                      <textarea
                        rows={5}
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
                      className="bg-[#cc0000] text-[#f5f0e8] px-8 py-3.5 text-sm tracking-wide
                        hover:bg-[#ff1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending…' : 'Send'}
                    </button>
                  </form>
                )}
              </div>

              {/* Right column info */}
              <div className="space-y-8 lg:pt-2">
                {(hasEmail || hasInstagram) && (
                  <div>
                    {hasEmail && (
                      <a
                        href={`mailto:${business.email}`}
                        className="text-[#f5f0e8] text-sm hover:text-[#cc0000] transition-colors block mb-2"
                      >
                        {business.email}
                      </a>
                    )}
                    {hasInstagram && (
                      <a
                        href={business.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888888] text-sm hover:text-[#f5f0e8] transition-colors block"
                      >
                        Instagram
                      </a>
                    )}
                  </div>
                )}

                <div className="border-l-2 border-[#1a1a1a] pl-5 space-y-5">
                  <p className="text-[#888888] text-sm leading-relaxed">
                    Pricing is based on the property — room count, print requirements, and whether a
                    custom collection is needed. Get in touch with the details and I will put a quote
                    together.
                  </p>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    All packages invoiced on 30-day terms. No upfront payment required.
                  </p>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    Ink Originals are available by request. Minimum one week notice required.
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </>
  )
}

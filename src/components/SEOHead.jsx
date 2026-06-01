import { useEffect } from 'react'

export default function SEOHead({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} — The Full Picture`
      : 'The Full Picture — Art that outlasts the listing.'

    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) {
      meta.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

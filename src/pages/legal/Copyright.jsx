import LegalPage from '../../components/LegalPage'
import siteConfig from '../../data/site-config.json'

export default function Copyright() {
  const { business } = siteConfig
  const hasEmail = business.email && !business.email.includes('[TO BE ADDED')

  return (
    <LegalPage title="Copyright" lastUpdated="1 June 2025">
      <h2>1. Ownership of All Artwork</h2>
      <p>
        All artwork, compositions, digital files, photographic source material, and Ink Originals
        created by The Full Picture are original works protected by copyright under the Copyright
        Act 1968 (Cth).
      </p>
      <p>
        Each work begins as an original photograph taken on location by The Full Picture. Every stage
        from there is handled personally — digital and physical work, colour, composition, and
        editing — all made by the same hands. The resulting artwork is an original work in which
        copyright subsists from the moment of creation.
      </p>
      <p>Ink Originals are additionally protected as hand-drawn original artworks.</p>

      <h2>2. Licence Granted to Clients</h2>
      <p>
        Upon full payment, clients are granted a non-exclusive, non-transferable, royalty-free
        licence to use digital staged images for marketing the specific property for which they were
        created, including:
      </p>
      <ul>
        <li>Property listing portals</li>
        <li>Social media marketing for the specific listing</li>
        <li>Printed property marketing collateral</li>
        <li>Email marketing relating to the specific listing</li>
      </ul>
      <p>
        This licence does not transfer copyright in the artwork or any underlying work.
      </p>
      <p>
        Physical prints and Ink Originals, once paid for, may be displayed, gifted, or sold as
        physical objects. This does not transfer copyright or any reproduction rights.
      </p>

      <h2>3. Permitted Uses</h2>
      <p>With the licence granted you may:</p>
      <ul>
        <li>Use digital staged images in property marketing for the specific listing</li>
        <li>Share staged images on social media in connection with the specific listing</li>
        <li>Gift or sell physical prints as objects</li>
      </ul>

      <h2>4. Prohibited Uses</h2>
      <p>Without prior written permission you must not:</p>
      <ul>
        <li>Reproduce or distribute digital files beyond the agreed licence use</li>
        <li>Use artwork in marketing for any property other than the one it was created for</li>
        <li>Modify, alter, or create derivative works</li>
        <li>Sub-licence the artwork to any third party</li>
        <li>Use the artwork in any commercial context beyond the specific listed property</li>
        <li>Remove any attribution or signature</li>
        <li>Represent the artwork as your own creation</li>
      </ul>

      <h2>5. Reproduction and Resale</h2>
      <p>Purchase does not include any right to reproduce the artwork in any format.</p>
      <p>
        Resale of physical prints and Ink Originals as physical objects is permitted. Reproduction
        of the artwork for resale is not permitted without written agreement.
      </p>

      <h2>6. Reporting Infringement</h2>
      <p>
        {hasEmail ? (
          <a href={`mailto:${business.email}`}>{business.email}</a>
        ) : (
          'Contact us via the contact page.'
        )}
      </p>
      <p>We take copyright seriously and will act promptly on all credible reports.</p>
    </LegalPage>
  )
}

import LegalPage from '../../components/LegalPage'
import siteConfig from '../../data/site-config.json'

export default function Disclaimer() {
  const { business } = siteConfig
  const hasEmail = business.email && !business.email.includes('[TO BE ADDED')

  return (
    <LegalPage title="Disclaimer" lastUpdated="1 June 2025">
      <h2>1. General</h2>
      <p>
        The information on this website is provided in good faith for general informational purposes.
        We make no representations or warranties of any kind about the completeness, accuracy,
        reliability, or suitability of information on this site.
      </p>
      <p>Your use of this website and reliance on any information is entirely at your own risk.</p>

      <h2>2. Digital Staging — Property Marketing</h2>
      <p>We make no representation that:</p>
      <ul>
        <li>
          Digitally staged images will result in any particular sale outcome, sale price, or buyer
          response
        </li>
        <li>
          Staged images will be an exact representation of how physical prints will appear when
          installed, due to variations in screen calibration, lighting, and print production
        </li>
        <li>
          Virtual tours will be compatible with or accepted by all third party real estate platforms
        </li>
      </ul>
      <p>
        Real estate agents are solely responsible for ensuring that marketing material including
        digitally staged images complies with all applicable laws, codes of conduct, and their
        licensing authority requirements.
      </p>

      <h2>3. Accuracy of Information</h2>
      <p>
        Pricing information on this website is indicative only. All pricing is subject to a formal
        quote based on your specific property and requirements.
      </p>

      <h2>4. Process Description</h2>
      <p>
        Each work created by The Full Picture begins as an original photograph taken on location.
        The image is transformed through a digital process and returned for hand editing and
        refinement. Descriptions of this process do not constitute a technical specification.
      </p>

      <h2>5. External Links</h2>
      <p>
        This website may contain links to third party websites including Formspree and Railway. We
        have no control over and accept no responsibility for the content or availability of linked
        sites.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law The Full Picture excludes all liability for any loss
        or damage of any kind arising from:
      </p>
      <ul>
        <li>Use of or reliance on this website</li>
        <li>Inability to access this website</li>
        <li>Any errors or omissions in website content</li>
        <li>Use of digitally staged images in property marketing</li>
      </ul>
      <p>
        Nothing in this disclaimer excludes any right under the Australian Consumer Law that cannot
        lawfully be excluded.
      </p>

      <h2>7. Contact</h2>
      <p>
        The Full Picture
        <br />
        Melbourne, Victoria, Australia
        {hasEmail && (
          <>
            <br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </>
        )}
      </p>
    </LegalPage>
  )
}

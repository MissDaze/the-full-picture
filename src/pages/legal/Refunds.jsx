import LegalPage from '../../components/LegalPage'
import siteConfig from '../../data/site-config.json'

export default function Refunds() {
  const { business } = siteConfig
  const hasEmail = business.email && !business.email.includes('[TO BE ADDED')

  return (
    <LegalPage title="Refund & Returns Policy" lastUpdated="1 June 2025">
      <p>
        Your rights under the Australian Consumer Law (Schedule 2 of the Competition and Consumer
        Act 2010) are not excluded, restricted, or modified by this policy.
      </p>

      <h2>1. Digital Services</h2>
      <p>
        Refunds are not available once work has commenced and files have been delivered, except:
      </p>
      <ul>
        <li>The service is not delivered within a reasonable time after notification of failure</li>
        <li>
          The delivered files contain a major failure as defined under the Australian Consumer Law
        </li>
        <li>The service is not provided with due care and skill</li>
      </ul>
      <p>One round of reasonable revisions is included.</p>

      <h2>2. Physical Prints — Change of Mind</h2>
      <p>We do not offer refunds or exchanges on physical prints for change of mind.</p>
      <p>
        Prints are produced to your approved specification following written confirmation. Please
        review your approval carefully before confirming.
      </p>

      <h2>3. Physical Prints — Damaged in Transit</h2>
      <p>If prints arrive damaged you must:</p>
      <ul>
        <li>Notify us by email within 48 hours of receipt</li>
        <li>Provide photographs of the damaged item and the packaging</li>
      </ul>
      <p>Upon satisfactory evidence of damage we will at our discretion:</p>
      <ul>
        <li>Replace the damaged print at no charge, or</li>
        <li>Issue a partial or full refund for the damaged item</li>
      </ul>

      <h2>4. Ink Originals</h2>
      <p>Ink Originals are non-refundable once work has commenced.</p>
      <p>
        If an Ink Original arrives damaged in transit, notify us within 48 hours with photographic
        evidence.
      </p>
      <p>Minor natural variations in the finished work are not grounds for a refund.</p>

      <h2>5. Your Rights Under Australian Consumer Law</h2>
      <p>
        Under the Australian Consumer Law you are entitled to a remedy if a product or service:
      </p>
      <ul>
        <li>Has a major failure</li>
        <li>Does not match the description provided</li>
        <li>Is not fit for the purpose made known to us</li>
        <li>Does not meet an express warranty made</li>
      </ul>
      <p>
        For major failures with physical products you may choose a refund or replacement. For minor
        failures we may choose to repair, replace, or refund.
      </p>
      <p>These rights cannot be excluded by this policy.</p>

      <h2>6. How to Request a Return or Remedy</h2>
      <p>
        Contact us at:
        {hasEmail ? (
          <>
            {' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </>
        ) : (
          ' our contact email.'
        )}
      </p>
      <p>Please include:</p>
      <ul>
        <li>Your name and agency</li>
        <li>The date of your order</li>
        <li>A description of the issue</li>
        <li>Photographs where relevant</li>
      </ul>
      <p>We will respond within 5 business days.</p>

      <h2>7. Processing Times</h2>
      <p>Approved refunds processed within 10 business days.</p>
      <p>Replacement prints dispatched within standard production timeframe.</p>
    </LegalPage>
  )
}

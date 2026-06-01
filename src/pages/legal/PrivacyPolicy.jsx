import LegalPage from '../../components/LegalPage'
import siteConfig from '../../data/site-config.json'

export default function PrivacyPolicy() {
  const { business } = siteConfig
  const hasEmail = business.email && !business.email.includes('[TO BE ADDED')

  return (
    <LegalPage title="Privacy Policy" lastUpdated="1 June 2025">
      <p>
        The Full Picture (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal
        information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian
        Privacy Principles (APPs).
      </p>
      <p>
        This Privacy Policy explains how we collect, use, store, and disclose your personal
        information when you use our website and when you engage our services.
      </p>
      <p>
        By using our website or submitting an inquiry, you consent to the practices described in
        this Privacy Policy.
      </p>

      <h2>1. What Information We Collect</h2>
      <p>We collect personal information that you provide directly, including:</p>
      <ul>
        <li>Your name</li>
        <li>Your agency or company name</li>
        <li>Your email address</li>
        <li>Your phone number (if provided)</li>
        <li>Your property suburb (if provided)</li>
        <li>The content of messages sent via our contact or inquiry forms</li>
      </ul>
      <p>We do not collect sensitive information as defined under the Privacy Act 1988.</p>
      <p>
        We do not collect payment information through this website. All invoicing is handled
        separately.
      </p>

      <h2>2. How We Collect Your Information</h2>
      <p>We collect your personal information when you:</p>
      <ul>
        <li>Submit an inquiry through our contact form</li>
        <li>Submit an inquiry through our collection inquiry modal</li>
        <li>Contact us directly via email</li>
      </ul>
      <p>
        Our forms are processed through Formspree (formspree.io). Please refer to Formspree&apos;s
        privacy policy for information on how they handle form submissions.
      </p>
      <p>We do not use tracking pixels, behavioural advertising tools, or data brokers.</p>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Respond to your inquiry</li>
        <li>Prepare quotes and proposals for your listing</li>
        <li>Communicate with you about our services</li>
        <li>Deliver services you have engaged us for</li>
        <li>Send invoices and manage payment</li>
        <li>Comply with our legal obligations</li>
      </ul>
      <p>
        We do not use your personal information for unsolicited marketing without your consent. We
        do not sell, rent, or trade your personal information to any third party.
      </p>

      <h2>4. How We Store Your Information</h2>
      <p>
        Inquiries submitted through our website are transmitted to us via Formspree and received in
        our business email inbox. We store business communications in accordance with standard
        business record-keeping practices.
      </p>
      <p>
        We take reasonable steps to protect your personal information from misuse, interference,
        loss, unauthorised access, modification, and disclosure. However no method of transmission
        over the internet is completely secure.
      </p>
      <p>
        We retain your personal information for as long as necessary to fulfil the purpose for which
        it was collected, or as required by law.
      </p>

      <h2>5. Disclosure of Your Information</h2>
      <p>We may disclose your personal information to:</p>
      <ul>
        <li>
          Third party service providers who assist in delivering our services including print
          production and dispatch, where necessary to fulfil your order
        </li>
        <li>Our professional advisors where required</li>
        <li>Government agencies or law enforcement where required by law</li>
      </ul>
      <p>
        We do not disclose your personal information to overseas recipients except where Formspree
        processes form data through servers that may be located outside Australia.
      </p>

      <h2>6. Cookies</h2>
      <p>Our website does not currently use cookies for tracking or analytics purposes.</p>
      <p>
        If you access our website through Railway, that platform may set technical cookies necessary
        for operation of the service. These are not used to track or profile users.
      </p>

      <h2>7. Your Rights</h2>
      <p>Under the Australian Privacy Act 1988 you have the right to:</p>
      <ul>
        <li>Request access to personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal information subject to our legal obligations</li>
        <li>Make a complaint about how we have handled your personal information</li>
      </ul>

      <h2>8. Complaints</h2>
      <p>
        If you believe we have breached the Australian Privacy Principles you may contact us. We
        will respond within 30 days.
      </p>
      <p>
        If you are not satisfied with our response you may lodge a complaint with the Office of the
        Australian Information Commissioner (OAIC) at www.oaic.gov.au.
      </p>

      <h2>9. Contact</h2>
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

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Continued use of our website after any
        changes constitutes acceptance of the updated policy.
      </p>
    </LegalPage>
  )
}

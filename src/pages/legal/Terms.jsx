import LegalPage from '../../components/LegalPage'
import siteConfig from '../../data/site-config.json'

export default function Terms() {
  const { business } = siteConfig
  const hasEmail = business.email && !business.email.includes('[TO BE ADDED')

  return (
    <LegalPage title="Terms & Conditions" lastUpdated="1 June 2025">
      <p>
        These Terms and Conditions govern your use of The Full Picture website and the services we
        provide. By submitting an inquiry, engaging our services, or accepting a quote, you agree to
        be bound by these terms.
      </p>
      <p>The Full Picture is a sole trader business operating in Melbourne, Victoria, Australia.</p>

      <h2>1. Services</h2>
      <p>The Full Picture provides the following services:</p>
      <h3>a) Digital Staging</h3>
      <p>
        Original artwork placed digitally onto images of your property listing. You receive
        high-resolution staged images for use in your property marketing.
      </p>
      <h3>b) Virtual Tours</h3>
      <p>
        A professional virtual property tour built from room photographs and a property description
        provided by you.
      </p>
      <h3>c) Physical Prints</h3>
      <p>
        Fine art prints produced in agreed sizes and quantities. Prints are dispatched to the agent
        for personal gifting to the buyer at settlement.
      </p>
      <h3>d) Ink Originals</h3>
      <p>
        Hand-drawn ink reproductions of original compositions, rendered using fineliners and gel
        pens. Available by request and quote only. A minimum of one week&apos;s notice is required before
        commencement. Ink Originals are original artworks, not prints.
      </p>
      <h3>e) Custom Collections</h3>
      <p>
        Original art collections commissioned and built specifically for a suburb or property market,
        available by request and quote.
      </p>

      <h2>2. Quotes and Acceptance</h2>
      <p>
        All services are provided on a quoted basis. Quotes are prepared following receipt of your
        inquiry, room photographs, and property description.
      </p>
      <p>
        Acceptance of a quote — whether in writing, by email, or by instructing us to proceed —
        constitutes a binding agreement under these Terms and Conditions.
      </p>
      <p>Quotes are valid for 14 days from the date of issue unless otherwise stated.</p>

      <h2>3. What You Must Provide</h2>
      <p>To enable us to deliver services, you must provide:</p>
      <ul>
        <li>Clear photographs of each room to be staged (minimum one photograph per room)</li>
        <li>
          A written property description including suburb, style, and relevant listing details
        </li>
      </ul>
      <p>
        You warrant that you have the right to provide the photographs and that doing so does not
        infringe any third party rights.
      </p>

      <h2>4. Payment Terms</h2>
      <p>All invoices are issued on 30-day terms from the date of invoice unless otherwise agreed.</p>
      <p>No upfront payment is required.</p>
      <p>
        For Ink Originals and Custom Collections, payment terms will be specified in the quote.
      </p>
      <p>
        Interest may be charged on overdue invoices at the rate of 10% per annum calculated daily,
        commencing 30 days after the invoice date.
      </p>
      <p>
        We reserve the right to withhold delivery of physical prints or final files in the event of
        non-payment of a prior outstanding invoice.
      </p>

      <h2>5. Delivery — Digital Files</h2>
      <p>
        Digital staging files and virtual tours will be delivered electronically within the
        timeframe specified in your quote.
      </p>
      <p>
        Delivery is considered complete upon sending files to the email address provided by you.
      </p>
      <p>One round of reasonable revisions is included in the base price.</p>

      <h2>6. Delivery — Physical Prints</h2>
      <p>
        Physical prints are dispatched to the agent&apos;s nominated address following approval of the
        staged digital files and confirmation of print sizes and quantities.
      </p>
      <p>Risk in the prints passes to the agent upon dispatch.</p>
      <p>
        The agent accepts responsibility for providing a correct delivery address. We are not liable
        for non-delivery resulting from an incorrect address provided.
      </p>

      <h2>7. Ink Originals</h2>
      <p>
        A minimum of one week&apos;s notice is required prior to commencement. Due to their handmade
        nature, minor variations from the reference composition are inherent and expected.
      </p>
      <p>
        Ink Originals are non-refundable once commenced, except where required by the Australian
        Consumer Law.
      </p>

      <h2>8. Custom Collections</h2>
      <p>
        Custom collection commissions will be governed by a separate written agreement or quote.
        These Terms and Conditions apply in addition to any such agreement.
      </p>

      <h2>9. Intellectual Property</h2>
      <p>
        All artwork, compositions, digital files, and Ink Originals created by The Full Picture
        remain the intellectual property of The Full Picture unless otherwise agreed in writing.
      </p>
      <p>
        Upon full payment, you are granted a non-exclusive, non-transferable licence to use the
        digital staged images for the purpose of marketing the specific property for which they were
        created.
      </p>
      <p>
        Physical prints and Ink Originals, once paid for, may be displayed, gifted, or sold as
        physical objects. This does not transfer copyright in the underlying artwork.
      </p>
      <p>You must not:</p>
      <ul>
        <li>Reproduce digital files for commercial purposes beyond the agreed use</li>
        <li>Use artwork in marketing for any property other than the one for which it was created</li>
        <li>Modify, alter, or create derivative works without written permission</li>
        <li>Represent the artwork as your own creation</li>
        <li>Sub-licence the artwork to third parties</li>
      </ul>

      <h2>10. Warranties</h2>
      <p>We warrant that services will be provided with due care and skill.</p>
      <p>
        We do not warrant that digital staging will result in any particular sale outcome, or that
        virtual tours will be compatible with all third party real estate platforms.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        Our total liability for any claim is limited to the amount paid by you for the specific
        service giving rise to the claim.
      </p>
      <p>We are not liable for any indirect, consequential, special, or incidental loss.</p>
      <p>
        Nothing in these Terms excludes any right or remedy under the Australian Consumer Law that
        cannot lawfully be excluded.
      </p>

      <h2>12. Cancellation</h2>
      <p>You may cancel prior to commencement of work without charge.</p>
      <p>Once work has commenced:</p>
      <ul>
        <li>Digital staging and virtual tours: 50% of quoted price applies.</li>
        <li>Physical prints: not cancellable once dispatched.</li>
        <li>Ink Originals: not cancellable once commenced. Full payment is required.</li>
      </ul>

      <h2>13. Governing Law</h2>
      <p>These Terms are governed by the laws of the State of Victoria, Australia.</p>

      <h2>14. Contact</h2>
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

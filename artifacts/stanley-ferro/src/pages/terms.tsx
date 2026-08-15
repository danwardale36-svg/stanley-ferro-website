import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="flex flex-col w-full pb-24">
      <div className="bg-[#091405] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Terms &amp; Conditions
          </motion.h1>
          <p className="text-white/70 text-lg">Last updated: August 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12 max-w-3xl prose prose-lg">
        <div className="space-y-8 text-[#091405]/80 leading-relaxed">

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">1. About us</h2>
            <p>
              Stanley Ferro Developments Ltd is a limited company registered in England and Wales under company number <strong>10895434</strong>. Our registered address is 33 Park Road, Waterloo, Liverpool. You can contact us at <a href="mailto:sfdltd@outlook.com" className="text-primary hover:underline">sfdltd@outlook.com</a> or by telephone on 07791 151427 (Thomas) or 07714 873398 (Ste).
            </p>
            <p className="mt-2">
              These Terms &amp; Conditions ("Terms") govern the relationship between Stanley Ferro Developments Ltd ("we", "us", "our") and any client ("you", "your") who engages us to carry out building works or related services. By accepting our quotation or instructing us to begin work, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">2. Quotations and estimates</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>All quotations are provided free of charge and are valid for <strong>30 days</strong> from the date issued, unless otherwise stated in writing.</li>
              <li>A quotation is not a binding contract until accepted by you in writing (including by email) and confirmed by us.</li>
              <li>Where unforeseen conditions are discovered once work has commenced (e.g. structural defects, concealed services, or ground conditions), we will notify you promptly and provide a revised estimate for your approval before proceeding with any additional work.</li>
              <li>Prices quoted are exclusive of VAT unless explicitly stated otherwise. Stanley Ferro Developments Ltd is not currently VAT-registered; no VAT will be charged unless our VAT status changes, in which case you will be informed in advance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">3. Payment terms</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Payment schedules are agreed at the time of quotation and set out in the contract or order confirmation.</li>
              <li>Stage payments are typically required at agreed milestones; full details will be set out in writing before work begins.</li>
              <li>Invoices are due for payment within <strong>14 days</strong> of the invoice date unless otherwise agreed in writing.</li>
              <li>We reserve the right to charge statutory interest on overdue invoices at 8% above the Bank of England base rate per annum under the Late Payment of Commercial Debts (Interest) Act 1998.</li>
              <li>We reserve the right to suspend work if payments are not received in accordance with the agreed schedule.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">4. Your responsibilities</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You are responsible for ensuring that all necessary planning permissions, building regulations approvals and any other statutory consents are in place before work begins, unless we have expressly agreed in writing to manage these on your behalf.</li>
              <li>You must ensure that the site is accessible, safe and free from hazards that would prevent us from working. Any delays caused by restricted access may result in additional costs.</li>
              <li>You must notify us promptly of any concerns or changes to the agreed scope of work.</li>
              <li>Where works are carried out at an occupied property, you are responsible for the safety of all occupants and for ensuring they remain clear of the working area.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">5. Variations and changes to scope</h2>
            <p>
              Any changes to the agreed scope of work must be agreed in writing before additional work is carried out. We will provide a written variation order setting out the additional cost and any impact on the programme. Verbal instructions to proceed with variations are accepted at your own risk and may not be enforceable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">6. Timescales and programme</h2>
            <p>
              Any dates or timescales we provide are estimates only and are not of the essence unless expressly agreed in writing. Delays caused by adverse weather, late delivery of materials, client-instructed changes, or other matters beyond our reasonable control do not constitute a breach of contract and may entitle us to an extension of time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">7. Materials and workmanship</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>We will use materials of suitable quality for the works described. Where specific materials or finishes are required, these must be specified at the time of quotation.</li>
              <li>All work will be carried out by competent tradespeople in a workmanlike manner and in accordance with applicable building regulations and British Standards.</li>
              <li>Where materials are supplied by you, we accept no liability for defects arising from those materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">8. Defects and aftercare</h2>
            <p>
              We operate a <strong>12-month defects liability period</strong> from the date of practical completion. During this period we will return to rectify any defects caused by faulty workmanship or materials at no additional cost to you, provided you notify us in writing within the period.
            </p>
            <p className="mt-2">
              This does not affect your statutory rights. The defects liability period does not cover fair wear and tear, damage caused by third parties, or issues arising from your failure to maintain the works in accordance with any reasonable instructions we provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">9. Insurance</h2>
            <p>
              We maintain appropriate public liability insurance for the duration of works. Details of our insurance cover are available on request. You are advised to notify your buildings insurer that building works are being carried out at your property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">10. Limitation of liability</h2>
            <p>
              Our total liability to you arising out of or in connection with any contract (whether in contract, tort, or otherwise) shall not exceed the total value of the contract price paid by you for the works giving rise to the claim.
            </p>
            <p className="mt-2">
              We are not liable for any indirect or consequential loss, loss of profit, loss of use, or loss of enjoyment, however caused. Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">11. Termination</h2>
            <p>
              Either party may terminate the contract by giving written notice if the other party commits a material breach and fails to remedy it within <strong>14 days</strong> of written notice to do so.
            </p>
            <p className="mt-2">
              If you terminate the contract for reasons other than our material breach, you remain liable for all work completed to date, materials ordered or on site, and any reasonable loss of profit on the uncompleted portion of the works.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">12. Dispute resolution</h2>
            <p>
              In the event of a dispute, both parties agree to attempt to resolve the matter informally in the first instance by contacting us at <a href="mailto:sfdltd@outlook.com" className="text-primary hover:underline">sfdltd@outlook.com</a>. If the matter cannot be resolved informally, either party may refer the dispute to an independent adjudicator or mediator before commencing legal proceedings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">13. Governing law</h2>
            <p>
              These Terms and any contract formed under them are governed by the laws of England and Wales. Any disputes that cannot be resolved informally shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">14. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. The version in force at the time your contract is entered into will apply to that contract. Updated Terms will be published on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">15. Contact us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none mt-3 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:sfdltd@outlook.com" className="text-primary hover:underline">sfdltd@outlook.com</a></li>
              <li><strong>Phone:</strong> Thomas — 07791 151427 &nbsp;|&nbsp; Ste — 07714 873398</li>
              <li><strong>Address:</strong> 33 Park Road, Waterloo, Liverpool</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

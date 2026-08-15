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

      <div className="container mx-auto px-4 md:px-6 mt-12 max-w-3xl">
        <div className="space-y-8 text-[#091405]/80 leading-relaxed">

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">1. About us</h2>
            <p>
              Stanley Ferro Developments Ltd is a limited company registered in England and Wales under company number <strong>10895434</strong>. Our registered address is 33 Park Road, Waterloo, Liverpool. You can contact us at <a href="mailto:sfdltd@outlook.com" className="text-primary hover:underline">sfdltd@outlook.com</a> or by telephone on 07791 151427 (Thomas) or 07714 873398 (Ste).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">2. Use of this website</h2>
            <p>
              By accessing and using <strong>stanleyferrodevelopments.co.uk</strong> you agree to these Terms &amp; Conditions. If you do not agree, please do not use the site. We reserve the right to update these terms at any time; continued use of the site after changes are posted constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">3. Quotations and estimates</h2>
            <p>
              Any quotation provided by Stanley Ferro Developments Ltd — whether by phone, email or through our contact form — is an estimate only and not a binding contract. A formal written quotation will be provided before any work commences. Quotations are valid for 30 days from the date of issue unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">4. Our work</h2>
            <p>
              We aim to complete all work to a high standard, in accordance with any agreed specification and within the agreed timescale. Timescales may be affected by factors outside our control, including adverse weather, material delays or unforeseen structural issues. We will keep you informed of any changes to the agreed programme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">5. Payment</h2>
            <p>
              Payment terms will be set out in your written quotation or contract. Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>A deposit may be required before work commences</li>
              <li>Stage payments may be requested at agreed milestones</li>
              <li>The final balance is due on practical completion of the works</li>
            </ul>
            <p className="mt-3">
              Invoices not paid within the agreed terms may be subject to interest under the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">6. Your responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide accurate information about your property and requirements</li>
              <li>Ensure we have safe and reasonable access to carry out the works</li>
              <li>Obtain any necessary planning permissions or building regulations approvals prior to work commencing, unless we have agreed in writing to handle this on your behalf</li>
              <li>Notify us promptly of any concerns during the works</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">7. Liability</h2>
            <p>
              Stanley Ferro Developments Ltd carries public liability insurance. We will rectify any defects in our workmanship that arise within a reasonable period after completion, provided you notify us promptly. We are not liable for any loss or damage arising from your failure to maintain work carried out by us, or from defects caused by third parties.
            </p>
            <p className="mt-3">
              Our total liability to you in connection with any contract shall not exceed the value of that contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">8. Intellectual property</h2>
            <p>
              All content on this website — including text, images, logos and design — is owned by Stanley Ferro Developments Ltd or our licensors. You may not copy, reproduce or distribute any content from this site without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">9. Governing law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">10. Contact</h2>
            <p>If you have any questions about these terms, please contact us:</p>
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

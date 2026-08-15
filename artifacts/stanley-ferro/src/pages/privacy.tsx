import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="flex flex-col w-full pb-24">
      <div className="bg-[#091405] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-white/70 text-lg">Last updated: August 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12 max-w-3xl prose prose-lg">
        <div className="space-y-8 text-[#091405]/80 leading-relaxed">

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Who we are</h2>
            <p>
              Stanley Ferro Developments Ltd is a limited company registered in England and Wales under company number <strong>10895434</strong>. Our registered address is 33 Park Road, Waterloo, Liverpool. We can be contacted at <a href="mailto:sfdltd@outlook.com" className="text-primary hover:underline">sfdltd@outlook.com</a>.
            </p>
            <p className="mt-2">
              This policy explains how we collect, use and protect any personal information you provide when using our website at <strong>stanleyferrodevelopments.co.uk</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">What information we collect</h2>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your name, email address and phone number when you submit an enquiry through our contact form</li>
              <li>Details about your project or property that you choose to share with us</li>
              <li>Basic usage data about how you interact with our website (see Cookies section below)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">How we use your information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your enquiry and provide a quotation</li>
              <li>Communicate with you about your project before, during and after completion</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">
              We will never sell, rent or share your personal information with third parties for marketing purposes. Your details are used solely to carry out the services you have requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Legal basis for processing</h2>
            <p>
              We process your personal data on the basis of <strong>legitimate interests</strong> — specifically, to respond to your enquiries and provide building services — and, where applicable, <strong>contract performance</strong> when we are engaged to carry out work for you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">How long we keep your data</h2>
            <p>
              We retain enquiry data for up to <strong>2 years</strong> after our last contact. If you become a customer, we may retain project-related records for up to <strong>7 years</strong> for accounting and legal purposes, in line with HMRC requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong>Rectification</strong> — ask us to correct inaccurate data</li>
              <li><strong>Erasure</strong> — ask us to delete your data where there is no legitimate reason to keep it</li>
              <li><strong>Objection</strong> — object to us processing your data</li>
              <li><strong>Portability</strong> — request your data in a portable format</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at <a href="mailto:sfdltd@outlook.com" className="text-primary hover:underline">sfdltd@outlook.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with the <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Information Commissioner's Office (ICO)</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Third-party services</h2>
            <p>
              Our contact form uses <strong>Web3Forms</strong> to deliver your enquiry to our email inbox. Web3Forms processes the data you submit only to deliver it to us and does not store or use it for any other purpose. You can view their privacy policy at <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">web3forms.com/privacy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Cookies</h2>
            <p>
              Our website does not use tracking or advertising cookies. We do not use Google Analytics or any other analytics platform. The site uses only essential browser storage required for it to function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss or disclosure. Our website is served over HTTPS and enquiry data is transmitted securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date at the top.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-[#091405] mb-3">Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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

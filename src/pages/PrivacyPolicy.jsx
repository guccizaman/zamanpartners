import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Globe, Cookie, Link as LinkIcon, Users } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zaman Partners - Data Protection & Confidentiality</title>
        <meta name="description" content="Zaman Partners' privacy policy outlining how we collect, use, and protect your personal and business information." />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Privacy and data protection"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Zaman <span className="text-[#d4af37]">Partners</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-lg text-gray-600 mb-8">
                <strong>Effective Date:</strong> December 1, 2025
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Zaman Partners ("Zaman Partners," "we," "our," or "us"), confidentiality, discretion, and the protection of personal and corporate information are fundamental to our advisory work. This Privacy Policy explains what information we collect, how we use it, how we protect it, and the rights individuals have regarding their data. By using our website or engaging with us, you consent to the practices described in this Policy.
              </p>
            </motion.div>

            {/* Entity Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Entity Overview and Scope</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Zaman Partners provides advisory services to business owners, investors, and corporate clients. Our privacy practices are designed to comply with applicable regulations, including Canadian privacy laws (PIPEDA), as well as GDPR and CCPA where applicable.
              </p>
            </motion.div>

            {/* Types of Data Collected */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Types of Data Collected</h2>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Personally Identifiable Information (PII)</h3>
                  <p className="text-gray-700 mb-4">We may collect:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name, email address, phone number</li>
                    <li>• Company name and title</li>
                    <li>• Location and device information</li>
                    <li>• IP address and browser details</li>
                    <li>• Information submitted through contact forms or emails</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Financial and Corporate Data</h3>
                  <p className="text-gray-700 mb-4">During engagements, we may collect:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Financial statements and performance metrics</li>
                    <li>• Revenue, EBITDA/SDE figures</li>
                    <li>• Ownership and capitalization details</li>
                    <li>• Strategic plans, forecasts, and confidential materials</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Automatically Collected Data</h3>
                  <p className="text-gray-700 mb-4">We may use cookies and analytics tools to collect:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Browser type and device information</li>
                    <li>• Access times and pages viewed</li>
                    <li>• Interaction and navigation patterns</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Purposes for Data Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Purposes for Data Collection</h2>
              </div>
              <p className="text-gray-700 mb-4">We collect and process information for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Evaluating potential engagements</li>
                <li>• Performing due diligence</li>
                <li>• Providing financial and strategic advisory work</li>
                <li>• Regulatory compliance</li>
                <li>• Website optimization and analytics</li>
                <li>• Marketing communications (with opt-out options)</li>
              </ul>
            </motion.div>

            {/* Legal Basis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Legal Basis for Processing (where applicable)</h2>
              <p className="text-gray-700 mb-4">Our legal basis may include:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Consent</li>
                <li>• Performance of a contract</li>
                <li>• Compliance with legal obligations</li>
                <li>• Legitimate business interests</li>
              </ul>
            </motion.div>

            {/* Information Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Information Sharing and Disclosure</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Internal Use</h3>
                  <p className="text-gray-700">Data is accessible only to personnel who require it for business purposes.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Third-Party Service Providers</h3>
                  <p className="text-gray-700">We may use trusted vendors for hosting, analytics, cybersecurity, and compliance support. All third parties are required to maintain confidentiality.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Legal and Regulatory Requirements</h3>
                  <p className="text-gray-700 mb-2">We may disclose information when required to:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Comply with laws, regulations, or court orders</li>
                    <li>• Respond to regulatory requests</li>
                    <li>• Protect our legal rights and operational integrity</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">International Data Transfers</h3>
                  <p className="text-gray-700">Where data is transferred outside your jurisdiction, appropriate safeguards such as Standard Contractual Clauses or equivalent protections are applied.</p>
                </div>
              </div>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Data Retention</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We retain information only as long as necessary for the purposes described in this Policy or as required by law. Information that is no longer needed is securely deleted or anonymized.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Data Security Measures</h2>
              </div>
              <p className="text-gray-700 mb-4">We maintain strong security practices, including:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Encrypted data transmission</li>
                <li>• Access controls and permission limitations</li>
                <li>• Intrusion detection systems</li>
                <li>• Regular audits and security reviews</li>
                <li>• Data minimization practices</li>
              </ul>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Access your information</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion (where allowed)</li>
                <li>• Restrict or object to processing</li>
                <li>• Withdraw consent</li>
                <li>• File a complaint with a privacy authority</li>
              </ul>
              <p className="text-gray-700">
                To exercise your rights, contact us at: <a href="mailto:qzaman@eztax.ca" className="text-[#1e3a5f] hover:underline font-semibold">qzaman@eztax.ca</a>
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Cookies and Tracking Technologies</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our website uses cookies for functionality and analytics. Cookies may be disabled through your browser settings, although some features may not function properly if disabled.
              </p>
            </motion.div>

            {/* External Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <LinkIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">External Links</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our website may include links to third-party websites. We are not responsible for their content or privacy practices and recommend reviewing their privacy policies.
              </p>
            </motion.div>

            {/* Children's Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Children's Data</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our services are intended for individuals over 18. We do not knowingly collect data from minors. If you believe a minor's information was collected, contact us immediately.
              </p>
            </motion.div>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Updates to This Policy</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted with an updated Effective Date. Significant changes may be communicated directly when required by law.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1e3a5f] text-white rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-3 text-lg">
                <p className="font-semibold">Zaman Partners</p>
                <p>1325 Eglinton Ave E, Suite 224</p>
                <p>Mississauga, Ontario</p>
                <p>Canada</p>
                <p className="mt-4">
                  <strong>Email:</strong> <a href="mailto:qzaman@eztax.ca" className="text-[#d4af37] hover:underline">qzaman@eztax.ca</a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;

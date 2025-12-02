import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Shield, DollarSign, Ban, Settings, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Zaman Partners - Legal Terms & Conditions</title>
        <meta name="description" content="Terms and conditions for using Zaman Partners' advisory services and website." />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Terms of Service and legal documents"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
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
                Terms of Service
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Zaman Partners
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

            {/* Our Services */}
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
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Our Services</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Acceptance of Terms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms and Conditions ("Terms") govern your use of the advisory, consulting, and related services ("Services") provided by Zaman Partners ("Company," "we," "our," or "us"). By accessing or using our Services, website, or any affiliated platforms, you agree to comply with and be bound by these Terms.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Service Scope</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zaman Partners grants clients access to strategic advisory services strictly for lawful and authorized business purposes. All services are subject to the limitations and conditions outlined in these Terms and any engagement agreements we may enter into.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Updates and Modifications</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may update or modify our Services as needed to improve quality, ensure compliance, or reflect operational changes. We reserve the right to modify, suspend, or discontinue any part of the Services at any time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Property Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Property Rights</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Ownership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    All content, materials, documents, and resources provided by Zaman Partners—including reports, analyses, templates, website content, and communications—are protected by copyright and intellectual property laws. You may not reproduce, distribute, or modify any content without our explicit written permission.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Pricing</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Pricing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pricing for Services is subject to change without notice. Any changes will not affect existing signed engagement agreements unless otherwise stated.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Payment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    All payments are processed securely through our designated billing system. You agree to provide accurate and complete payment information and authorize us to charge your chosen payment method for Services rendered.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Prohibited Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Ban className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Prohibited Activities</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Unauthorized Use</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    You may not use our Services for any unlawful, harmful, fraudulent, or prohibited purpose, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Violating applicable laws or regulations</li>
                    <li>• Engaging in fraud or misrepresentation</li>
                    <li>• Attempting unauthorized access to our systems</li>
                    <li>• Distributing harmful software or conducting cyberattacks</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Reverse Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may not attempt to reverse engineer, extract, or replicate any proprietary methodology, tools, or systems used by Zaman Partners.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Services Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Services Management</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We provide client support as outlined in our engagement agreements. Support inquiries must be submitted through our designated communication channels.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Termination</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to suspend or terminate access to our Services—without prior notice—if you violate these Terms or engage in behavior that harms our operations, reputation, clients, or systems.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Changes to Terms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zaman Partners may update these Terms at any time. You are responsible for reviewing them periodically. Continued use of our Services after changes are posted constitutes acceptance of the revised Terms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1e3a5f] text-white rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#d4af37] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h2 className="text-3xl font-bold">Contact Information</h2>
              </div>
              <p className="text-lg text-gray-200 mb-6">
                If you have any questions or concerns about these Terms and Conditions, please contact:
              </p>
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

            {/* Agreement Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gray-50 rounded-lg p-8 text-center"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                By using our Services, you agree to abide by these Terms and Conditions and our <a href="/privacy-policy" className="text-[#1e3a5f] hover:underline font-semibold">Privacy Policy</a>, which is incorporated by reference.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfService;


import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, ExternalLink, FileText, TrendingUp, RefreshCw, Mail } from 'lucide-react';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Zaman Partners - Legal Disclaimers & Limitations</title>
        <meta name="description" content="Zaman Partners' disclaimer outlining limitations of liability and general information about our services." />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Legal disclaimer and terms"
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
                Disclaimer
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

            {/* General Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">General Information</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The information provided by Zaman Partners ("Zaman Partners," "we," "our," or "us") through our website, reports, presentations, communications, or any other materials is intended for general informational purposes. While we make every effort to ensure accuracy and reliability, information may not always reflect the most current developments.
              </p>
            </motion.div>

            {/* No Guarantees or Assurances */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">No Guarantees or Assurances</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Business, financial, and strategic environments involve uncertainty. Zaman Partners does not make guarantees or assurances regarding:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Transaction outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Valuations or price ranges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Investor interest or responses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Market performance or conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Completion of any potential deal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Accuracy of third-party data relied upon during research</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                All projections, estimates, and forward-looking statements are subject to change based on market, economic, or operational factors.
              </p>
            </motion.div>

            {/* Limitation of Liability */}
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
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To the maximum extent permitted by applicable law, Zaman Partners and its personnel shall not be held responsible for any:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Damages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Business disruptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Lost opportunities or profits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Costs or expenses</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                arising from the use, interpretation, or reliance on our website, materials, or communications.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed font-semibold">
                Your use of any information from Zaman Partners is undertaken at your own discretion.
              </p>
            </motion.div>

            {/* Third-Party Sources and Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Third-Party Sources and Links</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our website or materials may reference external websites, data, or service providers. Zaman Partners is not responsible for:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>The accuracy of external content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Privacy or operational practices of third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Any outcomes resulting from reliance on third-party material</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Links or references to external resources do not imply endorsement.
              </p>
            </motion.div>

            {/* No Automatic Client Relationship */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-white border border-gray-200 rounded-lg p-6"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">No Automatic Client Relationship</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Engaging with our website, reviewing our materials, or communicating with our team does not establish a client relationship. A formal relationship is created only when both parties sign a written engagement agreement.
              </p>
            </motion.div>

            {/* Forward-Looking Statements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Forward-Looking Statements</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Certain statements, forecasts, or projections provided by Zaman Partners may be forward-looking in nature. These statements are inherently uncertain and subject to risks and variables. Actual results may differ significantly.
              </p>
            </motion.div>

            {/* Updates to This Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Updates to This Disclaimer</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Zaman Partners may revise or update this Disclaimer at any time without prior notice. Continued use of our website or Services constitutes acceptance of the updated terms.
              </p>
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
                For questions about this Disclaimer, please contact:
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Disclaimer;


import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Eye, Ban, Users, Clock, Mail } from 'lucide-react';

const Confidentiality = () => {
  return (
    <>
      <Helmet>
        <title>Confidentiality Statement | Zaman Partners - Data Protection & Privacy</title>
        <meta name="description" content="Zaman Partners' confidentiality statement outlining how we protect and safeguard client information." />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Confidentiality and data protection"
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
                Confidentiality Statement
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

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Zaman Partners ("Zaman Partners," "we," "our," or "us"), confidentiality is fundamental to the advisory services we provide. We handle sensitive financial, strategic, and personal information, and we are committed to safeguarding all data shared with us—whether during initial discussions, formal engagements, or ongoing client relationships.
              </p>
            </motion.div>

            {/* Scope */}
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
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Scope</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                This Confidentiality Statement applies to all information received from clients, prospective clients, counterparties, investors, service providers, and any other individuals or organizations who engage with Zaman Partners. This includes both verbal and written information shared through meetings, electronic communication, documents, and online platforms.
              </p>
            </motion.div>

            {/* Definition of Confidential Information */}
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
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Definition of Confidential Information</h2>
              </div>
              <p className="text-gray-700 mb-4">"Confidential Information" includes, but is not limited to:</p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Business plans, strategies, and internal documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Financial statements, forecasts, SDE/EBITDA metrics, and performance data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Ownership information and capitalization details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Transaction-related materials and deal discussions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Personal and corporate identifying information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Proprietary models, analyses, and methodologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Any material marked "confidential" or reasonably understood to be confidential</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Obligations */}
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
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Obligations of Zaman Partners</h2>
              </div>
              <p className="text-gray-700 mb-4">Zaman Partners agrees to:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Protect all Confidential Information with strict discretion and care</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Use Confidential Information solely for the purpose of providing advisory or related professional services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Restrict access to Confidential Information to personnel who require it to perform their duties</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Prevent unauthorized disclosure, duplication, or distribution of Confidential Information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Maintain industry-standard security practices to protect stored and transmitted information</span>
                </li>
              </ul>
            </motion.div>

            {/* Exceptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Ban className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Exceptions</h2>
              </div>
              <p className="text-gray-700 mb-4">Confidential Information does not include information that:</p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Is or becomes public through no breach by Zaman Partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Is independently developed by Zaman Partners without reference to the client's information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Is received legally from a third party without confidentiality obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Must be disclosed under law, regulation, subpoena, or court order (in which case we will notify the client unless legally prohibited)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Permitted Disclosures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Permitted Disclosures</h2>
              <p className="text-gray-700 mb-4">We may disclose Confidential Information only when necessary to:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Fulfill advisory, analytical, or transactional duties under an engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Collaborate with trusted third-party professionals (e.g., legal counsel, accountants, industry experts) who are bound by confidentiality obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#1e3a5f]/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  </div>
                  <span>Comply with legal, regulatory, or compliance-related obligations</span>
                </li>
              </ul>
            </motion.div>

            {/* Protection Measures */}
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
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Protection Measures</h2>
              </div>
              <p className="text-gray-700 mb-4">To safeguard Confidential Information, we maintain:</p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Secure digital systems and encrypted communications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Role-based access controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Rigorous internal policies and professional conduct standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span>Secure document management and disposal procedures</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Client Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Client Responsibilities</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Clients agree not to disclose any proprietary materials, methods, analyses, reports, or intellectual property belonging to Zaman Partners without written authorization. All deliverables remain subject to copyright and usage limitations.
              </p>
            </motion.div>

            {/* No Publicity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-white border border-gray-200 rounded-lg p-6"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">No Publicity</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Zaman Partners will not publicly reference any client, transaction, engagement, or negotiation without explicit prior written consent unless required by law.
              </p>
            </motion.div>

            {/* Duration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a5f]">Duration</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Confidentiality obligations continue indefinitely, including after the conclusion of any advisory engagement or business relationship.
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
                If you have questions about confidentiality or how your information is protected, please contact:
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

export default Confidentiality;


import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, FileText, Users, DollarSign, FileCheck, HeartHandshake as Handshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      icon: Search,
      title: 'Initial Consultation & Assessment',
      description: 'We begin with a confidential meeting to understand your objectives, evaluate your business, and develop a customized engagement strategy.',
      details: [
        'Confidential business assessment',
        'Goals and timeline discussion',
        'Preliminary valuation range',
        'Engagement letter preparation'
      ]
    },
    {
      number: '02',
      icon: FileText,
      title: 'Preparation & Positioning',
      description: 'We prepare comprehensive marketing materials and position your business to attract qualified buyers or identify optimal acquisition targets.',
      details: [
        'Confidential Information Memorandum (CIM)',
        'Financial package preparation',
        'Strategic positioning analysis',
        'Marketing strategy development'
      ]
    },
    {
      number: '03',
      icon: Users,
      title: 'Market Outreach & Qualification',
      description: 'We conduct targeted outreach to pre-qualified buyers or sellers, ensuring confidentiality while maximizing market exposure.',
      details: [
        'Confidential buyer/seller identification',
        'Non-disclosure agreement execution',
        'Initial interest solicitation',
        'Qualification and screening'
      ]
    },
    {
      number: '04',
      icon: DollarSign,
      title: 'Negotiation & Letter of Intent',
      description: 'We negotiate on your behalf to secure optimal terms and conditions, culminating in a comprehensive Letter of Intent.',
      details: [
        'Bid process management',
        'Term sheet negotiation',
        'Deal structure optimization',
        'LOI execution'
      ]
    },
    {
      number: '05',
      icon: FileCheck,
      title: 'Due Diligence & Documentation',
      description: 'We manage the due diligence process and coordinate legal documentation to ensure a thorough and efficient transaction.',
      details: [
        'Due diligence coordination',
        'Virtual data room management',
        'Legal document review',
        'Issue resolution and management'
      ]
    },
    {
      number: '06',
      icon: Handshake,
      title: 'Closing & Transition',
      description: 'We facilitate the final closing and support transition activities to ensure a successful transaction completion.',
      details: [
        'Final document execution',
        'Closing coordination',
        'Fund transfer oversight',
        'Post-closing transition support'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our M&A Process | Strategic M&A - Step-by-Step Transaction Guide</title>
        <meta name="description" content="Discover Strategic M&A's proven six-step process for successful mergers and acquisitions. From initial consultation to closing and transition support." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Strategic business process workflow"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Proven Process
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                A systematic approach to achieving exceptional M&A outcomes
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                Six Steps to Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive methodology ensures thorough preparation, strategic execution, and optimal results
              </p>
            </motion.div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                      <div className="text-6xl font-bold text-[#d4af37]/20 mb-4">
                        {step.number}
                      </div>
                      <div className="bg-[#1e3a5f] p-4 rounded-lg">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="lg:col-span-10">
                      <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="bg-[#d4af37] rounded-full p-1 mt-1">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-[4.5rem] top-32 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                  Timeline & Expectations
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A typical M&A transaction takes 6-12 months from initial engagement to closing, though timelines vary based on transaction complexity, market conditions, and specific circumstances.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Throughout the process, we maintain transparent communication, provide regular updates, and manage expectations to ensure you're informed at every critical milestone.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <FileCheck className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Preparation Phase</div>
                      <p className="text-gray-600">4-8 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Marketing & Negotiation</div>
                      <p className="text-gray-600">8-16 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <Handshake className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Due Diligence & Closing</div>
                      <p className="text-gray-600">8-12 weeks</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  alt="Project timeline and milestone tracking"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                 src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1e3a5f] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Our Process Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Decades of experience refined into a proven methodology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Systematic Approach</h3>
                <p className="text-gray-300">
                  Our structured process eliminates uncertainty and ensures nothing is overlooked, from initial planning through successful closing.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Customized Solutions</h3>
                <p className="text-gray-300">
                  While our framework is proven, every engagement is tailored to your specific situation, goals, and timeline requirements.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Expert Guidance</h3>
                <p className="text-gray-300">
                  Our experienced team provides strategic counsel at every step, ensuring optimal outcomes and smooth transaction execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
                Ready to Begin?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Schedule a confidential consultation to discuss your objectives and learn how our proven process can help you achieve them.
              </p>
              <Link to="/contact">
                <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white text-lg px-10 py-6 font-semibold">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Process;
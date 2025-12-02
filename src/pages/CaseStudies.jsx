import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: TrendingUp,
      industry: 'Manufacturing',
      title: 'Precision Machining Company Exit',
      dealValue: '$75M',
      challenge: 'Family-owned precision machining business with 50+ years of operations sought to exit while ensuring employee retention and business continuity.',
      solution: 'Identified strategic buyer seeking to expand capabilities and geographic reach. Structured deal with earn-outs tied to performance and employee retention.',
      outcome: [
        'Sale price 35% above initial expectations',
        'All employees retained post-transaction',
        'Smooth 6-month transition period',
        'Family legacy preserved'
      ],
      metrics: {
        premium: '35%',
        timeline: '9 months',
        bidders: '12'
      }
    },
    {
      icon: Users,
      industry: 'Technology Services',
      title: 'Managed IT Services Provider Acquisition',
      dealValue: '$42M',
      challenge: 'MSP seeking strategic acquisition to expand service offerings and enter new markets while maintaining client relationships.',
      solution: 'Conducted comprehensive market analysis, identified optimal targets, negotiated favorable terms with emphasis on client retention and service continuity.',
      outcome: [
        'Successfully acquired complementary MSP',
        '98% client retention rate',
        'Expanded service portfolio',
        'Immediate market presence in 3 new regions'
      ],
      metrics: {
        synergies: '$8M',
        timeline: '7 months',
        integration: '90 days'
      }
    },
    {
      icon: Award,
      industry: 'Distribution',
      title: 'Building Materials Distributor Succession',
      dealValue: '$28M',
      challenge: 'Second-generation owner sought to transition ownership to management team while preserving supplier relationships and market position.',
      solution: 'Structured management buyout with partial seller financing, facilitated by strategic investor providing growth capital.',
      outcome: [
        'Successful ownership transition',
        'Management team ownership stake secured',
        'Growth capital for expansion',
        'Founder transition complete'
      ],
      metrics: {
        ownership: '80%',
        financing: '60/40',
        timeline: '11 months'
      }
    },
    {
      icon: DollarSign,
      industry: 'Professional Services',
      title: 'Engineering Firm Strategic Merger',
      dealValue: '$35M',
      challenge: 'Mid-sized engineering firm sought merger partner to enhance service capabilities and compete for larger projects.',
      solution: 'Identified complementary firm with similar culture and values. Structured merger of equals with shared governance and integrated operations.',
      outcome: [
        'Combined revenue exceeded $50M',
        'Expanded service capabilities',
        'Qualified for Fortune 500 clients',
        'Cultural integration successful'
      ],
      metrics: {
        revenue: '$50M+',
        synergies: '$12M',
        timeline: '10 months'
      }
    },
    {
      icon: TrendingUp,
      industry: 'Logistics',
      title: 'Regional Trucking Company Exit',
      dealValue: '$52M',
      challenge: 'Regional LTL carrier with aging fleet sought strategic exit while ensuring driver employment and service continuity.',
      solution: 'Positioned company to attract national carriers seeking regional expansion. Negotiated terms protecting driver wages and benefits.',
      outcome: [
        'Premium valuation achieved',
        'All drivers retained',
        'Fleet modernization plan implemented',
        'Service levels maintained'
      ],
      metrics: {
        premium: '28%',
        drivers: '100%',
        timeline: '8 months'
      }
    },
    {
      icon: Users,
      industry: 'Retail',
      title: 'Specialty Retail Chain Acquisition',
      dealValue: '$45M',
      challenge: 'PE-backed buyer sought to acquire and consolidate specialty retail locations across multiple markets.',
      solution: 'Managed competitive bidding process, negotiated favorable lease assignments, structured transaction to preserve brand equity.',
      outcome: [
        'Successful acquisition of 15 locations',
        'Lease assignments secured',
        'Brand equity preserved',
        'Integration completed on schedule'
      ],
      metrics: {
        locations: '15',
        timeline: '6 months',
        retention: '92%'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Strategic M&A - Successful Transaction Examples</title>
        <meta name="description" content="Explore Strategic M&A's successful transaction case studies across manufacturing, technology, distribution, and professional services industries." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Success stories and business achievements"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1604398094327-cb34d258d473" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Real transactions, exceptional outcomes, proven results
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
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Anonymized case studies demonstrating our expertise and commitment to exceptional outcomes
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#d4af37] p-3 rounded-lg">
                          <study.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-[#d4af37] text-sm font-semibold">{study.industry}</div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                        <div className="text-xs text-gray-300 mb-1">Deal Value</div>
                        <div className="text-2xl font-bold text-[#d4af37]">{study.dealValue}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-[#1e3a5f] mb-3">Challenge</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1e3a5f] mb-3">Solution</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1e3a5f] mb-3">Key Metrics</h4>
                        <div className="space-y-2">
                          {Object.entries(study.metrics).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-gray-600 capitalize">{key}:</span>
                              <span className="font-bold text-[#d4af37]">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-bold text-[#1e3a5f] mb-4">Outcomes Achieved</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {study.outcome.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                              <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
                Transaction Statistics
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Our track record speaks for itself
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">200+</div>
                  <p className="text-gray-600">Deals Closed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">$5B+</div>
                  <p className="text-gray-600">Transaction Value</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">98%</div>
                  <p className="text-gray-600">Success Rate</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">30%</div>
                  <p className="text-gray-600">Avg. Premium</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-[#1e3a5f] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Confidentiality Guaranteed
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                All case studies presented here are anonymized to protect client confidentiality. Specific details, names, and identifying information have been modified while preserving the essential facts and outcomes of each transaction.
              </p>
              <p className="text-lg text-gray-400">
                We maintain the highest standards of discretion and confidentiality in all our engagements.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;

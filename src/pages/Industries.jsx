import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Factory, Wrench, Package, Truck, Laptop, ShoppingBag, Briefcase } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'From precision machining to consumer goods production, we understand the unique challenges and opportunities in manufacturing.',
      expertise: [
        'Industrial equipment & machinery',
        'Precision manufacturing',
        'Contract manufacturing',
        'Consumer goods production',
        'Automotive suppliers',
        'Aerospace components'
      ]
    },
    {
      icon: Wrench,
      title: 'Trades & Construction',
      description: 'Deep expertise in skilled trades businesses including HVAC, plumbing, electrical, and general contracting.',
      expertise: [
        'HVAC contractors',
        'Plumbing services',
        'Electrical contractors',
        'General construction',
        'Specialty trades',
        'Building materials suppliers'
      ]
    },
    {
      icon: Package,
      title: 'Distribution',
      description: 'Experience with wholesale distribution businesses across diverse product categories and market segments.',
      expertise: [
        'Wholesale distribution',
        'Industrial supplies',
        'Building materials',
        'Food & beverage distribution',
        'Medical supplies',
        'Specialty products'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics & Transportation',
      description: 'Comprehensive knowledge of logistics operations, freight forwarding, and transportation services.',
      expertise: [
        'Freight brokerage',
        'Trucking & fleet operations',
        'Warehousing & fulfillment',
        'Third-party logistics (3PL)',
        'Last-mile delivery',
        'Supply chain services'
      ]
    },
    {
      icon: Laptop,
      title: 'Technology & Software',
      description: 'Track record in software, SaaS, IT services, and technology-enabled business transactions.',
      expertise: [
        'Software & SaaS companies',
        'IT consulting & services',
        'Managed service providers',
        'Cybersecurity firms',
        'Digital agencies',
        'Technology infrastructure'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-Commerce',
      description: 'Experience with brick-and-mortar retail, e-commerce, and omnichannel retail operations.',
      expertise: [
        'Specialty retail stores',
        'E-commerce businesses',
        'Franchises',
        'Multi-location retail',
        'Consumer brands',
        'Direct-to-consumer (DTC)'
      ]
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Expertise in professional service firms including consulting, accounting, legal, and specialized services.',
      expertise: [
        'Business consulting',
        'Accounting & tax services',
        'Engineering firms',
        'Marketing agencies',
        'Staffing & recruiting',
        'Healthcare services'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Strategic M&A - Expert M&A Advisory Across Sectors</title>
        <meta name="description" content="Strategic M&A serves manufacturing, trades, distribution, logistics, technology, retail, and professional services industries with specialized expertise." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Diverse business industries and sectors"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1574929583457-b8c64fe82b60" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Deep industry expertise across diverse sectors and business models
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
                Sector-Specific Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team brings specialized knowledge and proven experience across key industry verticals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#1e3a5f] p-4 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{industry.title}</h3>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="font-semibold text-[#1e3a5f] mb-4">Areas of Expertise:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {industry.expertise.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                            <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                          </div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
                  Industry-Specific Market Intelligence
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our deep industry knowledge enables us to provide strategic insights, identify optimal buyers or targets, and negotiate from a position of strength.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We maintain extensive networks within each industry vertical, including strategic buyers, financial sponsors, and key market participants.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <Factory className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Market Dynamics</div>
                      <p className="text-gray-600">Understanding of industry trends, drivers, and challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Valuation Expertise</div>
                      <p className="text-gray-600">Industry-specific valuation methodologies and benchmarks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <Truck className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Buyer Networks</div>
                      <p className="text-gray-600">Established relationships with strategic and financial buyers</p>
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
                  alt="Industry market analysis and intelligence"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                 src="https://images.unsplash.com/photo-1620266757065-5814239881fd" />
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
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cross-Industry Transaction Experience
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                While we specialize in key sectors, our team has successfully closed transactions across virtually every industry
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">200+</div>
                  <p className="text-gray-300">Transactions Closed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">$5B+</div>
                  <p className="text-gray-300">Deal Value</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">15+</div>
                  <p className="text-gray-300">Industries Served</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#d4af37] mb-2">20+</div>
                  <p className="text-gray-300">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Industries;
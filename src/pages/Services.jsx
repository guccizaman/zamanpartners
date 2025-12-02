import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Sell-Side Advisory',
      description: 'Maximize the value of your business with our comprehensive sell-side services.',
      features: [
        'Strategic business positioning',
        'Confidential marketing process',
        'Buyer identification and qualification',
        'Negotiation and deal structuring',
        'Due diligence management',
        'Transaction closing support'
      ]
    },
    {
      icon: Building2,
      title: 'Buy-Side Advisory',
      description: 'Identify and acquire businesses that align with your strategic growth objectives.',
      features: [
        'Target identification and screening',
        'Preliminary valuation analysis',
        'Confidential outreach and negotiation',
        'Due diligence coordination',
        'Deal structuring and financing',
        'Post-acquisition integration support'
      ]
    },
    // {
    //   icon: Award,
    //   title: 'Business Valuation',
    //   description: 'Comprehensive valuation services backed by market intelligence and industry data.',
    //   features: [
    //     'Fair market value assessments',
    //     'Industry-specific analysis',
    //     'Multiple valuation methodologies',
    //     'Comparable transaction analysis',
    //     'Financial modeling and projections',
    //     'Detailed valuation reports'
    //   ]
    // },
    // {
    //   icon: Users,
    //   title: 'Succession Planning',
    //   description: 'Seamless ownership transitions that preserve business legacy and value.',
    //   features: [
    //     'Exit strategy development',
    //     'Succession timeline planning',
    //     'Management transition support',
    //     'Family business transfers',
    //     'Employee stock ownership plans (ESOPs)',
    //     'Tax-efficient structuring'
    //   ]
    // },
    // {
    //   icon: FileCheck,
    //   title: 'Strategic Advisory',
    //   description: 'Ongoing strategic counsel to support your long-term business objectives.',
    //   features: [
    //     'Growth strategy development',
    //     'Market positioning analysis',
    //     'Competitive landscape assessment',
    //     'Strategic partnership facilitation',
    //     'Capital raising advisory',
    //     'Board advisory services'
    //   ]
    // },
    // {
    //   icon: Briefcase,
    //   title: 'Transaction Management',
    //   description: 'End-to-end transaction management ensuring smooth and successful deal execution.',
    //   features: [
    //     'Project management and coordination',
    //     'Stakeholder communication',
    //     'Timeline and milestone tracking',
    //     'Document preparation and review',
    //     'Regulatory compliance guidance',
    //     'Closing coordination'
    //   ]
    // }
  ];

  return (
    <>
      <Helmet>
        <title>M&A Advisory Services | Strategic M&A - Comprehensive Transaction Support</title>
        <meta name="description" content="Comprehensive M&A services including sell-side advisory, buy-side advisory, business valuation, succession planning, and strategic advisory." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Business professionals reviewing strategic documents"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1551135049-8a33b5883817" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive M&A advisory services tailored to your unique objectives
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
                Full-Service M&A Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From strategic planning to successful transaction close, we provide expert guidance at every stage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
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
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
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
                  Our Proven Methodology
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our systematic approach ensures thorough preparation, strategic execution, and optimal outcomes. We combine deep industry knowledge with proven transaction methodologies to deliver exceptional results.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Every engagement is customized to your specific situation, goals, and timeline. Our team works collaboratively with you to navigate complexities and achieve your objectives.
                </p>
                <Link to="/process">
                  <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white px-8 py-6 text-lg">
                    Learn About Our Process
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  alt="Strategic M&A process and methodology"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                 src="https://images.unsplash.com/photo-1596774419796-0318e0ab4ba1" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-12 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Industry Expertise That Matters
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  We serve diverse industries including manufacturing, trades, distribution, logistics, technology, retail, and professional services.
                </p>
                <Link to="/industries">
                  <Button className="bg-[#d4af37] hover:bg-[#c49d2f] text-[#1e3a5f] text-lg px-10 py-6 font-semibold">
                    Explore Industries We Serve
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section> */}

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Schedule a confidential consultation to discuss how we can help you achieve your strategic objectives.
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

export default Services;
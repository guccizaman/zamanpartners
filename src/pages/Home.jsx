import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, TrendingUp, Award, CheckCircle, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Sell-Side Advisory',
      description: 'Maximize value through strategic positioning and competitive bidding processes.'
    },
    {
      icon: Building2,
      title: 'Buy-Side Advisory',
      description: 'Identify and acquire businesses that align with your strategic objectives.'
    },
    // {
    //   icon: Award,
    //   title: 'Business Valuation',
    //   description: 'Comprehensive valuation services backed by market intelligence and data.'
    // },
    // {
    //   icon: Users,
    //   title: 'Succession Planning',
    //   description: 'Seamless ownership transitions that preserve business legacy and value.'
    // }
  ];

  const trustIndicators = [
    { icon: Shield, label: 'Confidential Process', value: '100%' },
    { icon: TrendingUp, label: 'Average Deal Value', value: '$10M+' },
    { icon: Users, label: 'Transactions Closed', value: '100+' },
    { icon: Award, label: 'Client Satisfaction', value: '100%' }
  ];

  const testimonials = [
    {
      quote: "Zaman Partners guided us through a complex transaction with professionalism and expertise. They exceeded our expectations.",
      author: "CEO, Manufacturing Company",
      deal: "$75M Exit"
    },
    {
      quote: "Their market knowledge and negotiation skills resulted in a 30% premium over initial offers. Truly exceptional advisors.",
      author: "Founder, Tech Services Firm",
      deal: "$42M Acquisition"
    },
    {
      quote: "The team's discretion and strategic approach made our succession planning seamless. Highly recommend their services.",
      author: "Partner, Distribution Business",
      deal: "$28M Transition"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zaman Partners | Premier Mergers & Acquisitions Advisory Firm</title>
        <meta name="description" content="Leading M&A advisory firm specializing in middle-market transactions. Expert guidance for sell-side, buy-side, valuations, and succession planning." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 w-[300%] h-[300%] -left-[100%] -top-[100%]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Yx3FImS60Wc?autoplay=1&mute=1&controls=0&loop=1&playlist=Yx3FImS60Wc&modestbranding=1&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ border: 'none' }}
                title="Hero Background Video"
              />
            </div>
            {/* Removed the blue gradient overlay div */}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Zaman <span className="text-[#d4af37]">Partners</span><br />
                <span className="text-[#d4af37] font-bold tracking-wide text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">Excellence in Every Deal</span>
              </h1>
              <p className="text-xl md:text-2xl text-black font-semibold tracking-wide mb-8 max-w-3xl mx-auto">

  Trusted advisors delivering exceptional results in middle-market mergers, acquisitions, and strategic transactions.
</p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-[#d4af37] hover:bg-[#c49d2f] text-[#1e3a5f] text-lg px-8 py-6 font-semibold">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-2 border-gold text-gray hover:bg-white hover:text-[#1e3a5f] text-lg px-8 py-6 font-semibold">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-[#d4af37]" />
                  <div className="text-3xl font-bold text-[#1e3a5f] mb-2">{item.value}</div>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
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
                Comprehensive Advisory Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial strategy to successful close, we provide expert guidance at every stage of your transaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <service.icon className="w-12 h-12 text-[#d4af37] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white px-8 py-6 text-lg">
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1e3a5f] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose Zaman Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our commitment to excellence, confidentiality, and results sets us apart.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-gray-300">100+ successful transactions across diverse industries</p>
              </div>
              <div className="text-center">
                <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Absolute Confidentiality</h3>
                <p className="text-gray-300">Discretionary processes protecting your interests</p>
              </div>
              <div className="text-center">
                <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-300">Seasoned professionals with deep industry knowledge</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from business leaders who trusted us with their most important transactions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="text-[#d4af37] text-5xl mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[#1e3a5f]">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.deal}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Explore Your Options?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Schedule a confidential consultation with our M&A experts to discuss your strategic objectives.
              </p>
              <Link to="/contact">
                <Button className="bg-[#d4af37] hover:bg-[#c49d2f] text-[#1e3a5f] text-lg px-10 py-6 font-semibold">
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

export default Home;
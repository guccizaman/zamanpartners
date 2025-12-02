import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in every transaction, ensuring transparency and trust.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to delivering exceptional results drives everything we do.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We tailor our approach to meet your unique objectives.'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'We focus on maximizing value and achieving optimal outcomes for our clients.'
    }
  ];

  const leadership = [
    {
      name: 'Qamar Zaman',
      position: 'Managing Partner',
      bio: '25+ years in M&A advisory with expertise in middle-market transactions across diverse industries.',
      credentials: 'MBA, CFA, Certified M&A Advisor'
    },
    {
      name: 'Hasan Zaman',
      position: 'Senior Partner',
      bio: 'Former investment banker specializing in sell-side advisory and business valuations.',
      credentials: 'MBA, Certified Business Valuator'
    },
    {
      name: 'David Chen',
      position: 'Partner, Buy-Side Advisory',
      bio: 'Expert in strategic acquisitions and post-merger integration with 20+ years experience.',
      credentials: 'MBA, CPA, M&A Specialist'
    },
    {
      name: 'Jennifer Williams',
      position: 'Partner, Succession Planning',
      bio: 'Dedicated to helping business owners transition successfully while preserving legacy.',
      credentials: 'JD, MBA, Certified Exit Planner'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Zaman Partners - Our Mission, Values & Leadership</title>
        <meta name="description" content="Learn about Strategic M&A's mission, core values, and experienced leadership team. Trusted M&A advisors with proven track record." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Modern corporate office building exterior"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1631498539536-54cd61318e4d" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zaman <span className="text-[#d4af37]">Partners</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Trusted advisors committed to delivering exceptional M&A outcomes
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-10 h-10 text-[#d4af37]" />
                  <h2 className="text-4xl font-bold text-[#1e3a5f]">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Zaman Partners, our mission is to deliver unparalleled advisory services that maximize value and ensure successful outcomes for our clients. We are dedicated to providing strategic insights, expert guidance, and unwavering support throughout the entire M&A lifecycle.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over two decades of experience and 200+ successful transactions, we have established ourselves as trusted partners for middle-market businesses seeking strategic growth, exit opportunities, or succession planning solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  alt="Strategic business planning session"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                 src="https://images.unsplash.com/photo-1595846871039-07290a94f2d4" />
              </motion.div>
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
                className="order-2 lg:order-1"
              >
                <img 
                  alt="Vision for the future of M&A advisory"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                 src="https://images.unsplash.com/photo-1674027392842-29f8354e236c" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-10 h-10 text-[#d4af37]" />
                  <h2 className="text-4xl font-bold text-[#1e3a5f]">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We envision a future where every middle-market business owner has access to world-class M&A advisory services. Our goal is to be the most trusted and sought-after M&A advisory firm, known for our integrity, expertise, and exceptional client outcomes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through continuous innovation, market intelligence, and an unwavering commitment to our clients' success, we strive to set the standard for excellence in M&A advisory services.
                </p>
              </motion.div>
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
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision and action we take
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-[#1e3a5f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4af37] transition-colors">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
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
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-[#d4af37] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#1e3a5f]">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-[#d4af37] text-sm mb-3">{leader.position}</p>
                  <p className="text-gray-300 text-sm mb-3">{leader.bio}</p>
                  <p className="text-gray-400 text-xs italic">{leader.credentials}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-lg shadow-xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Our Commitment to Confidentiality
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We understand that discretion is paramount in M&A transactions. Every engagement is conducted with the utmost confidentiality, protecting your business interests and reputation throughout the process.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our proven processes, non-disclosure agreements, and strict internal protocols ensure that sensitive information remains secure at all times.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
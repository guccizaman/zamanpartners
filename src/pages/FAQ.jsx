import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'General M&A Questions',
      questions: [
        {
          question: 'What is the typical timeline for selling a business?',
          answer: 'The typical M&A transaction takes 6-12 months from initial engagement to closing. This includes 4-8 weeks for preparation, 8-16 weeks for marketing and negotiation, and 8-12 weeks for due diligence and closing. However, timelines can vary based on transaction complexity, market conditions, and specific circumstances.'
        },
        {
          question: 'How do you determine the value of my business?',
          answer: 'We use multiple valuation methodologies including comparable transaction analysis, discounted cash flow (DCF) analysis, and industry-specific multiples. Our valuation considers financial performance, growth prospects, market position, customer concentration, management team, and industry trends. We provide a comprehensive valuation report with supporting documentation.'
        },
        {
          question: 'What is the difference between EBITDA and SDE?',
          answer: 'EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is typically used for larger businesses and represents operational profitability. SDE (Seller\'s Discretionary Earnings) is commonly used for smaller businesses and includes owner compensation and discretionary expenses. We help normalize earnings to present the most accurate picture of business performance.'
        },
        {
          question: 'How confidential is the M&A process?',
          answer: 'Confidentiality is paramount. We require signed non-disclosure agreements (NDAs) before sharing any sensitive information. Marketing materials are carefully prepared to protect your identity. We pre-qualify all potential buyers and control information flow throughout the process. Our team has strict protocols to ensure discretion at every stage.'
        }
      ]
    },
    {
      category: 'Sell-Side Questions',
      questions: [
        {
          question: 'When is the best time to sell my business?',
          answer: 'The optimal time to sell is when your business shows strong, consistent financial performance with clear growth potential. Ideally, you should plan 12-24 months ahead to maximize value. Market conditions, industry trends, and personal circumstances also play important roles in timing your exit.'
        },
        {
          question: 'What documents do I need to prepare for sale?',
          answer: 'Key documents include 3-5 years of financial statements, tax returns, customer and supplier lists, organizational charts, equipment lists, lease agreements, contracts, and operational procedures. We help you organize and present these materials professionally to maximize buyer confidence and value.'
        },
        {
          question: 'How much will I actually receive after the sale?',
          answer: 'The amount you receive depends on the final purchase price minus any outstanding debts, taxes, transaction fees, and closing adjustments. We provide clear estimates early in the process and help you understand your likely net proceeds before going to market. All fees—including the monthly retainer and success fee—are outlined upfront so you have a transparent view of what you can expect to take home after the sale.'
        },
        {
          question: 'Can I stay involved after the sale?',
          answer: 'Many transactions include transition periods where sellers remain involved. This can range from a few months to several years, depending on the deal structure and buyer preferences. We negotiate transition terms that align with your objectives, whether that\'s a quick exit or continued involvement.'
        }
      ]
    },
    {
      category: 'Buy-Side Questions',
      questions: [
        {
          question: 'How do you identify acquisition targets?',
          answer: 'We use a systematic approach including industry research, proprietary databases, confidential outreach, and our extensive network of business owners and intermediaries. We pre-qualify targets based on your acquisition criteria, ensuring alignment with your strategic objectives before making contact.'
        },
        {
          question: 'What should I look for in an acquisition target?',
          answer: 'Key factors include financial performance and trends, market position and competitive advantages, customer and supplier relationships, quality of management team, growth opportunities, cultural fit, and strategic alignment. We help you develop detailed acquisition criteria and conduct thorough due diligence on potential targets.'
        },
        {
          question: 'How is acquisition financing typically structured?',
          answer: 'Common structures include bank financing (SBA loans, conventional loans), seller financing, earn-outs, equity partnerships, and combinations thereof. The optimal structure depends on your financial position, business characteristics, and seller preferences. We help negotiate favorable financing terms as part of the transaction.'
        },
        {
          question: 'What is due diligence and how long does it take?',
          answer: 'Due diligence is the comprehensive investigation of a target business before purchase. It typically takes 60-90 days and covers financial, operational, legal, and commercial aspects. We coordinate the process, working with your attorneys, accountants, and other advisors to ensure thorough investigation while maintaining momentum.'
        }
      ]
    },
    {
      category: 'Fees & Process',
      questions: [
        {
          question: 'How are M&A advisory fees structured?',
          answer: 'Our fees follow the Double Lehman Method, consisting of a monthly retainer and a success fee tied to transaction value: 10% of the first million, 8% of the second, 6% of the third, 4% of the fourth, and 2% on the remainder. This structure aligns incentives and keeps fees transparent, with all terms clearly outlined in our engagement letter and no hidden costs.'
        },
        {
          question: 'What other costs should I expect in an M&A transaction?',
          answer: 'In addition to the success fee, clients can expect a monthly retainer, which is set after we evaluate the size and complexity of the deal. This retainer helps cover preparation, financial analysis, marketing materials, and buyer outreach. All fees are discussed upfront and clearly outlined in our engagement letter so you know exactly what to expect with no hidden costs.'
        },
        {
          question: 'Do you work with businesses of all sizes?',
          answer: 'We primarily work with owner-managed businesses and companies that have established, demonstrable value. While businesses vary in size, we focus on organizations with solid financials, a track record of performance, and clear market potential to ensure a successful transaction process.'
        },
        {
          question: 'What happens if a deal doesn\'t close?',
          answer: 'While our success rate exceeds 90%, not all transactions close. If a deal falls through, we work with you to understand what happened, make necessary adjustments, and return to market. Our monthly retainers cover our ongoing work, while success fees are only earned upon successful closing, aligning our interests with yours.'
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ | Strategic M&A - Frequently Asked Questions About M&A</title>
        <meta name="description" content="Find answers to common questions about M&A transactions, business valuations, selling processes, acquisition strategies, and advisory fees." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Question and answer concept with business professionals"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/flagged/photo-1551135049-83f3419ef05c" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Expert answers to common M&A questions
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-[#1e3a5f] mb-6"
                >
                  {category.category}
                </motion.h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = faqs.slice(0, catIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + index;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-[#1e3a5f] pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#d4af37] flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t">
                            <div className="pt-4">{faq.answer}</div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team is here to provide personalized answers to your specific situation. Schedule a confidential consultation to discuss your questions in detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                    Contact Our Team
                  </button>
                </a>
                <a href="tel:+14169377500">
                  <button className="bg-white hover:bg-gray-50 text-[#1e3a5f] border-2 border-[#1e3a5f] px-8 py-4 rounded-lg font-semibold transition-colors">
                    Call +1 (416) 937-7500
                  </button>
                </a>
              </div>
            </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Explore our insights and resources for more in-depth information about M&A transactions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <a href="/insights" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                  <h3 className="text-xl font-bold mb-3">M&A Insights</h3>
                  <p className="text-gray-300">Expert articles and market analysis</p>
                </a>
                <a href="/process" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                  <h3 className="text-xl font-bold mb-3">Our Process</h3>
                  <p className="text-gray-300">Detailed transaction methodology</p>
                </a>
                {/* <a href="/case-studies" className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                  <h3 className="text-xl font-bold mb-3">Case Studies</h3>
                  <p className="text-gray-300">Real transaction examples</p>
                </a> */}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Insights = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const featuredInsight = {
    title: 'Global M&A industry trends 2025',
    excerpt: 'Exploring the key factors driving middle-market M&A transactions including demographic shifts, technology adoption, and capital availability.',
    category: 'Market Analysis',
    date: '2025-06-25',
    readTime: '15 min read',
    image: 'Market analysis charts and business trends visualization'
  };

  // const insights = [
  //   {
  //     title: 'Preparing Your Business for Sale: A 12-Month Roadmap',
  //     excerpt: 'Strategic steps business owners should take in the year leading up to a potential sale to maximize value and ensure smooth transaction.',
  //     category: 'Sell-Side Advisory',
  //     date: '2025-01-10',
  //     readTime: '6 min read'
  //   },
  //   {
  //     title: 'Understanding Business Valuation Multiples by Industry',
  //     excerpt: 'Comprehensive analysis of current valuation trends across key middle-market sectors and what drives premium multiples.',
  //     category: 'Valuation',
  //     date: '2025-01-05',
  //     readTime: '7 min read'
  //   },
  //   {
  //     title: 'Succession Planning: Beyond the Transaction',
  //     excerpt: 'How to structure successful ownership transitions that preserve legacy while ensuring business continuity and employee retention.',
  //     category: 'Succession Planning',
  //     date: '2024-12-28',
  //     readTime: '5 min read'
  //   },
  //   {
  //     title: 'Due Diligence Deep Dive: What Buyers Really Look For',
  //     excerpt: 'Inside perspective on the critical areas buyers examine during due diligence and how sellers can prepare effectively.',
  //     category: 'Transaction Process',
  //     date: '2024-12-20',
  //     readTime: '9 min read'
  //   },
  //   {
  //     title: 'Strategic Acquisitions: Building a Disciplined Buy-Side Process',
  //     excerpt: 'Framework for developing and executing a successful acquisition strategy aligned with your growth objectives.',
  //     category: 'Buy-Side Advisory',
  //     date: '2024-12-15',
  //     readTime: '7 min read'
  //   },
  //   {
  //     title: 'Manufacturing M&A: Navigating Industry-Specific Challenges',
  //     excerpt: 'Unique considerations for manufacturing business transactions including equipment valuation, supply chain, and workforce dynamics.',
  //     category: 'Industry Focus',
  //     date: '2024-12-10',
  //     readTime: '6 min read'
  //   },
  //   {
  //     title: 'Tax-Efficient Deal Structuring Strategies',
  //     excerpt: 'Overview of common transaction structures and their tax implications for both buyers and sellers in middle-market deals.',
  //     category: 'Deal Structure',
  //     date: '2024-12-05',
  //     readTime: '8 min read'
  //   },
  //   {
  //     title: 'The Role of Quality of Earnings in M&A Transactions',
  //     excerpt: 'Understanding how QoE reports impact valuation, negotiation, and deal structure in middle-market transactions.',
  //     category: 'Valuation',
  //     date: '2024-11-30',
  //     readTime: '5 min read'
  //   }
  // ];
  const insights = [];

  const categories = [
    'All Categories',
    'Market Analysis',
    'Sell-Side Advisory',
    'Buy-Side Advisory',
    'Valuation',
    'Succession Planning',
    'Transaction Process',
    'Industry Focus',
    'Deal Structure'
  ];

  // Map categories to relevant service pages
  const getCategoryLink = (category) => {
    const categoryMap = {
      'Sell-Side Advisory': '/services',
      'Buy-Side Advisory': '/services',
      'Valuation': '/services',
      'Succession Planning': '/services',
      'Transaction Process': '/process',
      'Industry Focus': '/industries',
      'Deal Structure': '/pricing',
      'Market Analysis': '/contact'
    };
    return categoryMap[category] || '/contact';
  };

  // Filter insights based on selected category
  const filteredInsights = selectedCategory === 'All Categories' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReadMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>M&A Insights & Articles | Strategic M&A - Expert Analysis & Guidance</title>
        <meta name="description" content="Expert M&A insights, market analysis, and thought leadership on mergers, acquisitions, valuations, and strategic transactions." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Business insights and market analysis"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1618044733300-9472054094ee" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Insights & Analysis
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Expert perspectives on M&A trends, strategies, and best practices
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto">
                    <img 
                      alt={featuredInsight.image}
                      className="w-full h-full object-cover"
                     src="https://d1xuqjt1wg0fxw.cloudfront.net/b94e7430-1492-11ec-9d4b-2fe5ea5ffc77.jpg" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-[#d4af37] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                      Featured
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                      {featuredInsight.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {featuredInsight.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredInsight.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredInsight.readTime}</span>
                      </div>
                    </div>
                    <a 
                      href="https://www.pwc.com/gx/en/services/deals/trends.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white w-fit"
                      >
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#1e3a5f] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight, index) => (
                <Link 
                  key={index}
                  to={getCategoryLink(insight.category)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <div className="w-full h-full bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="text-white text-sm font-semibold px-4 text-center">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-[#d4af37] font-semibold mb-2">
                      {insight.category}
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#d4af37] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-lg"
                >
                  Load More Articles
                </Button>
              </Link>
            </div>
          </div>
        </section> */}

        <section className="py-24 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Subscribe to our newsletter for the latest M&A insights, market trends, and transaction strategies.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <Button 
                    onClick={handleReadMore}
                    className="bg-[#d4af37] hover:bg-[#c49d2f] text-[#1e3a5f] px-6"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Insights;
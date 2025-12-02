import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, MapPin, TrendingUp, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BusinessesForSale = () => {
  const { toast } = useToast();
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  const listings = [
    {
      id: 1,
      title: 'Precision Manufacturing Company',
      industry: 'Manufacturing',
      location: 'Midwest Region',
      askingPrice: '$12.5M',
      revenue: '$18M',
      ebitda: '$3.2M',
      employees: 85,
      description: 'Well-established precision machining company serving aerospace and defense sectors. Strong customer relationships and modern equipment.',
      highlights: [
        'ISO 9001 certified facility',
        'Diversified customer base',
        'Proprietary processes',
        'Strong management team'
      ]
    },
    {
      id: 2,
      title: 'Regional HVAC Contractor',
      industry: 'Trades',
      location: 'Southeast',
      askingPrice: '$6.8M',
      revenue: '$9.5M',
      ebitda: '$1.8M',
      employees: 42,
      description: 'Full-service HVAC contractor with commercial and residential divisions. Recurring maintenance contracts and strong reputation.',
      highlights: [
        '60% recurring revenue',
        'Licensed technicians',
        'Fleet of service vehicles',
        'Established since 1995'
      ]
    },
    {
      id: 3,
      title: 'Industrial Distribution Business',
      industry: 'Distribution',
      location: 'Northeast',
      askingPrice: '$22M',
      revenue: '$45M',
      ebitda: '$5.5M',
      employees: 68,
      description: 'Leading distributor of industrial supplies and equipment. Multiple warehouse locations and strong vendor relationships.',
      highlights: [
        'Multi-location operations',
        'E-commerce platform',
        'Exclusive distribution rights',
        'Strong gross margins'
      ]
    },
    {
      id: 4,
      title: 'Logistics & Freight Company',
      industry: 'Logistics',
      location: 'West Coast',
      askingPrice: '$15M',
      revenue: '$28M',
      ebitda: '$3.8M',
      employees: 95,
      description: 'Regional LTL carrier with modern fleet and technology. Strong relationships with major shippers and consistent growth.',
      highlights: [
        'Modern fleet (avg 3 years)',
        'Technology platform',
        'Long-term contracts',
        'Growth trajectory'
      ]
    },
    {
      id: 5,
      title: 'Managed IT Services Provider',
      industry: 'Technology',
      location: 'Multiple Markets',
      askingPrice: '$8.5M',
      revenue: '$6.2M',
      ebitda: '$2.1M',
      employees: 28,
      description: 'Fast-growing MSP serving SMB clients across multiple verticals. High recurring revenue and strong client retention.',
      highlights: [
        '92% recurring revenue',
        'Client retention >95%',
        'Scalable service model',
        'Strong pipeline'
      ]
    },
    {
      id: 6,
      title: 'Specialty Retail Chain',
      industry: 'Retail',
      location: 'Regional',
      askingPrice: '$18M',
      revenue: '$32M',
      ebitda: '$4.2M',
      employees: 125,
      description: 'Well-known specialty retail brand with 8 locations. Strong brand recognition and loyal customer base.',
      highlights: [
        '8 prime locations',
        'Omnichannel presence',
        'Proprietary products',
        'Brand equity'
      ]
    }
  ];

  const industries = ['All Industries', 'Manufacturing', 'Trades', 'Distribution', 'Logistics', 'Technology', 'Retail'];

  const filteredListings = selectedIndustry === 'All Industries' 
    ? listings 
    : listings.filter(l => l.industry === selectedIndustry);

  const handleInquiry = (businessTitle) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Businesses for Sale | Strategic M&A - Current Acquisition Opportunities</title>
        <meta name="description" content="Explore current business acquisition opportunities across manufacturing, trades, distribution, logistics, technology, and retail sectors." />
      </Helmet>

      <div className="bg-white">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Business opportunities and commercial real estate"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1694211962257-81690081b9b7" />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Businesses for Sale
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Curated acquisition opportunities from our exclusive marketplace
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
              className="mb-12"
            >
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-[#1e3a5f] mb-2">
                    Current Opportunities
                  </h2>
                  <p className="text-gray-600">
                    Showing {filteredListings.length} of {listings.length} listings
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-[#d4af37]/10 border-l-4 border-[#d4af37] p-6 rounded-lg mb-12">
                <h3 className="font-bold text-[#1e3a5f] mb-2">Confidential Inquiries</h3>
                <p className="text-gray-700">
                  All inquiries are handled with strict confidentiality. Non-disclosure agreements are required before detailed information is shared. Contact our team to learn more about any opportunity.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredListings.map((listing, index) => (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] p-6 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="inline-block bg-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          {listing.industry}
                        </div>
                        <h3 className="text-2xl font-bold">{listing.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-200">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{listing.location}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Asking Price</div>
                        <div className="text-xl font-bold text-[#d4af37]">{listing.askingPrice}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Revenue</div>
                        <div className="text-xl font-bold text-[#1e3a5f]">{listing.revenue}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">EBITDA</div>
                        <div className="text-xl font-bold text-[#1e3a5f]">{listing.ebitda}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{listing.description}</p>

                    <div className="mb-6">
                      <div className="font-semibold text-[#1e3a5f] mb-3">Key Highlights:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {listing.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="bg-[#d4af37]/20 rounded-full p-1 mt-1">
                              <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                            </div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{listing.employees} Employees</span>
                      </div>
                      <Button 
                        onClick={() => handleInquiry(listing.title)}
                        className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white"
                      >
                        Request Info
                      </Button>
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
                  Looking to Sell Your Business?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you're considering selling your business, we offer confidential evaluations and can help position your company for maximum value in our exclusive marketplace.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our team will work with you to prepare comprehensive marketing materials, identify qualified buyers, and manage the entire transaction process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Free Business Valuation</div>
                      <p className="text-gray-600">Complimentary assessment of your business value</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#d4af37] rounded-full p-2 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e3a5f]">Strategic Positioning</div>
                      <p className="text-gray-600">Expert guidance to maximize your exit value</p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleInquiry('Business Listing Inquiry')}
                  className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white px-8 py-6 text-lg mt-8"
                >
                  List Your Business
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  alt="Business owner planning sale strategy"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                 src="https://images.unsplash.com/photo-1581455294386-33ae74dd1044" />
              </motion.div>
            </div>
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
                Register for Exclusive Access
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get early access to new listings and receive personalized recommendations based on your acquisition criteria.
              </p>
              <Button 
                onClick={() => handleInquiry('Buyer Registration')}
                className="bg-[#d4af37] hover:bg-[#c49d2f] text-[#1e3a5f] text-lg px-10 py-6 font-semibold"
              >
                Register as Buyer
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessesForSale;
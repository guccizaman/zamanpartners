import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    title: "Standard Engagement",
    description: "Designed for owner-managed businesses preparing for succession or a clean exit.",
    price: "Retainer + Success Fee",
    yellow: true,
    features: [
      "Monthly retainer based on deal complexity",
      "Preparation of marketing materials",
      "Confidential outreach to qualified buyers",
      "Negotiation & deal structure support",
      "End-to-end advisory through closing"
    ],
  },
  {
    title: "Double Lehman Pricing",
    description: "Most popular. A performance-based model aligned with maximizing valuation.",
    price: "Double Lehman Pricing Method",
    highlight: true,
    features: [
      "10% on the first million",
      "8% on the second million",
      "6% on the third million",
      "4% on the fourth million",
      "and 2% on the remaining",
      "Retainer credited toward success fee"
    ],
  },
  // {
  //   title: "Full-Service M&A Partnership",
  //   description: "Ideal for clients seeking strategic planning, valuation, and long-term growth advisory.",
  //   price: "Custom Quote",
  //   features: [
  //     "Comprehensive business valuation",
  //     "Financial model reconstruction",
  //     "Investor/buyer matching",
  //     "Strategic market positioning",
  //     "Quarterly advisory support"
  //   ],
  // },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Zaman Partners</title>
        <meta name="description" content="Transparent pricing for M&A advisory services including Standard Engagement, Double Lehman pricing, and full-service partnership models." />
      </Helmet>

      {/* Header */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Pricing and engagement models"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          Pricing
        </motion.h1>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-10 justify-center max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className={`rounded-2xl p-8 shadow-lg border ${
                  plan.highlight 
                    ? "bg-black text-white border-black scale-105" 
                    : plan.yellow 
                    ? "bg-[#d4af37] text-black border-[#d4af37]" 
                    : "bg-gray-50"
                }`}
              >
                <h2 className="text-2xl font-bold mb-3">{plan.title}</h2>
                <p className={`mb-4 ${plan.yellow ? "text-gray-800" : plan.highlight ? "text-gray-300" : "text-gray-600"}`}>{plan.description}</p>

                <p className={`text-3xl font-bold mb-6 ${plan.highlight ? "text-white" : "text-black"}`}>
                  {plan.price}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={20} className={plan.highlight ? "text-white" : "text-black"} />
                      <span className={plan.yellow ? "text-gray-900" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

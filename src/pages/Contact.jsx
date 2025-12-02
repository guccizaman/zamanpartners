import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_sa6mcwv';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_f4jatm9';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2zrFzAwkfyn-KWvoW';

      // EmailJS is now fully configured

      // Prepare email template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        interest: formData.interest || 'Not specified',
        message: formData.message,
        to_email: 'qzaman@eztax.ca', // Your receiving email
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at qzaman@eztax.ca",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Helmet>
        <title>Contact Us | Strategic M&A - Schedule Your Confidential Consultation</title>
        <meta name="description" content="Contact Strategic M&A for a confidential consultation. Reach our M&A advisory team by phone, email, or schedule a meeting." />
      </Helmet>

      <div className="bg-white">
        {/* HEADER */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Contact our M&A advisory team"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            />
            <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Let's discuss how we can help you achieve your strategic objectives
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* LEFT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our team is ready to discuss your M&A needs. Reach out through any of the channels below, or fill out the form to schedule a confidential consultation.
                  </p>
                </div>

                {/* CONTACT ITEMS */}
                <div className="space-y-6">

                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d4af37] p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Phone</h3>
                      <p className="text-gray-600">(416) 937-7500</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  {/* EMAIL — with COPY ON CLICK */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d4af37] p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Email</h3>

                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText("qzaman@eztax.ca");
                          toast({ title: "Email copied to clipboard" });
                        }}
                        className="text-gray-600 underline hover:text-[#1e3a5f] cursor-pointer"
                      >
                        qzaman@eztax.ca
                      </button>

                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d4af37] p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Office</h3>
                      <p className="text-gray-600">
                        
                        1325 Eglington Ave E, Suite 224<br />
                        Mississauga, ON L5N 2G8
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE — FORM */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="selling">Selling my business</option>
                      <option value="buying">Buying a business</option>
                      <option value="merger">Merger opportunity</option>
                      <option value="valuation">Business valuation</option>
                      <option value="other">Other</option>
                    </select>
                  </div> */}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONFIDENTIALITY FOOTER */}
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
              <p className="text-xl text-gray-300">
                All inquiries are handled with the utmost discretion. Your information is confidential and will never be shared without your explicit consent.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

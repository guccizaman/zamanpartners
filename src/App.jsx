import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Process from '@/pages/Process';
// import Industries from '@/pages/Industries';
// import CaseStudies from '@/pages/CaseStudies';
import Insights from '@/pages/Insights';
import BusinessesForSale from '@/pages/BusinessesForSale';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Confidentiality from '@/pages/Confidentiality';
import Disclaimer from '@/pages/Disclaimer';

function App() {
  console.log('App component rendering...');
  
  return (
    <Router>
      <ScrollToTop />
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#ffffff',
        width: '100%',
        display: 'block',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1000,
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e5e5'
        }}>
          <Header />
        </div>
        <main style={{ 
          paddingTop: '100px', 
          minHeight: 'calc(100vh - 100px)',
          width: '100%',
          backgroundColor: '#ffffff',
          position: 'relative',
          zIndex: 1
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            {/* <Route path="/industries" element={<Industries />} /> */}
            {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/businesses-for-sale" element={<BusinessesForSale />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <div style={{ 
          width: '100%',
          backgroundColor: '#1e3a5f',
          position: 'relative',
          zIndex: 1
        }}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Features from "./pages/Features";
import FeatureDetail from "./pages/FeatureDetail";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import Integrations from "./pages/Integrations";
import Updates from "./pages/Updates";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import Docs from "./pages/Docs";
import ApiReference from "./pages/ApiReference";
import Status from "./pages/Status";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/:featureKey" element={<FeatureDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

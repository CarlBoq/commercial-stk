import { Twitter, Linkedin, Facebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  const brandLogoSrc = `${import.meta.env.BASE_URL}assets/sparkle-logo.png`;
  // For Pricing scroll: always navigate to Home, then scroll to #pricing
  const handlePricingClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById("pricing");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("pricing");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link to="/" aria-label="Home">
                <img
                  src={brandLogoSrc}
                  alt="Sparkle Timekeeping"
                  className="h-auto w-[220px] sm:w-[280px] object-contain"
                />
              </Link>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Modern time tracking and workforce management for businesses of
              all sizes. Accurate, automated, and compliance-ready.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <a
                  href="/#pricing"
                  onClick={handlePricingClick}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link
                  to="/integrations"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/updates"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help-center"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/api-reference"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

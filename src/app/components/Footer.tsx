import { Twitter, Linkedin, Facebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  const brandLogoSrc = `${import.meta.env.BASE_URL}assets/sparkle-logo.png`;

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
    <footer className="relative overflow-hidden border-t border-[#1d315b] bg-[#060d1c] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(16,124,236,0.2),transparent_40%),radial-gradient(circle_at_88%_72%,rgba(255,186,59,0.18),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-14">

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <section className="rounded-2xl border border-[#274273] bg-[#0b1830]/90 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <Link to="/" aria-label="Home" className="mb-5 inline-block">
              <img
                src={brandLogoSrc}
                alt="Sparkle Timekeeping"
                className="h-auto w-[220px] object-contain sm:w-[280px]"
              />
            </Link>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-[#b8c9e6]">
              Modern time tracking and workforce management for teams that need
              speed, accuracy, and compliance confidence.
            </p>

            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              <Link
                to="/features"
                className="rounded-xl border border-[#2d4e85] bg-[#0f203f] p-4 transition-colors hover:bg-[#17305b]"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-[#8fb2e6]">Product</p>
                <p className="mt-2 text-sm font-semibold text-[#eaf2ff]">Explore Features</p>
              </Link>
              <a
                href="/#pricing"
                onClick={handlePricingClick}
                className="rounded-xl border border-[#2d4e85] bg-[#0f203f] p-4 transition-colors hover:bg-[#17305b]"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-[#8fb2e6]">Plans</p>
                <p className="mt-2 text-sm font-semibold text-[#eaf2ff]">View Pricing</p>
              </a>
              <Link
                to="/contact"
                className="rounded-xl border border-[#2d4e85] bg-[#0f203f] p-4 transition-colors hover:bg-[#17305b]"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-[#8fb2e6]">Sales</p>
                <p className="mt-2 text-sm font-semibold text-[#eaf2ff]">Book a Demo</p>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#4a78bf] bg-gradient-to-b from-[#163669] to-[#0d2143] text-[#e7f1ff] shadow-[0_10px_20px_rgba(4,10,24,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#79a8ef] hover:shadow-[0_0_0_4px_rgba(86,148,230,0.2)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_50%)] opacity-80" />
                <Twitter className="relative h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#4a78bf] bg-gradient-to-b from-[#163669] to-[#0d2143] text-[#e7f1ff] shadow-[0_10px_20px_rgba(4,10,24,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#79a8ef] hover:shadow-[0_0_0_4px_rgba(86,148,230,0.2)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_50%)] opacity-80" />
                <Linkedin className="relative h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.facebook.com/SparkleStarPH"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#4a78bf] bg-gradient-to-b from-[#163669] to-[#0d2143] text-[#e7f1ff] shadow-[0_10px_20px_rgba(4,10,24,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#79a8ef] hover:shadow-[0_0_0_4px_rgba(86,148,230,0.2)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_50%)] opacity-80" />
                <Facebook className="relative h-[18px] w-[18px]" />
              </a>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#24406f] bg-[#0a162d] p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#86aee5]">Company</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-[#dceaff]">
                <Link to="/about" className="rounded-md px-2 py-1 hover:bg-[#12284d]">About</Link>
                <Link to="/careers" className="rounded-md px-2 py-1 hover:bg-[#12284d]">Careers</Link>
                <Link to="/blog" className="rounded-md px-2 py-1 hover:bg-[#12284d]">Blog</Link>
                <Link to="/contact" className="rounded-md px-2 py-1 hover:bg-[#12284d]">Contact</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-[#24406f] bg-[#0a162d] p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#86aee5]">Support</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-[#dceaff]">
                <Link to="/help-center" className="rounded-md px-2 py-1 hover:bg-[#12284d]">Help</Link>
                <Link to="/docs" className="rounded-md px-2 py-1 hover:bg-[#12284d]">Docs</Link>
                <Link to="/api-reference" className="rounded-md px-2 py-1 hover:bg-[#12284d]">API</Link>
                <Link to="/status" className="rounded-md px-2 py-1 hover:bg-[#12284d]">Status</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-[#6a4d1e] bg-[#2a1c08] p-5 text-[#ffe7bc]">
              <p className="text-xs uppercase tracking-[0.12em] text-[#ffd27f]">Legal</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <Link to="/docs" className="rounded-md bg-[#3a280d] px-3 py-1 hover:bg-[#4d3612]">Privacy</Link>
                <Link to="/docs" className="rounded-md bg-[#3a280d] px-3 py-1 hover:bg-[#4d3612]">Terms</Link>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#6f8ec2]">
            (c) {new Date().getFullYear()} Sparkle Timekeeping System
          </p>
          <p className="mt-2 text-4xl font-semibold leading-none text-[#1c3158] sm:text-6xl">
            SPARKLE
          </p>
        </div>
      </div>
    </footer>
  );
}

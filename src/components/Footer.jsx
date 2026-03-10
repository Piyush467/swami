import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Books", path: "/books" },
  { name: "Products", path: "/products" },
  { name: "Academy", path: "/academy" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const supportLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="footer-gradient text-white">
      
      {/* Lower Footer */}
      <div className="bg-white/5 backdrop-blur-sm">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                   src="/logo.png"
                  alt="Swami Logo"
                  className="h-12 w-12 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <p className="text-white/70 text-body-sm max-w-md">
                Spiritual training • Mind–Body healing • Storytelling for
                transformation
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.slice(0, 5).map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-white/70 text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-white mb-4">
                  Support & Legal
                </h4>
                <ul className="space-y-2">
                  {supportLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-white/70 text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-semibold text-white mb-4">
                  Stay Connected
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Receive insights and updates from Radiant Light Academy.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/40"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm">
                © 2025 Orange Cowboy. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  to="/privacy"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

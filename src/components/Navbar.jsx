import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Service', path: '/service' },
  { name: 'Books', path: '/books' },
  { name: 'Products', path: '/products' },
  { name: 'Academy', path: '/academy' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="navbar-pill flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 pl-2">
            <img
               src="/logo.png"
              alt="Swami Logo"
              className="h-10 w-10 rounded-full object-cover"

            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
  location.pathname === link.path
    ? 'nav-link-active'
    : 'nav-link'
}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Connect Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-cream transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-3xl shadow-navbar p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={
                    location.pathname === link.path
                      ? 'nav-link-active text-center'
                      : 'nav-link text-center hover:bg-cream'
                  }
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Connect
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

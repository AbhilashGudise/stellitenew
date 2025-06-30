import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'News', path: '/news' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full h-20 bg-global-1 border-b border-primary">
      <div className="flex items-center justify-between h-full px-4 md:px-16">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img
            src="/images/img_vector.svg"
            alt="Pinnacle logo"
            className="w-7 h-7 rounded-sm mr-3"
          />
          <span className="ml-2 text-lg font-semibold text-global-3">
            StelliteWorks
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div key={item.path}>
              {isActive(item.path) ? (
                <Button variant="primary" size="md" to={item.path}>
                  {item.label}
                </Button>
              ) : (
                <button
                  onClick={() => navigate(item.path)}
                  className="text-global-3 font-satoshi font-medium text-base leading-6 hover:text-global-5 transition-colors"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button
            variant={isActive('/contact') ? 'secondary' : 'primary'}
            size="md"
            to="/contact"
          >
            Contact us
          </Button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-global-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-global-1 border-t border-primary px-4 pb-4 fixed top-20 left-0 w-full z-50">
          <nav className="flex flex-col space-y-2 mt-2">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                className={`text-left py-2 px-2 rounded ${
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-global-3 hover:text-global-5'
                } font-satoshi font-medium text-base transition-colors`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant={isActive('/contact') ? 'secondary' : 'primary'}
              size="md"
              to="/contact"
              className="mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

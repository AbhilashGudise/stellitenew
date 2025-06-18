import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'News', path: '/news' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full h-26 bg-global-1 border-b border-primary">
      <div className="flex items-center justify-between h-full px-16">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src="/images/img_vector.svg" 
            alt="Pinnacle logo"
            className="w-7 h-7 rounded-sm mr-3"
          />
          {/* <img 
            src="/images/img_pinnacle.svg" 
            alt="Pinnacle text"
            className="w-24 h-5"
          /> */}
          <span className="ml-2 text-lg font-semibold text-global-3">StelliteWorks</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div key={item.path}>
              {item.label === 'Home' && isActive(item.path) ? (
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

        {/* Contact Button */}
        <Button variant="secondary" size="md" to="/contact">
          Contact us
        </Button>
      </div>
    </header>
  );
};

export default Header;
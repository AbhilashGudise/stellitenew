import React from 'react';
import Dropdown from '../ui/Dropdown';

const Footer = () => {
  const handleEmailSubmit = (email) => {
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
  };

  const navigationSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'services', path: '/services' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { label: 'Our Story', path: '/about/story' },
        { label: 'Our Values', path: '/about/values' },
        { label: 'Our Team', path: '/about/team' }
      ]
    },
    {
      title: 'Properties',
      links: [
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Categories', path: '/categories' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Residential Construction', path: '/services/residential' },
        { label: 'Commercial Construction', path: '/services/commercial' },
        { label: 'Property Management', path: '/services/property-management' },
        { label: 'Development Services', path: '/services/development' }
      ]
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Contact Form', path: '/contact' },
        { label: 'Our Offices', path: '/offices' }
      ]
    }
  ];

  const socialIcons = [
    { src: '/images/img_icon.svg', alt: 'Social media 1' },
    { src: '/images/img_icon_gray_200.svg', alt: 'Social media 2' },
    { src: '/images/img_icon_gray_200_20x20.svg', alt: 'Social media 3' },
    { src: '/images/img_icon_20x20.svg', alt: 'Social media 4' }
  ];

  return (

<footer className="bg-global-1 py-20">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and Newsletter */}
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/img_vector.svg"
                  alt="Stellite Works logo"
                  className="w-7 h-7 rounded-sm"
                />
                <h3 className="text-xl font-satoshi font-bold text-global-5">Stellite Works</h3>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Subscribe for IT & SAP insights"
                  className="w-full px-4 py-3 bg-transparent border border-secondary rounded-lg text-global-1 placeholder-global-1 focus:outline-none focus:border-global-3"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-satoshi font-medium text-global-1">Navigation</h4>
                  <div className="space-y-4">
                    <a
                      href="/"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Home
                    </a>
                     <a
                      href="/about"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      About Us
                    </a>
                    <a
                      href="/projects"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Projects
                    </a>
                   
                    <a
                      href="/services"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Service
                    </a>
                    <a
                      href="/news"
                      className="block text-sm font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      News
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-satoshi font-medium text-global-1">About Us</h4>
                  <div className="space-y-4">
                    <a
                      href="/story"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Our Story
                    </a>
                    <a
                      href="/values"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Our Values
                    </a>
                    <a
                      href="/team"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Our Team
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-satoshi font-medium text-global-1">Expertise</h4>
                  <div className="space-y-4">
                    <a
                      href="/sap"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      SAP Solutions
                    </a>
                    <a
                      href="/it-staffing"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      IT Staffing
                    </a>
                    <a
                      href="/software-development"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Software Development
                    </a>
                    <a
                      href="/consulting"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      IT Consulting
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-satoshi font-medium text-global-1">Contact Us</h4>
                  <div className="space-y-4">
                    <a
                      href="/contact"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Contact Form
                    </a>
                    <a
                      href="/offices"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Our Offices
                    </a>
                    <a
                      href="mailto:info@stelliteworks.com"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      info@stelliteworks.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="bg-secondary py-6 flex items-center justify-between">
            <p className="text-sm font-satoshi font-medium text-global-1">
              ©2025 Stellite Works. All Rights Reserved.
            </p>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/company/stelliteworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-13 h-9 bg-global-2 border border-primary rounded-lg flex items-center justify-center">
                  <img src="/images/img_icon.svg" alt="LinkedIn" className="w-5 h-5" />
                </div>
              </a>
              <a href="https://twitter.com/stelliteworks" target="_blank" rel="noopener noreferrer">
                <div className="w-13 h-9 bg-global-2 border border-primary rounded-lg flex items-center justify-center">
                  <img src="/images/img_icon_gray_200.svg" alt="Twitter" className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://facebook.com/stelliteworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-13 h-9 bg-global-2 border border-primary rounded-lg flex items-center justify-center">
                  <img
                    src="/images/img_icon_gray_200_20x20.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </div>
              </a>
              <a href="https://stelliteworks.com" target="_blank" rel="noopener noreferrer">
                <div className="w-13 h-9 bg-global-2 border border-primary rounded-lg flex items-center justify-center">
                  <img src="/images/img_icon_20x20.svg" alt="Website" className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
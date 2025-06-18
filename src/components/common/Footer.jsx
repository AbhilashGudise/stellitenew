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
        { label: 'Properties', path: '/properties' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'FAQ\'s', path: '/faqs' }
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
    // <footer className="w-full bg-global-1">
    //   {/* Main Footer Content */}
    //   <div className="px-16 py-20">
    //     <div className="flex justify-between items-start">
    //       {/* Logo and Newsletter Section */}
    //       <div className="flex flex-col w-80">
    //         {/* Logo */}
    //         <div className="flex items-center mb-15">
    //           <img 
    //             src="/images/img_vector.svg" 
    //             alt="Pinnacle logo"
    //             className="w-7 h-7 rounded-sm mr-3"
    //           />
    //           <span className="text-global-3 font-satoshi font-bold text-3xl leading-10">
    //             Stelliteworks
    //           </span>
    //         </div>

    //         {/* Newsletter Subscription */}
    //         <Dropdown 
    //           placeholder="Enter Your Email"
    //           onSubmit={handleEmailSubmit}
    //           className="w-full h-14"
    //         />
    //       </div>

    //       {/* Navigation Links */}
    //       <div className="flex space-x-32">
    //         {navigationSections.map((section, index) => (
    //           <div key={index} className="flex flex-col">
    //             <h3 className="text-global-1 font-satoshi font-medium text-xl leading-7 mb-6">
    //               {section.title}
    //             </h3>
    //             <div className="flex flex-col space-y-4">
    //               {section.links.map((link, linkIndex) => (
    //                 <a
    //                   key={linkIndex}
    //                   href={link.path}
    //                   className="text-global-3 font-satoshi font-medium text-base leading-6 hover:text-global-5 transition-colors"
    //                 >
    //                   {link.label}
    //                 </a>
    //               ))}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Terms & Conditions */}
    //     <div className="mt-8">
    //       <a
    //         href="/terms"
    //         className="text-global-3 font-satoshi font-medium text-sm leading-5 hover:text-global-5 transition-colors"
    //       >
    //         Terms & Conditions
    //       </a>
    //     </div>
    //   </div>

    //   {/* Bottom Footer */}
    //   <div className="bg-global-3 px-16 py-6">
    //     <div className="flex items-center justify-between">
    //       <span className="text-global-1 font-satoshi font-medium text-sm leading-5">
    //         @2024 Stelliteworks. All Rights Reserved.
    //       </span>

    //       {/* Social Media Icons */}
    //       <div className="flex space-x-4">
    //         {socialIcons.map((icon, index) => (
    //           <button
    //             key={index}
    //             className="w-13 h-9 bg-global-2 border border-primary rounded-lg flex items-center justify-center hover:bg-global-3 transition-colors"
    //           >
    //             <img 
    //               src={icon.src} 
    //               alt={icon.alt}
    //               className="w-5 h-5"
    //             />
    //           </button>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </footer>
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
                      href="/services"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="/testimonials"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Testimonials
                    </a>
                    <a
                      href="/faq"
                      className="block text-base font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      FAQ's
                    </a>
                    <a
                      href="/terms"
                      className="block text-sm font-satoshi font-medium text-global-3 hover:text-global-5 transition-colors"
                    >
                      Terms & Conditions
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
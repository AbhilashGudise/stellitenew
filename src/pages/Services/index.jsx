import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import React from 'react';

const ServiceCard = ({ title, description, image }) => (
  <div className="bg-[#161514] rounded-xl p-6 flex flex-col gap-4 w-full mb-6">
    <h4 className="text-xl font-semibold text-[#f0f0f0]">{title}</h4>
    <p className="text-[#c0c0bf]">{description}</p>
    {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-2" />}
  </div>
);

const ServicesPage = () => {
  return (
    <div className="bg-[#020100] min-h-screen text-white overflow-x-hidden w-full">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute h-[958px] left-0 opacity-50 overflow-hidden top-0 w-[1703px]">
          <div className="absolute bottom-[0.554%] left-0 right-0 top-[1.775%]">
            <div className="absolute bottom-[-0.08%] left-[-0.044%] right-[-0.044%] top-[-0.08%]">
              {/* SVG removed */}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <section className="relative shrink-0 w-full bg-[#020100]" 
      style={{
          backgroundImage: 'url(/images/img_bg_elements.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-16">
          {/* Gradient Overlay */}
          <div className="absolute bg-gradient-to-b from-transparent via-transparent to-[#000000] h-[856px] left-0 top-0 w-full opacity-90 pointer-events-none" />

          {/* Header Content */}
          <div className="relative z-10 w-full">
            <div className="flex flex-col md:flex-row items-end justify-between w-full gap-8 pt-20">
              <div className="text-[#f0f0f0] text-[40px] md:text-[73px] font-semibold leading-none">
                <p className="block mb-0">Engineering</p>
                <p className="block">Tomorrow</p>
              </div>
              <div className="text-[#c0c0bf] text-[18px] max-w-xl md:w-[707px]">
                <p className="block leading-[1.6]">
                  StelliteWorks delivers innovative engineering, construction, and technology
                  solutions for the modern world. Our mission is to create sustainable,
                  high-performance environments that empower communities and industries to thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="bg-center bg-cover bg-no-repeat h-[320px] md:h-[639px] rounded-2xl shrink-0 w-full relative z-10 mt-8"
            style={{
              backgroundImage: 'url("/images/image_02.png")',
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#020100] relative shrink-0 w-full">
        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="box-border flex flex-col md:flex-row gap-12 md:gap-36 items-start justify-start pb-[88px] pt-16 md:pt-32 w-full">
            {/* Left Column */}
            <div className="w-full md:w-auto md:max-w-[400px] flex-shrink-0">
              <div className="flex flex-col gap-12 h-full items-start justify-start">
                <div className="text-[#f0f0f0] text-[32px] md:text-[59px] font-semibold leading-none whitespace-pre">
                  <p className="block mb-0">StelliteWorks</p>
                  <p className="block">Expertise</p>
                </div>
                <div className="bg-global-4 rounded-lg w-full ">
                  <Button
                    variant="primary"
                    className="w-full bg-global-4 text-global-3 "
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 min-w-[0]">
              <div className="flex flex-col gap-14 items-start justify-start w-full">
                <div className="text-[#c0c0bf] text-[18px] w-full">
                  <p className="block leading-[1.6]">
                    StelliteWorks provides a full spectrum of engineering, construction, and
                    technology services. Our team partners with clients to deliver sustainable,
                    high-performance solutions that shape the future of communities and industries.
                  </p>
                </div>
                <ServiceCard
                  title="Smart Infrastructure"
                  description="We design and implement intelligent infrastructure systems that enhance efficiency, safety, and sustainability for urban and industrial environments."
                  image="/images/image_02.png"
                />
                <ServiceCard
                  title="Sustainable Communities"
                  description="Our experts create vibrant, eco-friendly communities with integrated green spaces, energy solutions, and advanced connectivity for modern living."
                  image="/images/image_03.png"
                />
                <ServiceCard
                  title="Modernization & Renovation"
                  description="StelliteWorks transforms existing spaces with innovative upgrades, ensuring buildings and facilities meet the highest standards of comfort, technology, and energy performance."
                  image="/images/image_04.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="bg-global-4 py-20 rounded-2xl mx-16 mb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/img_vector_375x365.png"
            alt="Background pattern left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-auto h-full opacity-20"
          />
          <img
            src="/images/img_vector_390x363.png"
            alt="Background pattern right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-auto h-full opacity-20"
          />
        </div>
        <div className="relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <h2 className="text-7xl font-clash-display font-semibold text-global-3">Let's</h2>
              <h2 className="text-7xl font-clash-display font-semibold text-global-3">Build</h2>
              <img src="/images/img_vector_black_900.svg" alt="Arrow" className="w-12 h-23" />
              <h2 className="text-7xl font-clash-display font-semibold text-global-3">Something</h2>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <h2 className="text-7xl font-clash-display font-semibold text-global-3">
                Extraordinary
              </h2>
              <h2 className="text-7xl font-clash-display font-semibold text-global-3">Together</h2>
            </div>
          </div>
          <Button variant="primary" className="bg-global-2 border border-primary">
            View our projects
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;

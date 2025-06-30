import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';

const ProjectsPage = () => {
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
      <section className="relative pt-24 pb-12 px-4 md:px-16 max-w-[1440px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-75 pointer-events-none" />

        {/* Map Container */}
        <div className="relative w-full max-w-[1312px] h-[300px] sm:h-[400px] md:h-[675px] mx-auto mb-[-48px] rounded-2xl overflow-hidden">
          <img src="https://i.pinimg.com/736x/af/a4/aa/afa4aa8bfa8dc949adcc83f5df708cef.jpg" alt="City Map" className="w-full h-full object-cover" />

          {/* Project Markers */}
          <div className="absolute top-[60%] left-[80%] bg-[rgba(217,217,217,0.45)] backdrop-blur-md border border-[#c0c0bf] rounded-lg px-4 md:px-6 py-2 md:py-4 min-w-[90px] md:min-w-[120px]">
            <span className="text-[#020100] font-bold text-xs md:text-base">The Project</span>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#020100] rounded-full" />
          </div>
          <div className="absolute top-[40%] left-[6%] bg-[rgba(217,217,217,0.45)] backdrop-blur-md border border-[#c0c0bf] rounded-lg px-4 md:px-6 py-2 md:py-4 min-w-[90px] md:min-w-[120px]">
            <span className="text-[#020100] font-bold text-xs md:text-base">Idea</span>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#020100] rounded-full" />
          </div>
          <div className="absolute top-[20%] left-[29%] bg-[rgba(217,217,217,0.45)] backdrop-blur-md border border-[#c0c0bf] rounded-lg px-4 md:px-6 py-2 md:py-4 min-w-[90px] md:min-w-[120px]">
            <span className="text-[#020100] font-bold text-xs md:text-base">The Business Hub</span>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#020100] rounded-full" />
          </div>
          <div className="absolute top-[35%] left-[58%] bg-[rgba(217,217,217,0.45)] backdrop-blur-md border border-[#c0c0bf] rounded-lg px-4 md:px-6 py-2 md:py-4 min-w-[90px] md:min-w-[120px]">
            <span className="text-[#020100] font-bold text-xs md:text-base">Development</span>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#020100] rounded-full" />
          </div>
          <div className="absolute top-[85%] left-[53%] bg-[rgba(217,217,217,0.45)] backdrop-blur-md border border-[#c0c0bf] rounded-lg px-4 md:px-6 py-2 md:py-4 min-w-[90px] md:min-w-[120px]">
            <span className="text-[#020100] font-bold text-xs md:text-base">Lauch</span>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#020100] rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-[#020100] border-t border-[#020100] py-12 md:py-32 px-4 md:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="mb-10 md:mb-[42px]">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8">
              <div className="w-[38px] h-[38px]">{/* SVG removed */}</div>
              <h2 className="text-3xl sm:text-5xl md:text-[59px] font-semibold text-[#f0f0f0] leading-tight">
                Our Exceptional Projects
              </h2>
            </div>
            <div className="max-w-full md:max-w-[796px]">
              <p className="text-base md:text-[18px] text-[#c0c0bf] leading-[1.6]">
                Explore our portfolio to see the breadth and quality of our work, and get inspired
                to start your own dream project.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8 mb-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Projects 1 */}
              <div className="bg-[#020100] border border-[#282726] rounded-2xl p-6">
                <img
                  src="/images/image_02.png"
                  alt="The Grand Estate"
                  className="w-full h-[300px] object-cover rounded-2xl mb-8"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[24px] font-medium text-[#f0f0f0] mb-2">
                      The Grand Estate
                    </h3>
                    <p className="text-[16px] text-[#c0c0bf] leading-[1.5]">
                      StelliteWorks Innovation Park is a cutting-edge campus designed for technology
                      startups and research labs, featuring collaborative workspaces, green energy
                      solutions, and a vibrant tech community.
                    </p>
                  </div>
                  {/* <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#8d8d8c]">Upper Macungie Township, PA</span>
                    </div>
                    <div className="bg-[#161514] border border-[#282726] rounded-lg px-4 py-2 inline-block">
                      <span className="text-[12px] text-[#c0c0bf]">Movie theater</span>
                    </div>
                  </div> */}
                  <Button
                    variant="primary"
                    className="w-full bg-global-4 text-global-3 "
                  >
                    View
                  </Button>
                </div>
              </div>

              {/* Projects 2 */}
              <div className="bg-[#020100] border border-[#282726] rounded-2xl p-6">
                <img
                  src="/images/image_03.png"
                  alt="The Business Hub"
                  className="w-full h-[300px] object-cover rounded-2xl mb-8"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[24px] font-medium text-[#f0f0f0] mb-2">
                      The Business Hub
                    </h3>
                    <p className="text-[16px] text-[#c0c0bf] leading-[1.5]">
                      The Business Hub is a state-of-the-art commercial office space designed to
                      meet the needs of modern businesses.
                    </p>
                  </div>
                  {/* <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#8d8d8c]">Upper Macungie Township, PA</span>
                    </div>
                    <div className="bg-[#161514] border border-[#282726] rounded-lg px-4 py-2 inline-block">
                      <span className="text-[12px] text-[#c0c0bf]">High-speed Wi-Fi</span>
                    </div>
                  </div> */}
                  <Button
                    variant="primary"
                    className="w-full bg-global-4 text-global-3 "
                  >
                    View
                  </Button>
                </div>
              </div>

              {/* Projects 3 */}
              <div className="bg-[#020100] border border-[#282726] rounded-2xl p-6">
                <img
                  src="/images/image_04.png"
                  alt="The Village"
                  className="w-full h-[300px] object-cover rounded-2xl mb-8"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[24px] font-medium text-[#f0f0f0] mb-2">The Village</h3>
                    <p className="text-[16px] text-[#c0c0bf] leading-[1.5]">
                      The Village is a community development featuring a mix of residential and
                      commercial spaces, designed to create a vibrant and sustainable community.
                    </p>
                  </div>
                  {/* <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#8d8d8c]">Upper Macungie Township, PA</span>
                    </div>
                    <div className="bg-[#161514] border border-[#282726] rounded-lg px-4 py-2 inline-block">
                      <span className="text-[12px] text-[#c0c0bf]">Green spaces</span>
                    </div>
                  </div> */}
                  <Button
                    variant="primary"
                    className="w-full bg-global-4 text-global-3 "
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Projects 4 */}
              <div className="bg-[#020100] border border-[#282726] rounded-2xl p-6">
                <img
                  src="/images/image_02.png"
                  alt="The Skyline"
                  className="w-full h-[300px] object-cover rounded-2xl mb-8"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[24px] font-medium text-[#f0f0f0] mb-2">The Skyline</h3>
                    <p className="text-[16px] text-[#c0c0bf] leading-[1.5]">
                      The Skyline is a stunning condominium development featuring 20 high-end units
                      with breathtaking views of the city skyline.
                    </p>
                  </div>
                  {/* <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#8d8d8c]">Upper Macungie Township, PA</span>
                    </div>
                    <div className="bg-[#161514] border border-[#282726] rounded-lg px-4 py-2 inline-block">
                      <span className="text-[12px] text-[#c0c0bf]">Movie theater</span>
                    </div>
                  </div> */}
                  <Button
                    variant="primary"
                    className="w-full bg-global-4 text-global-3 "
                  >
                    View
                  </Button>
                </div>
              </div>

              {/* Projects 5 */}
              <div className="bg-[#020100] border border-[#282726] rounded-2xl p-6">
                <img
                  src="/images/image_03.png"
                  alt="The Old Mill"
                  className="w-full h-[300px] object-cover rounded-2xl mb-8"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[24px] font-medium text-[#f0f0f0] mb-2">The Old Mill</h3>
                    <p className="text-[16px] text-[#c0c0bf] leading-[1.5]">
                      A historic renovation project that has transformed a former industrial site
                      into a vibrant, mixed-use development.
                    </p>
                  </div>
                  {/* <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#8d8d8c]">Upper Macungie Township, PA</span>
                    </div>
                    <div className="bg-[#161514] border border-[#282726] rounded-lg px-4 py-2 inline-block">
                      <span className="text-[12px] text-[#c0c0bf]">High-speed Wi-Fi</span>
                    </div>
                  </div> */}
                  <Button
                    variant="primary"
                    className="w-full bg-global-4 text-global-3 "
                  >
                    View
                  </Button>
                </div>
              </div>

              {/* Projects 6 */}
              <div className="bg-[#020100] border border-[#282726] rounded-2xl p-6">
                <img
                  src="/images/image_04.png"
                  alt="The Village"
                  className="w-full h-[300px] object-cover rounded-2xl mb-8"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[24px] font-medium text-[#f0f0f0] mb-2">The Village</h3>
                    <p className="text-[16px] text-[#c0c0bf] leading-[1.5]">
                      The Village is a community development featuring a mix of residential and
                      commercial spaces, designed to create a vibrant and sustainable community.
                    </p>
                  </div>
                  {/* <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#8d8d8c]">Upper Macungie Township, PA</span>
                    </div>
                    <div className="bg-[#161514] border border-[#282726] rounded-lg px-4 py-2 inline-block">
                      <span className="text-[12px] text-[#c0c0bf]">Green spaces</span>
                    </div>
                  </div> */}
                  <Button
                    variant="primary"
                    className="w-full bg-global-4 text-global-3 "
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="text-center">
            <button className="bg-[#161514] border border-[#282726] rounded-lg px-6 py-4">
              <span className="text-base md:text-[18px] font-medium text-[#f0f0f0]">See More</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-global-4 py-10 md:py-20 rounded-2xl mx-4 md:mx-16 mb-10 md:mb-20 relative overflow-hidden">
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
        <div className="relative z-10 text-center space-y-6 md:space-y-8 px-2 overflow-x-hidden">
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-clash-display font-semibold text-global-3 text-center break-words">
                Let's
              </h2>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-clash-display font-semibold text-global-3 text-center break-words">
                Build
              </h2>
              <img src="/images/img_vector_black_900.svg" alt="Arrow" className="w-8 md:w-12 h-8 md:h-23" />
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-clash-display font-semibold text-global-3 text-center break-words">
                Something
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-clash-display font-semibold text-global-3 text-center break-words">
                Extraordinary
              </h2>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-clash-display font-semibold text-global-3 text-center break-words">
                Together
              </h2>
            </div>
          </div>
          <Button variant="primary" className="bg-global-2 border border-primary mt-4">
            View our projects
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;

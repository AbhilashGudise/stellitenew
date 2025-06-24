import React, { useState } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';

const newsList = [
  {
    title: 'StelliteWorks Launches Smart Infrastructure Initiative',
    tag: 'Smart Tech',
    date: 'June 20, 2025',
    image: '/images/img_image.png',
    summary:
      'StelliteWorks announces a new initiative to develop smart infrastructure solutions for urban and industrial clients, focusing on sustainability, efficiency, and next-generation technology.',
  },
  {
    title: 'StelliteWorks Achieves LEED Platinum for Urban Renewal Project',
    tag: 'Sustainability',
    date: 'May 15, 2025',
    image: '/images/img_image.png',
    summary:
      'StelliteWorks has been awarded LEED Platinum certification for its flagship urban renewal project, demonstrating leadership in sustainable design, energy efficiency, and environmental stewardship in modern construction.',
  },
  {
    title: 'Expanding to New Markets',
    tag: 'Growth',
    date: 'April 2, 2025',
    image: '/images/img_image.png',
    summary:
      'StelliteWorks is expanding its operations to new regions, bringing innovative engineering, construction, and technology services to empower more communities and industries.',
  },
];

const NewsPage = () => {
  const [current, setCurrent] = useState(0);

  // Show 2 cards at a time
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? Math.max(newsList.length - 2, 0) : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev >= newsList.length - 2 ? 0 : prev + 1));

  // Get the two news items to display
  const visibleNews =
    newsList.length > 1
      ? [newsList[current], newsList[(current + 1) % newsList.length]]
      : [newsList[0]];

  return (
    <div className="bg-[#020100] min-h-screen text-white overflow-x-hidden w-full">
      <Header />
      <div className="relative w-full min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/img_bg_elements.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        <div className="relative z-10 px-16 pt-40">
          <div className="flex justify-between items-start mb-24">
            <h1 className="text-global-3 font-clash-display font-semibold text-[73px] leading-[73px] max-w-[528px]">
              Get The Latest News
            </h1>
            <p className="text-global-2 font-satoshi font-normal text-lg leading-7 max-w-[707px] mt-14">
              Stay up to date with StelliteWorks’ latest achievements, innovations, and industry
              news. Discover how we’re shaping the future of engineering, construction, and
              technology for a sustainable tomorrow.
            </p>
          </div>

          {/* Carousel */}
          <div className="flex items-center justify-center py-8">
            <button
              onClick={prevSlide}
              className="bg-[#232221] border-2 border-[#ffb877] rounded-full w-20 h-20 flex items-center justify-center text-4xl mr-12 shadow-lg hover:bg-[#282726] transition"
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left text-[#ffb877]"></i>
            </button>
            <div className="flex gap-12">
              {visibleNews.map((news, idx) => (
                <div
                  key={idx}
                  className="flex bg-gradient-to-br from-[#232221] to-[#161514] border-2 border-[#282726] rounded-3xl shadow-2xl w-[440px] max-w-full overflow-hidden flex-col md:flex-row transition-transform duration-300 hover:scale-105"
                >
                  {/* Image Left */}
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-[220px] md:w-[200px] md:h-[320px] object-cover rounded-2xl m-4 md:m-4 shadow-lg"
                  />
                  {/* Content Right */}
                  <div className="flex flex-col justify-between p-8 flex-1">
                    <div>
                      <span className="bg-[#ffb877] text-[#232221] text-xs px-4 py-1 rounded-full mb-4 inline-block font-bold tracking-wide shadow">
                        {news.tag}
                      </span>
                      <h3 className="text-2xl font-bold text-[#f0f0f0] mb-3 font-clash-display">
                        {news.title}
                      </h3>
                      <p className="text-[#c0c0bf] text-base mb-6">{news.summary}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#8d8d8c] mt-4">
                      <span className="flex items-center gap-2">
                        <i className="far fa-calendar-alt text-[#ffb877]"></i>
                        {news.date}
                      </span>
                      <a
                        href="#"
                        className="text-[#ffb877] underline hover:text-[#fff] font-semibold transition"
                      >
                        Read More...
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-[#232221] border-2 border-[#ffb877] rounded-full w-20 h-20 flex items-center justify-center text-4xl ml-12 shadow-lg hover:bg-[#282726] transition"
              aria-label="Next"
            >
              <i className="fas fa-chevron-right text-[#ffb877]"></i>
            </button>
          </div>
          {/* Carousel Indicator */}
          <div className="flex justify-center mt-6 text-[#c0c0bf] text-sm">
            {String(current + 1).padStart(2, '0')}/{String(newsList.length).padStart(2, '0')}
          </div>

          {/* News Grid Section */}
          <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-20">
            <div className="flex items-center mb-10">
              <img src="/images/img_vector.svg" alt="Latest News Icon" className="w-10 h-10 mr-4" />
              <h2 className="text-5xl md:text-6xl font-clash-display font-semibold text-[#f0f0f0]">
                Latest News
              </h2>
              <div className="ml-auto flex gap-4">
                <button className="bg-[#232221] text-[#f0f0f0] px-6 py-2 rounded-lg font-semibold border border-[#282726] focus:bg-[#ffb877] focus:text-[#232221] transition">
                  ALL
                </button>
                <button className="bg-[#161514] text-[#c0c0bf] px-6 py-2 rounded-lg font-semibold border border-[#282726] hover:bg-[#232221] transition">
                  Smart Tech
                </button>
                <button className="bg-[#161514] text-[#c0c0bf] px-6 py-2 rounded-lg font-semibold border border-[#282726] hover:bg-[#232221] transition">
                  Sustainability
                </button>
                <button className="bg-[#161514] text-[#c0c0bf] px-6 py-2 rounded-lg font-semibold border border-[#282726] hover:bg-[#232221] transition">
                  Growth
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsList.map((news, i) => (
                <div
                  key={i}
                  className="bg-[#161514] border border-[#282726] rounded-2xl p-4 shadow-lg flex flex-col"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-[220px] object-cover rounded-xl mb-4"
                  />
                  <span className="bg-[#232221] text-[#c0c0bf] text-xs px-3 py-1 rounded-full mb-2 inline-block">
                    {news.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">{news.title}</h3>
                  <p className="text-[#c0c0bf] text-sm mb-4">{news.summary}</p>
                  <div className="flex items-center justify-between text-xs text-[#8d8d8c] mt-auto">
                    <span className="flex items-center gap-2">
                      <i className="far fa-calendar-alt"></i>
                      {news.date}
                    </span>
                    <a href="#" className="text-[#f0f0f0] underline hover:text-[#ffb877]">
                      Read more...
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

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
      <Footer />
    </div>
  );
};

export default NewsPage;

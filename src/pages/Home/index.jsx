import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import Footer from '@/components/common/Footer';

const Home = () => {
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState('Residential');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/a4/eb/c1/a4ebc1fd26da5fd5be7e7e85459eab90.jpg',
      title: 'IT Staffing & Recruiting',
      description:
        'End-to-end IT talent acquisition and workforce solutions, powered by data-driven search and AI-enabled vetting for global enterprises.',
      location: 'Lake Orion, MI & Hyderabad, India',
      feature: 'Specialized SAP & Tech Talent',
    },
    {
      id: 2,
      // image: 'https://i.pinimg.com/736x/4d/7b/10/4d7b103424b6f8b4baa89a8eda726c09.jpg', 
      image: '/images/sap_1.png',
      title: 'SAP Solutions',
      description:
        'Comprehensive SAP services including EWM, S/4HANA migration, and ongoing support for enterprise digital transformation.',
      location: 'USA & India',
      feature: 'SAP EWM & S/4HANA Experts',
    },
    {
      id: 3,
      // image: 'https://i.pinimg.com/736x/b4/07/3a/b4073ae822c46bc169e18a42f49bba08.jpg',
      image: 'https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg',
      title: 'IT Consulting',
      description:
        'Strategic guidance for enterprise software integration, digital transformation, and process automation to drive business growth.',
      location: 'Global',
      feature: 'Digital Transformation',
    },
  ];

  const services = {
    Residential: [
      {
        id: 1,
        // image: 'https://i.pinimg.com/736x/07/d8/1b/07d81bf19264db8187850432e4b93454.jpg', 
        image:'/images/image_04.png',
        title: 'IT Staffing & Recruiting',
        description:
          'End-to-end IT talent acquisition and workforce solutions, powered by data-driven search and AI-enabled vetting.',
      },
      {
        id: 2,
        image: ' https://i.pinimg.com/736x/31/5e/7d/315e7dd66d47a2fc0029aa7c3f3445c1.jpg', 
        title: 'SAP Solutions',
        description:
          'Comprehensive SAP services including EWM, S/4HANA migration, and ongoing support for enterprise transformation.',
      },
      {
        id: 3,
        // image: 'https://i.pinimg.com/736x/73/56/11/735611de2fe8637bde882dae24112fce.jpg ',
        image:'/images/image_02.png',
        title: 'IT Consulting',
        description:
          'Strategic guidance for enterprise software integration, digital transformation, and process automation.',
      },
      {
        id: 4,
        // image: 'https://i.pinimg.com/736x/e6/8f/9e/e68f9ebf7402675444908f6bb184fb8c.jpg', 
         image:'/images/image_03.png',
        title: 'Software Development & SaaS',
        description:
          'Custom web/mobile app development, cloud-native SaaS platforms, and automation tools for modern businesses.',
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      image: '/images/img_rectangle_12_100x100.png',
      quote:
        'Stellite Works provided us with top-tier SAP consultants who accelerated our S/4HANA migration. Their data-driven approach to IT staffing is unmatched.',
      author: 'Emily J. Smith, CIO, Global Manufacturing Inc.',
    },
    {
      id: 2,
      image: '/images/img_rectangle_12_1.png',
      quote:
        'Their team delivered a robust cloud-native SaaS platform for our logistics operations. The project was on time and exceeded our expectations.',
      author: 'Michael Chen, CTO, SupplyChainPro',
    },
    {
      id: 3,
      image: '/images/img_rectangle_12_2.png',
      quote:
        'We rely on Stellite Works for ongoing SAP EWM support and IT recruiting. Their expertise and responsiveness are a true asset.',
      author: 'Priya Sharma, IT Director, Retail Solutions',
    },
    {
      id: 4,
      image: '/images/img_rectangle_12_3.png',
      quote:
        'From digital transformation consulting to mobile app development, Stellite Works is our go-to partner for all things IT.',
      author: 'Raj Patel, VP Technology, FinEdge',
    },
  ];

  const newsArticles = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/cd/b2/2f/cdb22f16d269a818adca408511adc0f1.jpg',
      category: 'IT Trends',
      title: '5 Ways to Attract Top IT Talent in 2025',
      date: 'May 10, 2025',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/48/b9/4f/48b94fa7adcd8e66d1ec794c7bfb8d5c.jpg',
      category: 'SAP Insights',
      title: 'How to Prepare for a Successful SAP S/4HANA Migration',
      date: 'Jun 1, 2025',
    },
  ];

  const faqData = [
    {
      id: 1,
      question: 'What services does Stellite Works provide?',
      answer:
        'We offer IT staffing, SAP consulting, software development, and digital transformation services for enterprises in the U.S. and India.',
    },
    {
      id: 2,
      question: 'Where are your offices located?',
      answer:
        'Our U.S. offices are in Lake Orion, MI; Auburn Hills, MI; McLean, VA; and San Jose, CA. In India, we are based in Hyderabad, Telangana.',
    },
    {
      id: 3,
      question: 'What is your approach to IT staffing?',
      answer:
        'We use a data-driven, AI-enabled process for sourcing, vetting, and placing top IT talent, ensuring the right fit for every client.',
    },
    {
      id: 4,
      question: 'Do you offer SAP S/4HANA migration and support?',
      answer:
        'Yes, our SAP team specializes in S/4HANA migration, EWM, and ongoing SAP support for enterprise clients.',
    },
  ];

  const handleProjectNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentProjectSlide((prev) => (prev + 1) % featuredProjects.length);
    } else {
      setCurrentProjectSlide(
        (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
      );
    }
  };

  const handleNewsNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentNewsSlide((prev) => (prev + 1) % newsArticles.length);
    } else {
      setCurrentNewsSlide((prev) => (prev - 1 + newsArticles.length) % newsArticles.length);
    }
  };

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const RatingStars = ({ rating = 5 }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative">
            <div className="w-4 h-4 border border-yellow-500 rounded-sm ">
              {index < rating && (
                <img
                  src="/images/img_star_7.png"
                  alt="star"
                  className="w-3 h-2 absolute top-0.5 left-0.5"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-global-1">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-global-1"
        style={{
          backgroundImage: 'url(/images/img_bg_elements.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0  bg-opacity-80"></div>
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-16 flex items-center justify-between">
            {/* Left Content */}
            <div className="w-1/2 space-y-8">
              <h1 className="text-7xl font-clash-display font-semibold leading-tight text-global-3">
                Stellite Works IT Talent & SAP Solutions
              </h1>
              <p className="text-xl font-satoshi text-global-2 leading-8 max-w-2xl">
                U.S.-based IT consulting and staffing firm specializing in SAP, software
                development, and digital transformation. Serving clients across the U.S. and India
                with data-driven talent and enterprise solutions.
              </p>
              <div className="flex space-x-6">
                <Button variant="primary" className="bg-global-4 text-global-3 ">
                  Start your Transformation
                </Button>
                <Button variant="secondary">View Our Projects</Button>
              </div>
            </div>

            {/* Right Content - Building Image */}
            <div className="w-1/2 relative">
              <img
                src="/images/technology_3.png"
                alt="Modern building"
                className="w-full h-auto rounded-lg"
              />

              {/* Floating Testimonial Cards */}
              {/* <div className="absolute top-16 right-0 bg-gradient-to-br from-gray-300/50 to-gray-400/50 backdrop-blur-sm border border-gray-300/80 rounded-2xl p-6 w-80 shadow-lg">
                <div className="flex items-start space-x-4">
                  <img
                    src="/images/img_ellipse_6_51x52.png"
                    alt="Client"
                    className="w-11 h-11 rounded-full"
                  />
                  <div className="flex-1">
                    <RatingStars />
                    <p className="text-sm font-satoshi font-medium text-global-4 mt-2 leading-5">
                      Stellite Works delivered outstanding SAP consultants who transformed our IT
                      operations.
                    </p>
                    <p className="text-xs font-satoshi font-bold text-global-4 mt-2">
                      Emily J. Smith | CIO, Global Manufacturing Inc.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute bottom-32 -left-8 bg-gradient-to-br from-gray-300/50 to-gray-400/50 backdrop-blur-sm border border-gray-300/80 rounded-2xl p-4 w-80 shadow-lg">
                <div className="flex items-start space-x-4">
                  <img
                    src="/images/img_ellipse_6.png"
                    alt="Client"
                    className="w-13 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <RatingStars />
                    </div>
                    <p className="text-sm font-satoshi font-medium text-global-4 leading-5">
                      Stellite Works is my go-to partner for IT staffing and SAP solutions. Their
                      expertise is unmatched.
                    </p>
                    <p className="text-xs font-satoshi font-bold text-global-4 mt-2">
                      James | CTO, Tech Innovations
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* We're Building Communities Section */}
      <section className="relative bg-global-4 py-20">
        <div className="absolute inset-0">
          <img
            src="/images/img_vector_909x911.png"
            alt="Background pattern"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-auto h-full opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-16">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <h2 className="text-9xl font-clash-display font-semibold text-global-3">
                  Comprehensive <br />
                  Technology
                </h2>
                {/* <div className="w-30 h-12 bg-global-1 border-8 border-global-1 rounded-6 shadow-sm"></div> */}
                {/* <h2 className="text-9xl font-clash-display font-semibold text-global-3">
                  Technology
                </h2> */}
              </div>
              <h2 className="text-9xl font-clash-display font-semibold text-global-3">Solutions</h2>
            </div>
            <p className="text-lg font-satoshi font-medium text-global-5 leading-7 max-w-3xl mx-auto">
              {/* With a commitment to excellence and a focus on innovation, we've established ourselves as a leader in the real estate and construction industry. */}
              Four core pillars of excellence delivering measurable results across enterprise
              technology challenges
            </p>
            <Button variant="primary" className="bg-global-2 border border-primary">
              Learn More About Us...
            </Button>

            {/* Client Rating */}
            <div className="flex items-center justify-center space-x-8 pt-8">
              <img
                src="/images/img_client_images_42x120.png"
                alt="Client images"
                className="w-30 h-11"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RatingStars />
                </div>
                <p className="text-base font-satoshi text-global-5">
                  4.3/5 Rated by 300+ Professionals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Images */}
        {/* <img
          src="/images/img_image_292x234.png"
          alt="Construction site"
          className="absolute top-32 right-12 w-58 h-73 rounded-2xl"
        />
        <img
          src="/images/img_image_291x247.png"
          alt="Building exterior"
          className="absolute bottom-20 left-14 w-73 h-62 rounded-2xl"
        /> */}
      </section>

      {/* Featured Projects Section */}
      <section className="bg-global-1 py-20">
        <div className="container mx-auto px-16">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-4 max-w-4xl">
              <img
                src="/images/img_vector_deep_orange_a400_38x38.svg"
                alt="Icon"
                className="w-10 h-10"
              />
              <h2 className="text-6xl font-clash-display font-semibold text-global-3">
                Our Core Services
              </h2>
            </div>
            <Button variant="primary" className="bg-global-2 border border-primary">
              View all Projects
            </Button>
          </div>

          {/* <p className="text-lg font-satoshi text-global-2 leading-7 max-w-4xl mb-16">
            we've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.
          </p> */}

          <p className="text-lg font-satoshi text-global-2 leading-7 max-w-4xl mb-16">
            We’ve built a reputation for delivering exceptional IT results and exceeding our
            clients’ expectations. From advanced SAP implementations to innovative web and mobile
            applications, our team of experts is dedicated to driving your digital transformation.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-global-1 border border-primary rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-75 object-cover rounded-2xl mb-6"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-clash-display font-medium text-global-3">
                      {project.title}
                    </h3>
                    <p className="text-base font-satoshi text-global-2 leading-6">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/images/img_vector_blue_gray_400.svg"
                        alt="Location"
                        className="w-3 h-3"
                      />
                      <span className="text-sm font-satoshi text-global-1">{project.location}</span>
                    </div>
                    <div className="inline-block">
                      <span className="text-xs font-satoshi text-global-2 bg-global-2 border border-primary rounded-lg px-4 py-2">
                        {project.feature}
                      </span>
                    </div>
                    <Button
                      variant="primary"
                      className="w-full bg-global-4 text-global-3 "
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-base font-satoshi font-medium text-global-3">01</span>
              <span className="text-base font-satoshi font-medium text-global-1">/03</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleProjectNavigation('prev')}
                className="w-11 h-11 border border-primary rounded-md flex items-center justify-center"
              >
                <img src="/images/img_button.svg" alt="Previous" className="w-11 h-11" />
              </button>
              <button
                onClick={() => handleProjectNavigation('next')}
                className="w-11 h-11 bg-global-2 border border-primary rounded-md flex items-center justify-center"
              >
                <img src="/images/img_button_gray_200.svg" alt="Next" className="w-11 h-11" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Service Section */}
      <section className="bg-global-1 py-20">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <h2 className="text-6xl font-clash-display font-semibold text-global-3">
                Why Choose Stellite Works?
              </h2>
              <img
                src="/images/img_vector_deep_orange_a400_38x39.svg"
                alt="Icon"
                className="w-10 h-10"
              />
            </div>

            <p className="text-lg font-satoshi text-global-2 leading-7 max-w-3xl mx-auto">
              We combine rigorous talent vetting, AI-driven recruiting, and deep SAP expertise to
              deliver measurable results. From IT staffing to S/4HANA migration, our solutions are
              tailored for your business growth.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-global-2 rounded-lg p-2 flex space-x-2">
              {['Recruit', 'Expertise in SAP Staffing', 'Services', 'Development'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveServiceTab(tab)}
                  className={`px-6 py-3 rounded-lg font-satoshi font-medium text-sm transition-colors ${
                    activeServiceTab === tab
                      ? 'bg-global-1 text-global-3 border border-primary'
                      : 'bg-global-2 text-global-3 border border-primary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services[activeServiceTab]?.map((service) => (
              <div
                key={service.id}
                className="bg-global-1 border border-primary rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-75 object-cover rounded-2xl mb-6"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-clash-display font-medium text-global-3">
                      {service.title}
                    </h3>
                    <p className="text-base font-satoshi text-global-2 leading-6">
                      {service.description}
                    </p>
                    <button className="text-sm font-satoshi font-medium text-global-3 border-b border-global-3 hover:text-global-2 transition-colors">
                      Learn more...
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-global-1 py-20">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <h2 className="text-6xl font-clash-display font-semibold text-global-3">
                What Our Clients Say
              </h2>
              <img src="/images/img_vector_deep_orange_a400.svg" alt="Icon" className="w-15 h-10" />
            </div>
            <p className="text-lg font-satoshi text-global-2 leading-7 max-w-3xl mx-auto mb-8">
              At Stellite, we're not just building Application - we're building relationships.
              Here's what some of our satisfied clients have to say about their experience with us.
            </p>

            {/* Client Rating */}
            <div className="flex items-center justify-center space-x-8">
              <img src="/images/img_client_images.png" alt="Client images" className="w-30 h-11" />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RatingStars />
                </div>
                <p className="text-base font-satoshi text-global-1">
                  4.3/5 Rated by 300+ Professionals
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(0, 2).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border border-primary rounded-2xl p-6 flex space-x-6"
                >
                  <img
                    src={testimonial.image}
                    alt="Client"
                    className="w-20 h-20 rounded-xl flex object-cover" // Changed from w-15 h-15 to w-16 h-16 for clarity, but you can use w-12 h-12 or w-10 h-10 for smaller images
                  />
                  <div className="flex-1 space-y-4">
                    <div className="bg-global-1 rounded-lg p-6">
                      <p className="text-lg font-satoshi font-bold text-global-3 leading-9 mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-lg font-satoshi text-global-2">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(2, 4).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border border-primary rounded-2xl p-6 flex space-x-6"
                >
                  <img
                    src={testimonial.image}
                    alt="Client"
                    className="w-20 h-20 rounded-xl flex object-cover" // Changed from w-15 h-15 to w-16 h-16 for clarity, but you can use w-12 h-12 or w-10 h-10 for smaller images
                  />
                  <div className="flex-1 space-y-4">
                    <div className="bg-global-1 rounded-lg p-6">
                      <p className="text-lg font-satoshi font-bold text-global-3 leading-9 mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-lg font-satoshi text-global-2">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-global-1 py-20">
        <div className="container mx-auto px-16">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-4 max-w-4xl">
              <img src="/images/img_vector_38x38.svg" alt="Icon" className="w-10 h-10" />
              <h2 className="text-6xl font-clash-display font-semibold text-global-3">
                Latest News
              </h2>
            </div>
            <Button variant="primary" className="bg-global-2 border border-primary">
              View all blog post
            </Button>
          </div>

          <p className="text-lg font-satoshi text-global-2 leading-7 max-w-4xl mb-16">
            We’ve built a reputation for delivering exceptional IT results and exceeding our
            clients’ expectations. From advanced SAP implementations to innovative web and mobile
            applications, our team of experts is dedicated to driving your digital transformation.
          </p>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="bg-global-1 border border-primary rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-75 object-cover rounded-2xl mb-6"
                  />
                  <div className="space-y-4">
                    <div className="inline-block">
                      <span className="text-xs font-satoshi text-global-2 bg-global-2 border border-primary rounded-lg px-4 py-2">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-clash-display font-medium text-global-3">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src="/images/img_uilcalendaralt.svg"
                          alt="Calendar"
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-satoshi font-medium text-global-1">
                          {article.date}
                        </span>
                      </div>
                      <button className="text-sm font-satoshi font-medium text-global-3 border-b border-global-3 hover:text-global-2 transition-colors">
                        Read More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-base font-satoshi font-medium text-global-3">01</span>
              <span className="text-base font-satoshi font-medium text-global-1">/03</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleNewsNavigation('prev')}
                className="w-11 h-11 border border-primary rounded-md flex items-center justify-center"
              >
                <img src="/images/img_button.svg" alt="Previous" className="w-11 h-11" />
              </button>
              <button
                onClick={() => handleNewsNavigation('next')}
                className="w-11 h-11 bg-global-2 border border-primary rounded-md flex items-center justify-center"
              >
                <img src="/images/img_button_gray_200.svg" alt="Next" className="w-11 h-11" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-global-1 py-20">
        <div className="container mx-auto px-16">
          <div className="flex items-center space-x-4 mb-16">
            <img src="/images/img_vector_1.svg" alt="Icon" className="w-10 h-10 rounded-lg" />
            <h2 className="text-6xl font-clash-display font-semibold text-global-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-global-1 border border-primary rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqData.map((faq) => (
                <div key={faq.id} className="border border-primary rounded-lg p-4">
                  <button onClick={() => toggleFAQ(faq.id)} className="w-full text-left">
                    <h3 className="text-2xl font-clash-display font-medium text-global-3 mb-4">
                      {faq.question}
                    </h3>
                  </button>
                  {expandedFAQ === faq.id && (
                    <p className="text-lg font-satoshi text-global-2 leading-7">{faq.answer}</p>
                  )}
                </div>
              ))}
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

export default Home;

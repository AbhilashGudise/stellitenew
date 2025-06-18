import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const About = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  const achievements = [
    { number: '10K', label: 'Clients' },
    { number: '500', label: 'Projects' },
    { number: '19', label: 'Languages' },
    { number: '1K+', label: 'Employees' }
  ];

  const awards = [
    { year: '2021', title: '"Sustainable Design Award" from (USGBC)' },
    { year: '2020', title: '"Builder of the Year" award' },
    { year: '2022', title: '"Top 50 Fastest-Growing Companies"' }
  ];

const testimonials = [
  {
    image: '/images/img_rectangle_12_100x100.png',
    quote: '"Stellite Works provided us with top-tier SAP consultants who accelerated our S/4HANA migration. Their data-driven approach to IT staffing is unmatched."',
    author: '- Emily J. Smith, CIO, Global Manufacturing Inc.'
  },
  {
    image: '/images/img_rectangle_12_1.png',
    quote: '"Their team delivered a robust cloud-native SaaS platform for our logistics operations. The project was on time and exceeded our expectations."',
    author: '- Michael Chen, CTO, SupplyChainPro'
  },
  {
    image: '/images/img_rectangle_12_2.png',
    quote: '"We rely on Stellite Works for ongoing SAP EWM support and IT recruiting. Their expertise and responsiveness are a true asset."',
    author: '- Priya Sharma, IT Director, Retail Solutions'
  },
  {
    image: '/images/img_rectangle_12_3.png',
    quote: '"From digital transformation consulting to mobile app development, Stellite Works is our go-to partner for all things IT."',
    author: '- Raj Patel, VP Technology, FinEdge'
  }
];

const teamMembers = [
  {
    image: '/images/img_rectangle_12.png',
    name: 'Suhas S.',
    position: 'Founder & CEO',
    description: 'With 20+ years in IT and SAP consulting, Suhas leads Stellite Works with a vision for innovation, quality, and global client success.'
  },
  {
    image: '/images/img_cardimage.png',
    name: 'Anjali Mehra',
    position: 'VP of Operations',
    description: 'Anjali ensures seamless project delivery and operational excellence, driving growth and client satisfaction across all regions.'
  },
  {
    image: '/images/img_cardimage_300x378.png',
    name: 'Rahul Verma',
    position: 'Director of SAP Solutions',
    description: 'Rahul brings deep SAP expertise, leading complex implementations and supporting digital transformation for enterprise clients.'
  }
];

  const handlePrevTeam = () => {
    setCurrentTeamSlide(currentTeamSlide > 0 ? currentTeamSlide - 1 : 0);
  };

  const handleNextTeam = () => {
    setCurrentTeamSlide(currentTeamSlide < teamMembers.length - 1 ? currentTeamSlide + 1 : teamMembers.length - 1);
  };

  return (
    <div className="w-full bg-global-1 overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[2138px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/img_bg_elements.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 px-16 pt-40">
          <div className="flex justify-between items-start mb-52">
            <h1 className="text-global-3 font-clash-display font-semibold text-[73px] leading-[73px] max-w-[528px]">
              Empowering <br />Digital Transformation.
            </h1>
            <p className="text-global-2 font-satoshi font-normal text-lg leading-7 max-w-[707px] mt-14">
              At Stellite Works, we connect organizations with world-class IT talent and deliver innovative SAP and software solutions. Our commitment to excellence, technology leadership, and client success has made us a trusted partner for digital transformation across industries in the U.S. and India.
            </p>
          </div>
          
          <div className="flex gap-18">
            <img 
              src="/images/img_image.png" 
              alt="Construction project"
              className="w-[936px] h-[484px] rounded-2xl object-cover"
            />
            {/* <img 
              src="/images/img_image_484x368.png" 
              alt="Interior design"
              className="w-[368px] h-[484px] rounded-2xl object-cover"
            /> */}
          </div>
        </div>
      </div>

      {/* Our Story & Values Section */}
      <div className="px-16 py-32 bg-global-1">
        <div className="flex justify-between items-start">
          <h2 className="text-global-3 font-clash-display font-semibold text-[59px] leading-[59px] max-w-[301px]">
            Our Story <br />& Values
          </h2>
          <div className="max-w-[707px] space-y-8">
            <p className="text-global-2 font-satoshi font-normal text-lg leading-7">
              Stellite Works was founded with a vision to bridge the gap between top IT talent and organizations seeking digital transformation. Our journey began with a passion for technology, innovation, and a commitment to delivering measurable results for our clients across the U.S. and India.
            </p>
            {/* Founder Quote */}
            <div className="flex gap-8 border border-primary rounded-2xl p-6">
              <img 
                src="/images/img_rectangle_12.png" 
                alt="Founder"
                className="w-25 h-25 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <blockquote className="text-global-2 font-satoshi font-bold text-2xl leading-9 mb-4">
                  "At Stellite Works, we believe in empowering businesses through technology and talent. Our mission is to deliver excellence in IT staffing, SAP solutions, and digital innovation."
                </blockquote>
                <cite className="text-global-3 font-satoshi font-normal text-lg leading-6">
                  <span className="text-global-3">- </span>Stellite Works Leadership Team
                </cite>
              </div>
            </div>
            <p className="text-global-2 font-satoshi font-normal text-lg leading-7">
              Since our inception, we've partnered with enterprises of all sizes to deliver successful SAP implementations, software development projects, and IT consulting engagements. Our team is driven by a shared commitment to quality, client success, and continuous improvement.
            </p>
            <div className="text-global-2 font-satoshi font-normal text-lg leading-7">
              <p className="mb-4">
                Our core values guide every project and partnership:
              </p>
              <p className="mb-2">
                <span className="text-global-3 font-medium">Excellence</span>: We strive for the highest standards in everything we do, from talent selection to project delivery.
              </p>
              <p className="mb-2">
                <span className="text-global-3 font-medium">Innovation</span>: We embrace new technologies and creative solutions to help our clients stay ahead in a rapidly changing digital landscape.
              </p>
              <p className="mb-2">
                <span className="text-global-3 font-medium">Integrity</span>: We build trust through transparency, accountability, and ethical business practices.
              </p>
              <p>
                <span className="text-global-3 font-medium">Collaboration</span>: We believe in the power of teamwork—both within our organization and with our clients—to achieve outstanding results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="px-16 py-20 bg-global-1">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2 className="text-global-3 font-clash-display font-semibold text-[59px] leading-[73px]">
              Our Achievements
            </h2>
            <img 
              src="/images/img_vector_black_900_01.svg" 
              alt="Achievement icon"
              className="w-12 h-12"
            />
            <img 
              src="/images/img_vector_deep_orange_a400.svg" 
              alt="Achievement decoration"
              className="w-10 h-10"
            />
          </div>
          <p className="text-global-2 font-satoshi font-normal text-lg leading-7 max-w-[676px] mx-auto">
            Stellite Works proudly serves clients across the U.S., India, and more than 100 countries worldwide. Our solutions are trusted by organizations of all sizes, with a strong presence in North America, Europe, and Asia. We are committed to delivering excellence and innovation to a truly global client base.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-global-1 border border-primary rounded-lg p-6 text-center">
              <div className="text-global-3 font-clash-display font-semibold text-[38px] leading-[47px] mb-2">
                {achievement.number}
              </div>
              <div className="text-global-2 font-satoshi font-medium text-lg leading-6">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="grid grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-global-1 border border-primary rounded-lg p-6">
              <div className="text-global-3 font-clash-display font-semibold text-[38px] leading-[47px] mb-2">
                {award.year}
              </div>
              <div className="text-global-2 font-satoshi font-medium text-lg leading-6">
                {award.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Our Clients Say Section */}
      <div className="px-16 py-20 bg-global-1">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2 className="text-global-3 font-clash-display font-semibold text-[59px] leading-[73px]">
              What Our Clients Say
            </h2>
            <img 
              src="/images/img_vector_deep_orange_a400.svg" 
              alt="Client testimonial decoration"
              className="w-10 h-10"
            />
          </div>
        <p className="text-global-2 font-satoshi font-normal text-lg leading-7 max-w-[676px] mx-auto">
  At Stellite Works, we're not just delivering IT solutions—we're building lasting partnerships. Here’s what our global clients have to say about their experience working with us.
</p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <img 
            src="/images/img_client_images.png" 
            alt="Client avatars"
            className="w-30 h-11"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
                ))}
                <div className="w-5 h-5 relative">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
                  <img 
                    src="/images/img_star_7.png" 
                    alt="Half star"
                    className="absolute top-0 left-0 w-5 h-2"
                  />
                </div>
              </div>
            </div>
            <p className="text-global-1 font-satoshi font-normal text-base leading-6">
              4.3/5 Rated by 300+ Professionals
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-primary rounded-2xl p-6 flex gap-6">
              <img 
                src={testimonial.image} 
                alt={`Client ${index + 1}`}
                className="w-25 h-25 rounded-2xl object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <blockquote className="text-global-3 font-satoshi font-bold text-2xl leading-9 mb-4">
                  {testimonial.quote}
                </blockquote>
                <cite className="text-global-2 font-satoshi font-normal text-lg leading-6">
                  {testimonial.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Experienced Team Section */}
      <div className="px-16 py-20 bg-global-1">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img 
              src="/images/img_vector_deep_orange_a400_38x30.svg" 
              alt="Team decoration"
              className="w-8 h-10"
            />
            <h2 className="text-global-3 font-clash-display font-semibold text-[59px] leading-[73px]">
              Our <span className="leading-[59px]">experienced team</span>
            </h2>
          </div>
          <p className="text-global-2 font-satoshi font-normal text-lg leading-7 max-w-[550px] mx-auto">
            With a diverse range of skills and expertise, our team is dedicated to delivering exceptional results and exceeding our clients' expectations.
          </p>
        </div>

        {/* Team Members */}
        <div className="flex gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-global-1 border border-primary rounded-2xl p-6 flex-1">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-75 rounded-2xl object-cover mb-6"
              />
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-global-3 font-clash-display font-medium text-2xl leading-8">
                  {member.name}
                </h3>
                <span className="text-global-3 font-clash-display font-medium text-2xl leading-8">/</span>
                <span className="text-global-2 font-satoshi font-medium text-sm leading-5 mt-2">
                  {member.position}
                </span>
              </div>
              <p className="text-global-2 font-satoshi font-normal text-base leading-6">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Navigation */}
        <div className="flex items-center justify-between">
          <span className="text-global-3 font-satoshi font-medium text-base leading-6">
            <span className="text-global-3">01</span>
            <span className="text-global-1">/03</span>
          </span>
          <div className="flex gap-4">
            <button 
              onClick={handlePrevTeam}
              className="w-11 h-11 border border-primary rounded-md flex items-center justify-center hover:bg-global-2 transition-colors"
            >
              <img 
                src="/images/img_button.svg" 
                alt="Previous"
                className="w-6 h-6"
              />
            </button>
            <button 
              onClick={handleNextTeam}
              className="w-11 h-11 bg-global-2 border border-primary rounded-md flex items-center justify-center hover:bg-global-3 transition-colors"
            >
              <img 
                src="/images/img_button_gray_200.svg" 
                alt="Next"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative w-full h-[402px] bg-global-4 rounded-2xl mx-16 my-20">
        <div 
          className="absolute left-0 top-0 w-[365px] h-[375px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/img_vector_375x365.png)' }}
        ></div>
        <div 
          className="absolute right-0 top-3 w-[363px] h-[390px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/img_vector_390x363.png)' }}
        ></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-16">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-global-3 font-clash-display font-semibold text-[73px] leading-[90px]">
                Let's
              </h2>
              <h2 className="text-global-3 font-clash-display font-semibold text-[73px] leading-[90px]">
                Build
              </h2>
              <img 
                src="/images/img_vector_black_900.svg" 
                alt="Build icon"
                className="w-12 h-23"
              />
              <h2 className="text-global-3 font-clash-display font-semibold text-[73px] leading-[90px]">
                Something
              </h2>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-global-3 font-clash-display font-semibold text-[73px] leading-[90px]">
                Extraordinary
              </h2>
              <h2 className="text-global-3 font-clash-display font-semibold text-[73px] leading-[90px]">
                Together
              </h2>
            </div>
          </div>
          
          <Button variant="primary" size="md" to="/projects">
            View our projects
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
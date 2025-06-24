import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or API
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-global-1 overflow-x-hidden flex flex-col items-center">
        <Header/>
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
                <p className="block mb-0">Contact Us</p>
                <p className="block text-[18px] font-normal text-[#c0c0bf] mt-4 leading-[1.6]">
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
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-16 flex flex-col md:flex-row gap-12">
  {/* Left Column */}
  <div className="w-full md:w-1/3 flex flex-col gap-10">
    <div>
      <h2 className="text-2xl font-bold text-[#f0f0f0] mb-4">Get in Touch</h2>
      <div className="flex flex-col gap-3">
        <button className="bg-[#161514] text-[#f0f0f0] rounded-lg px-4 py-3 text-left">info@stelliteworks.com</button>
        <button className="bg-[#161514] text-[#f0f0f0] rounded-lg px-4 py-3 text-left">+1 (234) 567-8901</button>
      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold text-[#f0f0f0] mb-2">Our Office</h2>
      <div className="mb-3 text-[#c0c0bf]">Address: 123 Main St, Anytown, USA 12345</div>
      <button className="bg-[#282726] text-[#f0f0f0] rounded-lg px-4 py-2">Get Directions</button>
    </div>
    <div>
      <h2 className="text-2xl font-bold text-[#f0f0f0] mb-2">Connect with us</h2>
      <div className="flex gap-3 mt-2">
        <a href="#" className="bg-global-4 rounded-lg w-10 h-10 flex items-center justify-center text-xl" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f" style={{ color: "#ffff" }}></i>
        </a>
        <a href="#" className="bg-global-4 rounded-lg w-10 h-10 flex items-center justify-center text-xl" aria-label="X">
          <i className="fa-brands fa-x-twitter" style={{ color: "#ffff" }}></i>
        </a>
        <a href="#" className="bg-global-4 rounded-lg w-10 h-10 flex items-center justify-center text-xl" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in" style={{ color: "#ffff" }}></i>
        </a>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div className="w-full md:w-2/3 bg-global-1 rounded-2xl p-8 flex flex-col gap-6">
    <h2 className="text-3xl font-bold text-[#f0f0f0] mb-2">Have a project in your mind?</h2>
    <form className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input type="text" placeholder="Name" className="flex-1 px-4 py-3 rounded bg-[#282726] text-[#f0f0f0] border border-[#282726] focus:outline-none" />
        <input type="text" placeholder="Phone Number" className="flex-1 px-4 py-3 rounded bg-[#282726] text-[#f0f0f0] border border-[#282726] focus:outline-none" />
        <input type="email" placeholder="Business Email" className="flex-1 px-4 py-3 rounded bg-[#282726] text-[#f0f0f0] border border-[#282726] focus:outline-none" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <select className="flex-1 px-4 py-3 rounded bg-[#282726] text-[#c0c0bf] border border-[#282726] focus:outline-none">
          <option>Select budget</option>
          <option>Below $10,000</option>
          <option>$10,000 - $50,000</option>
          <option>Above $50,000</option>
        </select>
        <select className="flex-1 px-4 py-3 rounded bg-[#282726] text-[#c0c0bf] border border-[#282726] focus:outline-none">
          <option>Service you are interested in</option>
          <option>SAP </option>
          <option>Application Development</option>
          
        </select>
      </div>
      <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 rounded bg-[#282726] text-[#f0f0f0] border border-[#282726] focus:outline-none" />
      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" className="accent-[#ffb877]" />
        <label htmlFor="terms" className="text-[#c0c0bf] text-sm">
          I agree with <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>
        </label>
      </div>
      <button type="submit" className="self-end bg-global-4 hover:bg-[#ff9248] text-[#ffff] font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors">
        Send <span><i className="fas fa-paper-plane"></i></span>
      </button>
    </form>
  </div>
</section>


{/* FAQ Section */}
<section className="w-full bg-global-1 py-20 px-4 md:px-16">
  <div className="max-w-[1440px] mx-auto">
    <div className="flex items-center mb-10">
      <img src="/images/img_vector.svg" alt="FAQ Icon" className="w-10 h-10 mr-4" />
      <h2 className="text-5xl md:text-6xl font-clash-display font-semibold text-[#f0f0f0]">
        Frequently Asked Questions
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="border border-[#282726] rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-[#f0f0f0] mb-3">
          How long has StelliteWorks been in business?
        </h3>
        <p className="text-[#c0c0bf]">
          StelliteWorks was founded in 2005, and we’ve been proudly serving our clients for over 15 years. During that time, we’ve established ourselves as a trusted leader in engineering, construction, and technology, completing a wide range of projects and earning a reputation for excellence.
        </p>
      </div>
      <div className="border border-[#282726] rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-[#f0f0f0] mb-3">
          What types of services does StelliteWorks offer?
        </h3>
        <p className="text-[#c0c0bf]">
          At StelliteWorks, we offer a comprehensive suite of services to meet the diverse needs of our clients. Our core offerings include smart infrastructure, sustainable communities, modernization & renovation, and technology solutions for both urban and industrial environments.
        </p>
      </div>
      <div className="border border-[#282726] rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-[#f0f0f0] mb-3">
          How does StelliteWorks ensure the quality of its work?
        </h3>
        <p className="text-[#c0c0bf]">
          Quality is at the heart of everything we do at StelliteWorks. We have a rigorous quality control process that involves regular inspections, testing, and oversight throughout the entire project. Our experienced team uses only the highest-quality materials and adheres to the strictest industry standards, standing behind our work with a comprehensive warranty.
        </p>
      </div>
      <div className="border border-[#282726] rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-[#f0f0f0] mb-3">
          What is StelliteWorks' approach to sustainability?
        </h3>
        <p className="text-[#c0c0bf]">
          Sustainability is a key priority for StelliteWorks. We believe that building and managing properties in an environmentally responsible manner is not only good for the planet, but also benefits our clients in the long run. We incorporate a range of sustainable practices into our projects, from energy-efficient design and construction to the use of renewable materials and technologies.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* <div className="max-w-xl w-full bg-[#161514] rounded-2xl shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-[#f0f0f0]">Contact Us</h1>
        <p className="mb-8 text-[#c0c0bf]">
          Have a question or want to work with StelliteWorks? Fill out the form below and our team will get back to you soon.
        </p>
        {submitted ? (
          <div className="text-green-400 text-lg font-semibold text-center py-8">
            Thank you for reaching out! We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block mb-2 text-[#f0f0f0]">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-[#282726] text-[#f0f0f0] border border-[#282726] focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#f0f0f0]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-[#282726] text-[#f0f0f0] border border-[#282726] focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#f0f0f0]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded bg-[#282726] text-[#f0f0f0] border border-[#282726] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-global-4 text-[#f0f0f0] font-semibold py-3 rounded-lg hover:bg-[#fe6d2f] transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div> */}
      <Footer/>
    </div>
  );
};

export default Contact;
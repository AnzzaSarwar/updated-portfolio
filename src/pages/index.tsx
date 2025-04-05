"use client"

import Skills from './Skills';
import Header from './Header';
import HeroSection from './HeroSection';
import Project from './Project';
import Service from './Service';

export default function Index() {
  return (
    <>
        {/* Bubbles Background */}
        <div className="bubbles-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>

        <Header />
        <HeroSection />
        <br /><br /><br /><br /><br /><br />
        <Skills />
        <Project />
        <Service />

        <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-black-300">
    <iframe 
      width="100%" 
      height="100%" 
      frameBorder="2" 
      title="map" 
      scrolling="no" 
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
      style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
    ></iframe>
  </div>
  <div className="container px-4 sm:px-6 lg:px-8 py-24 mx-auto flex justify-center">
    <div className="lg:w-1/3 md:w-1/2 w-full max-w-lg bg-gradient-to-t from-black to-gray-600 rounded-lg p-8 border-2 border-white shadow-black flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-white">Fill your form</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-sky-200">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-sky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-sky-200">Message</label>
        <textarea 
          id="message" 
          name="message" 
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button className="text-white bg-pink-400 border-2 border-pink-300 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">Send message</button>
      <p className="text-xs text-gray-500 mt-3">"Share your thoughts with us and help shape a better future through meaningful feedback today.</p>
    </div>
  </div>
</section>

<footer className="text-gray-600 body-font border-t-2 border-t-pink-200 bg-gradient-to-bl from-black to-pink-600">
  <div className="container px-4 sm:px-6 lg:px-8 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex items-center text-white mb-4 md:mb-0">
      <img className="w-16 h-16 bg-transparent rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ9RNFfTn1Pt-u4I7AiqLtsfhd11qln7b8Q&s" alt="Logo" />
      <span className="ml-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white">Anza Sarwar</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Anza Portfolio -
      <a href="mailto:msarwarbajwamsarwarbajwa@gmail.com" className="text-sky-100 ml-1" target="_blank">msarwarbajwamsarwarbajwa@gmail.com</a>
    </p>
  </div>
</footer>

      </div>
    </>
  );
}

"use client"

import Skills from './Skills';
import Header from './Header';
import HeroSection from './HeroSection';
import Project from './Project';
import Service from './Service';



const project = () => {
    return (
        <div>
            <title>anza sarwar</title>

           <Header />
            <HeroSection />
            <br />
            <br /><br /><br />
            <br /><br />
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
  <div className="container px-5 py-24 mx-auto flex ">
    <div className="lg:w-1/3 md:w-1/2  rounded-lg p-8 border-2 border-white shadow-black bg-gradient-to-t from-black to-gray-600 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-white">Fill your form</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-sky-200">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="w-full bg-white rounded border border-brown-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-sky-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
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
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-sky-200">
    
    <img className="w-10 h-10 rounded-full" src="https://as1.ftcdn.net/v2/jpg/03/75/67/74/1000_F_375677469_UzQt3JpGywuXxkOlCkG7SJXXbiGsampv.jpg" alt="my image" />

      <span className="ml-3 text-xl ">Anza Sarwar</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Anza Portfolio-
      <a href="https://twitter.com/knyttneve" className="text-sky-100 ml-1" rel="noopener noreferrer" target="_blank">@msarwarbajwamsarwarbajwa@gmail.com</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>


           
        </div>
    )
}
export default project;

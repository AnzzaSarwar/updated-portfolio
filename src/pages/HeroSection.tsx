import Typewriter from 'typewriter-effect';
import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

function HeroSection() {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Left Section (Text + Typewriter) */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          {/* Typewriter Effect Moved to Top */}
          <div className="mb-4 text-4xl font-extrabold text-pink-300">
            <Typewriter
              options={{
                strings: [
                  'Welcome To My Portfolio',
                  'I am Governor ITCourse Student.',
                  'I Am a Developer',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* Main Heading Below Typewriter */}
          <h1 className="text-3xl font-extrabold text-white leading-tight">
            Your on go <br /> Developer to create <br /> your Web-apps
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-lg">
            Let me build your app look attractive and fully functional to make it use in the market and attract your client/customer towards your product.
          </p>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=100094477968201" className="text-blue-500 text-3xl hover:text-blue-700">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/in/anza-sarwar-334404254/" className="text-blue-400 text-3xl hover:text-blue-600">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/Anzabajwa" className="text-white text-3xl hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/anza_bajwa23/" className="text-pink-500 text-3xl hover:text-pink-700">
              <FaInstagram />
            </a>
          </div>
        </div>

       {/* Right Section (Image) */}

 {/* Right Section (Bigger Image with Strong Pink Glow) */}
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
  <img 
    className="w-70 h-70 md:w-96 md:h-96 object-cover rounded-2xl shadow-[0_20px_50px_-10px_rgba(219,39,119,0.9)]"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZ8zyhXAMSPq0PhMb5KnjOE4czp9c1KeVQQ&s" 
    alt="Hero Image" 
  />
</div>



      </div>
    </section>
  );
}

export default HeroSection;

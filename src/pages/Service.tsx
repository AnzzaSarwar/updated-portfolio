import React from 'react';

export default function Service() {
  return (
    <div>
      <section className="text-white body-font bg-gradient-to-b from-black to-pink-400 shadow-black py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">My Services</h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">-- Work on getting leads from, for my vendee --</p>

          {/* Service Boxes */}
          <div className="mt-10">
            {/* First Row - Two Items (Responsive Side by Side) */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {/* Service 1 */}
              <div className="w-full max-w-xs flex justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center bg-gradient-to-t from-black to-gray-500 border-2 border-pink-300 rounded-xl p-4 shadow-lg w-full">
                  <img alt="Custom Websites" className="w-14 h-14 bg-gray-300 object-cover rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpzdGJPbw92ZtPSD0VeykP0RCwwv12vhkcA&s" />
                  <div className="text-left">
                    <h2 className="text-lg font-semibold">Custom Websites</h2>
                    <p className="text-gray-300 text-sm">Can make complete websites</p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="w-full max-w-xs flex justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center bg-gradient-to-t from-black to-gray-500 border-2 border-pink-300 rounded-xl p-4 shadow-lg w-full">
                  <img alt="Figma to Code" className="w-14 h-14 bg-gray-300 object-cover rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IQCea8hSpiYjBajC-OQu3h1fXr4qesFAog&s" />
                  <div className="text-left">
                    <h2 className="text-lg font-semibold">Figma to Code Websites</h2>
                    <p className="text-gray-300 text-sm">Can develop the complete website</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Centered Item */}
            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-xs flex justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center bg-gradient-to-t from-black to-gray-500 border-2 border-pink-300 rounded-xl p-4 shadow-lg w-full">
                  <img alt="AI Based Website" className="w-14 h-14 bg-gray-300 object-cover rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wVUGEEjXLHRQ0ob3V7rG5-x-RnVFwAdGvw&s" />
                  <div className="text-left">
                    <h2 className="text-lg font-semibold">AI Based Website</h2>
                    <p className="text-gray-300 text-sm">Integrate AI codes and make it work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

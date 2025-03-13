import React from 'react';

export default function Service() {
  return (
    <div>
      <section className="text-white body-font bg-gradient-to-b from-black to-pink-400 shadow-black py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">My Services</h1>
          <p className="text-gray-400 mt-2">-- Work on getting leads from, for my vendee --</p>

          {/* Service Boxes */}
          <div className="mt-10">
            {/* First Row - Two Items (Side by Side) */}
            <div className="w-full flex flex-wrap justify-center space-x-6">
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center  bg-gradient-to-t from-black to-gray-500 border-2 border-pink-300 rounded-xl p-4 max-w-xs shadow-lg w-full">
                  <img alt="service" className="w-14 h-14 bg-gray-300 object-cover rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpzdGJPbw92ZtPSD0VeykP0RCwwv12vhkcA&s" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">Custom Websites</h2>
                    <p className="text-gray-300 text-sm">Can make complete websites</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="flex items-center hover:scale-105 transition-transform duration-300 ease-in-out bg-gradient-to-t from-black to-gray-500 border-2 border-pink-300 rounded-xl p-4 max-w-xs shadow-lg w-full">
                  <img alt="service" className="w-14 h-14 bg-gray-300 object-cover rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IQCea8hSpiYjBajC-OQu3h1fXr4qesFAog&s" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">Figma to Code Websites</h2>
                    <p className="text-gray-300 text-sm">Can develop the complete website</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - One Item Centered */}
            <div className="mt-6 flex justify-center w-full">
              <div className="w-full md:w-1/3 flex justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center bg-gradient-to-t from-black to-gray-500 border-2 border-pink-300 rounded-xl p-4 max-w-xs shadow-lg w-full">
                  <img alt="service" className="w-14 h-14 bg-gray-300 object-cover rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wVUGEEjXLHRQ0ob3V7rG5-x-RnVFwAdGvw&s" />
                  <div className="flex-grow">
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
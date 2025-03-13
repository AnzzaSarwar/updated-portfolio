import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div>
      <header className="bg-gradient-to-b from-pink-400 to-black text-white shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex items-center text-white mb-4 md:mb-0">
            <img
              className="w-16 h-16 bg-transparent rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ9RNFfTn1Pt-u4I7AiqLtsfhd11qln7b8Q&s"
              alt="Logo"
            />

            <span className="ml-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white">
              Anza Sarwar
            </span>
          </a>

          {/* Navigation Menu */}
          <nav className="flex space-x-6 text-lg mb-3 font-semibold">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/AboutUs" },
              { name: "My Skills", path: "/Skills" },
              { name: "My Project", path: "/Project" },
              { name: "Contact", path: "/Contact" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="px-4 py-2 rounded-lg transition-all duration-300 border border-transparent hover:border-pink-400 hover:bg-opacity-10"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;

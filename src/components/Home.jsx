import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl">
 
        <div className="flex-1 text-left">
          <p className="text-purple-600 font-medium mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            a student in<br />
            Information Management
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
            passionate about learning how technology and creativity can work together to build useful and meaningful digital solutions.
          </p>

          <div className="flex gap-4 mb-8">
            <a href="#skills" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-medium">
              See My Skill
            </a>
            <a href="#contact" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition font-medium">
              Contact Me
            </a>
          </div>
  
          <div className="flex gap-4">
            <a href="https://www.instagram.com/ajii_07_/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://github.com/lomanto215" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/trias-aji-lomanto-6b2a821b3/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
            </a>
            <a href="https://dribbble.com/trias-aji-lomanto" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.32 8.834c4.022-.015 6.775-.389 9.119-1.122.239.477.455.959.617 1.479-3.483.885-6.185 2.947-8.106 6.184-1.579-1.521-2.668-3.534-2.83-5.541zm3.873 7.524c1.626-2.678 3.965-4.39 7.024-5.138.614 1.606 1.072 3.245 1.379 4.915-2.082.867-4.354 1.298-6.703 1.298-1.02 0-2.015-.106-2.991-.307zm9.655-.256c-.294-1.652-.739-3.276-1.337-4.864 1.916-.32 4.082-.32 6.491 0-.393 2.16-1.591 4.033-3.154 5.457z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 p-2">
              <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                  <img 
                  src={require('../assets/images/profile.jpeg')} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home
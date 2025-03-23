// components/Footer.js
'use client'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaCode } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleRedirect = () => {
    window.open("https://github.com/Zeeshanx01", "_blank", "noopener,noreferrer");
  };

  const handleSourceCode = () => {
    window.open("https://github.com/Zeeshanx01/LinkTweak", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="duration-500 relative bg-slate-800 border-t border-gray-800/50 mt-auto overflow-hidden">
      {/* Animated background elements */}
      <div className="duration-500 absolute inset-0 opacity-10">
        <div className="duration-500 absolute w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20 animate-pulse-slow" />
        <div className="duration-500 absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5" />
      </div>

      <div className="duration-500 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="duration-500 py-12 md:flex md:items-center md:justify-between">
          {/* Enhanced Branding section */}
          <div className="duration-500 flex justify-center space-x-6 md:order-2">
            <a
              href="https://zeeshanx01.com"
              className="duration-500 group relative"
              target='_blank'
              rel="noopener noreferrer"
            >
              <span className="duration-500 sr-only">Home</span>
              <h2 className="duration-500 flex items-center text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent 
                            hover:from-purple-400 hover:to-cyan-500 transition-all ">
                <span className="duration-500 text-outline">MyPortfolio</span>
                <Image
                  className='ml-3 h-16 w-16  transition-transform duration-500'
                  src="/portfolio.gif"
                  alt=""
                  width={80}
                  height={80}
                  unoptimized
                />
              </h2>
              <div className="duration-500 absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 
                            group-hover:w-full transition-all  shadow-glow" />
            </a>
          </div>

          {/* Cyber-style Navigation links */}
          <div className="duration-500 mt-8 md:mt-0 md:order-1">
            <nav className="duration-500 flex flex-wrap justify-center gap-6 md:gap-8">
              {['projects', 'about', 'blog', 'contact'].map((path) => (
                <a
                  key={path}
                  href={`https://zeeshanx01.com/${path}`}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="duration-500 relative text-gray-300 hover:text-cyan-400 text-sm font-medium 
                            hover:drop-shadow-glow transition-all  group"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                  <span className="duration-500 absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 
                                group-hover:w-full transition-all  shadow-glow" />
                </a>
              ))}
            </nav>
          </div>

          {/* Holographic Social Section */}
          <div className="duration-500 mt-8 flex flex-col items-center space-y-4 md:order-3">
            <div className="duration-500 flex space-x-6">
              {[
                { icon: FaLinkedin, color: 'text-[#0A66C2]', link: 'https://linkedin.com/in/zeeshan-munir-b073a51b9' },
                { icon: FaEnvelope, color: 'text-red-400', link: 'mailto:zeeshan.x01000@gmail.com' },
                { icon: FaInstagram, color: 'text-pink-500', link: 'https://instagram.com/zeeshan_x01' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 
                            hover:bg-gray-800/80 hover:border-cyan-400/50 hover:shadow-hologlow 
                            transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="duration-500 h-6 w-6 hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            {/* Cyber Buttons */}
            <div className="duration-500 flex space-x-4">
              <button
                onClick={handleRedirect}
                className="duration-500 group relative bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full 
                        border border-gray-700 hover:border-cyan-400/50 hover:shadow-hologlow
                        transition-all  overflow-hidden"
              >
                <span className="duration-500 relative z-10 flex items-center space-x-2 text-cyan-400">
                  <FaGithub className="duration-500 h-5 w-5 group-hover:animate-pulse" />
                  <span className="duration-500 text-sm">GitHub</span>
                </span>
                <div className="duration-500 absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity " />
              </button>

              <button
                onClick={handleSourceCode}
                className="duration-500 group relative bg-gradient-to-br from-cyan-600/30 to-purple-600/30 px-6 py-3 rounded-full 
                        border border-cyan-400/30 hover:border-purple-400/50 hover:shadow-hologlow
                        transition-all  overflow-hidden"
              >
                <span className="duration-500 relative z-10 flex items-center space-x-2 text-purple-400">
                  <FaCode className="duration-500 h-5 w-5 group-hover:rotate-180 transition-transform" />
                  <span className="duration-500 text-sm">Source Code</span>
                </span>
                <div className="duration-500 absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity " />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Copyright section */}
        <div className="duration-500 border-t border-gray-800/50 py-8 text-center">
          <p className="duration-500 text-xs text-gray-400 hover:text-cyan-400 transition-colors">
            &copy; {currentYear} <span className=" text-outline">Linktree</span> (Unofficial Linktree Clone)
          </p>
          <p className="duration-500 mt-1 text-xs text-gray-400 hover:text-purple-400 transition-colors">
            Built by Zeeshan with <span className="duration-500 text-red-400">❤️</span> using NextJS, MongoDB and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
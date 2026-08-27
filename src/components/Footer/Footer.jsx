import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative text-white pt-16 pb-8 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans">

      {/* Top Gradient Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mb-12"></div>

      <div className="container mx-auto text-center">

        {/* Name */}
        <button
          onClick={scrollToTop}
          className="text-2xl sm:text-3xl font-bold text-white hover:text-[#8245ec] transition duration-300"
        >
          Fatima <span className="text-[#8245ec]">Sayyed</span>
        </button>

        {/* Short Description */}
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
          Junior Software Developer and BCA graduate with a strong foundation
          in frontend and backend development.
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-7">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="
                text-gray-300
                text-sm sm:text-base
                hover:text-[#8245ec]
                transition-all duration-300
              "
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-5 mt-8">

          {/* GitHub */}
          <a
            href="https://github.com/FatimaSayyed27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              w-11 h-11
              flex items-center justify-center
              rounded-full
              border border-gray-700
              bg-[#0d081f]
              text-gray-300
              hover:text-white
              hover:border-[#8245ec]
              hover:bg-[#8245ec]
              hover:scale-110
              transition-all duration-300
            "
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              w-11 h-11
              flex items-center justify-center
              rounded-full
              border border-gray-700
              bg-[#0d081f]
              text-gray-300
              hover:text-white
              hover:border-[#8245ec]
              hover:bg-[#8245ec]
              hover:scale-110
              transition-all duration-300
            "
          >
            <FaLinkedin size={20} />
          </a>

        </div>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            px-5 py-2
            rounded-full
            border border-gray-700
            text-gray-300
            text-sm
            hover:text-white
            hover:border-[#8245ec]
            hover:bg-[#8245ec]
            transition-all duration-300
          "
        >
          Back to Top
          <FaArrowUp size={13} />
        </button>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mt-10"></div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Fatima Sayyed.
          </p>

          <span className="hidden sm:block text-gray-700">|</span>

          <p className="text-sm text-gray-500">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
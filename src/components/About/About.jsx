import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-[7vw] md:px-[7vw] lg:px-[12vw] xl:px-[15vw] font-sans pt-20 pb-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full md:w-[55%] text-center md:text-left">

            {/* Greeting */}
            <p className="text-lg sm:text-xl text-gray-400 mb-3">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Fatima{" "}
              <span className="text-[#8245ec]">
                Sayyed
              </span>
            </h1>

            {/* Role */}
            <div className="mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-white flex flex-wrap justify-center md:justify-start items-center gap-2">
              <span>I am a</span>

              <span className="text-[#8245ec]">
                <ReactTypingEffect
                  text={[
                    "Junior Software Developer",
                    "Frontend Developer",
                    "React Developer",
                    "Python Developer",
                    "Full Stack Developer",
                  ]}
                  speed={80}
                  eraseSpeed={40}
                  typingDelay={500}
                  eraseDelay={1800}
                  cursorRenderer={(cursor) => (
                    <span className="text-[#8245ec]">
                      {cursor}
                    </span>
                  )}
                />
              </span>
            </div>

            {/* Description */}
            <p className="mt-7 text-base sm:text-lg text-gray-400 leading-8 max-w-2xl">
              I am a BCA graduate with a strong foundation in frontend and
              backend development. I build responsive and user-friendly web
              applications using{" "}
              <span className="text-gray-200 font-medium">
                React.js, JavaScript, Python, Django, and REST APIs.
              </span>{" "}
              I enjoy turning ideas into practical applications and
              continuously improving my development skills through real-world
              projects.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap justify-center md:justify-start gap-4">

              {/* Resume */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(90deg, #8245ec, #a855f7)",
                  boxShadow:
                    "0 0 15px rgba(130,69,236,0.5)",
                }}
              >
                DOWNLOAD RESUME
              </a>

              {/* Projects */}
              <button
                onClick={() => {
                  const section = document.getElementById("work");

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-[#8245ec] text-[#c4a8ff] font-semibold hover:bg-[#8245ec] hover:text-white transition-all duration-300"
              >
                VIEW PROJECTS
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-end">

            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl scale-110"></div>

              {/* Image Container */}
              <div
                className="
                  relative
                  w-56 h-56
                  sm:w-64 sm:h-64
                  md:w-72 md:h-72
                  lg:w-[24rem] lg:h-[24rem]
                  rounded-full
                  p-1
                  bg-gradient-to-r
                  from-[#8245ec]
                  via-[#a855f7]
                  to-[#8245ec]
                "
              >
                <div className="w-full h-full rounded-full bg-[#050414] p-1">
                  <img
                    src={profileImage}
                    alt="Fatima Sayyed"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
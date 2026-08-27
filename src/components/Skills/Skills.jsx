import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          SKILLS
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          A collection of my technical skills and expertise developed through
          academic learning, internships, and real-world projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div
              className="
                h-full
                bg-[#111827]/90
                backdrop-blur-md
                rounded-2xl
                border border-gray-700
                p-6 sm:p-8
                shadow-[0_0_25px_rgba(130,69,236,0.15)]
                hover:border-[#8245ec]
                hover:shadow-[0_0_30px_rgba(130,69,236,0.3)]
                transition-all duration-300
              "
            >
              {/* Category Title */}
              <h3
                className="
                  text-2xl sm:text-3xl
                  font-bold
                  text-center
                  text-gray-300
                  mb-7
                "
              >
                {category.title}
              </h3>

              {/* Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center justify-center
                      gap-2
                      min-h-[58px]
                      px-3 py-2
                      rounded-2xl
                      border border-gray-700
                      bg-[#0b1220]
                      hover:border-[#8245ec]
                      hover:bg-[#19112d]
                      transition-all duration-300
                    "
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 object-contain flex-shrink-0"
                    />

                    <span className="text-xs sm:text-sm text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
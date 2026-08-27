import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          EXPERIENCE
        </h2>

        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base sm:text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          My professional experience, internships, and hands-on development
          journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Timeline Line */}
        <div
          className="
            absolute
            left-5
            md:left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-gradient-to-b
            from-[#8245ec]
            via-purple-500
            to-transparent
            md:-translate-x-1/2
          "
        ></div>

        {/* Experience Items */}
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`
                relative
                flex
                items-start
                md:items-center
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >
              {/* Timeline Logo */}
              <div
                className="
                  absolute
                  left-5
                  md:left-1/2
                  -translate-x-1/2
                  w-14
                  h-14
                  md:w-16
                  md:h-16
                  rounded-full
                  bg-white
                  border-4
                  border-[#8245ec]
                  shadow-[0_0_20px_rgba(130,69,236,0.6)]
                  flex
                  items-center
                  justify-center
                  z-20
                  overflow-hidden
                "
              >
                <img
                  src={experience.img}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain p-1"
                />
              </div>

              {/* Experience Card */}
              <div
                className={`
                  ml-16
                  md:ml-0
                  w-[calc(100%-4rem)]
                  md:w-[45%]
                  bg-[#111827]
                  border
                  border-gray-700
                  rounded-2xl
                  p-6
                  sm:p-7
                  shadow-[0_0_25px_rgba(130,69,236,0.15)]
                  hover:border-[#8245ec]
                  hover:shadow-[0_0_30px_rgba(130,69,236,0.3)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                `}
              >
                {/* Role */}
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                    leading-snug
                  "
                >
                  {experience.role}
                </h3>

                {/* Company */}
                <h4 className="text-base sm:text-lg font-medium text-[#a78bfa] mt-2">
                  {experience.company}
                </h4>

                {/* Date */}
                <p className="text-sm text-gray-500 mt-2 mb-5">
                  {experience.date}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-700 mb-5"></div>

                {/* Description */}
                <p
                  className="
                    text-gray-400
                    text-sm
                    sm:text-base
                    leading-7
                  "
                >
                  {experience.desc}
                </p>

                {/* Technologies */}
                <div className="mt-6">
                  <h5 className="text-base font-semibold text-white mb-3">
                    Technologies:
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="
                          px-3
                          py-1.5
                          text-xs
                          sm:text-sm
                          font-medium
                          text-gray-200
                          bg-[#251f38]
                          border
                          border-purple-500/40
                          rounded-lg
                          hover:border-purple-500
                          hover:bg-purple-900/40
                          transition
                          duration-200
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
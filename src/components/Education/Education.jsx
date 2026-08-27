import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base sm:text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          My academic journey and educational background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
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

        {/* Education Items */}
        <div className="space-y-16">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`
                relative
                flex
                items-start
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
                  src={edu.img}
                  alt={`${edu.school} logo`}
                  className="w-full h-full object-contain p-1"
                />
              </div>

              {/* Education Card */}
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
                {/* Degree */}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <h4 className="text-base sm:text-lg font-medium text-[#a78bfa] mt-2 leading-relaxed">
                  {edu.school}
                </h4>

                {/* Date */}
                <p className="text-sm text-gray-500 mt-2">
                  {edu.date}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-700 my-5"></div>

                {/* Grade */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base font-semibold text-white">
                    Grade:
                  </span>

                  <span className="text-base font-bold text-[#a855f7]">
                    {edu.grade}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="
                    text-gray-400
                    text-sm
                    sm:text-base
                    leading-7
                  "
                >
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="relative py-24 px-[7vw] md:px-[8vw] lg:px-[10vw] font-sans"
    >
      {/* ================= SECTION HEADER ================= */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          PROJECTS
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          A showcase of my projects, highlighting my skills and experience
          across frontend, backend, API integration, and full-stack development.
        </p>
      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="
              group
              bg-[#111827]
              border border-gray-700
              rounded-2xl
              overflow-hidden
              cursor-pointer
              shadow-[0_0_20px_rgba(130,69,236,0.15)]
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(130,69,236,0.35)]
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            {/* ================= PROJECT IMAGE ================= */}
            <div className="p-4">
  <div className="relative overflow-hidden rounded-xl bg-[#0d081f]">
    <img
      src={project.image}
      alt={project.title}
      className="
        w-full
        h-56
        md:h-60
        object-contain
        md:object-cover
        rounded-xl
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />

    {/* Image Overlay */}
    <div
      className="
        absolute
        inset-0
        bg-purple-600/0
        group-hover:bg-purple-600/10
        transition-all
        duration-300
        pointer-events-none
      "
    ></div>
  </div>
</div>

            {/* ================= PROJECT CONTENT ================= */}
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* ================= TECHNOLOGIES ================= */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      rounded-full
                      bg-[#251f38]
                      text-purple-400
                      border border-purple-500/20
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ================= VIEW BUTTON ================= */}
              <div className="mt-6">
                <button
                  className="
                    text-purple-400
                    font-semibold
                    text-sm
                    hover:text-purple-300
                    transition
                  "
                >
                  View Project
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            p-4
          "
          onClick={closeModal}
        >
          <div
            className="
              relative
              w-full
              max-w-4xl
              max-h-[90vh]
              overflow-y-auto
              bg-[#111827]
              border
              border-gray-700
              rounded-2xl
              shadow-[0_0_40px_rgba(130,69,236,0.3)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* ================= CLOSE BUTTON ================= */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="
                absolute
                top-4
                right-4
                z-10
                w-10
                h-10
                rounded-full
                bg-black/60
                text-gray-300
                text-2xl
                flex
                items-center
                justify-center
                hover:bg-purple-600
                hover:text-white
                transition
              "
            >
              ×
            </button>

            {/* ================= MODAL IMAGE ================= */}
            <div className="p-4 md:p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="
                  w-full
                  max-h-[420px]
                  object-cover
                  rounded-xl
                  border
                  border-gray-700
                "
              />
            </div>

            {/* ================= MODAL CONTENT ================= */}
            <div className="px-6 pb-8 md:px-8 md:pb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {selectedProject.description}
              </p>

              {/* ================= TAGS ================= */}
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-[#251f38]
                      text-purple-400
                      text-xs
                      md:text-sm
                      font-semibold
                      border
                      border-purple-500/20
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {/* GitHub */}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      flex-1
                      text-center
                      py-3
                      
                      px-6
                      rounded-xl
                      bg-gray-800
                      border
                      border-gray-700
                      text-gray-300
                      font-semibold
                      hover:bg-purple-700
                      hover:text-white
                      hover:border-purple-500
                      transition
                    "
                  >
                    View Code
                  </a>
                )}

                {/* Live Website */}
                {selectedProject.webapp &&
                  selectedProject.webapp !== "#" && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        flex-1
                        text-center
                        py-3
                        px-6
                        rounded-xl
                        bg-gradient-to-r
                        from-purple-600
                        to-pink-500
                        text-white
                        font-semibold
                        hover:opacity-90
                        hover:shadow-lg
                        hover:shadow-purple-500/30
                        transition
                      "
                    >
                      View Live
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
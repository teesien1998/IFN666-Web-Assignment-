import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import images from "../assets/github.png";
import ErrorMessage from "./ErrorAPI";

// Project Componenet on Home Page
function Projects() {
  const [projects, setProjects] = useState([]); // Holds the state for project data.
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Coderamrin/repos"
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();

        // Slice the results to display only the first three.
        const slicedResult = result.slice(0, 3);

        // Format the projects data
        const formattedProjects = slicedResult.map((repo) => ({
          img: images,
          title: repo.name,
          desc: repo.description,
          url: repo.html_url,
        }));

        //console.log(formattedProjects);

        // Update the projects state with the formatted projects.
        setProjects(formattedProjects);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return (
      <section
        className="px-5 py-32 bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100"
        id="projects"
      >
        <ErrorMessage
          title="GitHub Projects"
          message="Failed to load projects. Please check your internet connection."
        />
      </section>
    );
  }

  return (
    <section
      className="px-5 py-32 bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100"
      id="projects"
    >
      <div className="container mx-auto">
        <button className="absolute right-0 md:right-5 lg:right-16 text-white font-semibold px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-purple-600 hover:ring-4 hover:ring-purple-400 transition-ring duration-300 shadow-lg">
          <NavLink to="/projects" className="text-sm sm:text-lg">
            More Projects
          </NavLink>
        </button>
        <div className="text-center pb-5">
          <h2 className="text-4xl font-bold mb-5 inline-block border-b-4 border--h2 pb-2 font-madimi">
            GitHub Projects
          </h2>
          <p className="mb-5 font--ubuntu">Some of Github Projects By Amrin.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 font--ubuntu">
          {projects.map((project, i) => {
            return (
              <div className="relative flex flex-col sm:flex-row lg:flex-col items-start box--shadowblog shadow-lg hover:shadow-2xl rounded-lg bg-white ">
                <div className="order-1 pl-6 sm:pl-10 lg:pl-6 py-6 pr-6">
                  <h3 className="text-2xl font-semibold mb-2 hover:text-orange-500 transition-colors duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <p className="text-gray-700 line-clamp-3">
                    {project.desc ? (
                      project.desc
                    ) : (
                      <span>
                        No description, website, or topics provided.
                        <br />
                        <br />
                      </span>
                    )}
                  </p>

                  <a
                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit GitHub
                    <svg
                      className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
                <img
                  src={project.img}
                  alt=""
                  className="shadow-md rounded-lg bg-slate-50 object-cover sm:w-[20.7rem] sm:h-[15rem] lg:mb-6 lg:w-full lg:h-80"
                  width="1216"
                  height="640"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

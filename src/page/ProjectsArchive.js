import React from "react";
import { useState, useEffect, useRef } from "react";
import images from "../assets/github.png";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

function ProjectsArchive() {
  const [refProjects, setRefProjects] = useState([]); // Reference array for all projects fetched
  const [displayedProjects, setDisplayedProjects] = useState([]); // Array for projects to be displayed after filtering
  const [search, setSearch] = useState(""); // State for the search input value
  document.title = "SLPortfolio | Projects";

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

        // Format the projects data
        const formattedProjects = result.map((repo) => ({
          img: images,
          title: repo.name,
          desc: repo.description,
          url: repo.html_url,
        }));

        console.log("Projects", formattedProjects);

        // Set state for both reference and displayed projects
        setRefProjects(formattedProjects);
        setDisplayedProjects(formattedProjects);
      } catch (error) {
        console.error("Failed to fetch projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  // Effect for filtering projects based on search input
  useEffect(() => {
    const lowercasedSearch = search.toLowerCase().trim(); // Convert search input to lowercase and trim whitespace

    // Filtering the projects based on the search term
    const filteredProjects = lowercasedSearch
      ? refProjects.filter((project) =>
          project.title.toLowerCase().includes(lowercasedSearch)
        )
      : refProjects; // If no search input, return all projects
    setDisplayedProjects(filteredProjects); // Update the displayed projects with the filtered results
  }, [search, refProjects]);

  // If there is a search term, filter the projects, otherwise display all.
  function Search() {
    const lowercasedSearch = search.toLowerCase().trim();

    if (lowercasedSearch) {
      const filteredProjects = refProjects.filter((project) =>
        project.title.toLowerCase().includes(lowercasedSearch)
      );
      setDisplayedProjects(filteredProjects);
    } else {
      setDisplayedProjects(refProjects);
    }
  }

  // Reset the search, clear the search input
  function ResetSearch() {
    setSearch("");
    setDisplayedProjects(refProjects);
  }

  return (
    <section
      className="px-5 py-32 bg-gradient-to-r from-purple-100 via-white to-cyan-100"
      id="projects"
    >
      <div className="container mx-auto">
        <div className="text-center pb-5">
          <h2 className="text-4xl font-bold mb-5 inline-block border-b-4 border--h2 pb-2 font-madimi">
            GitHub Projects
          </h2>
          <p className="mb-5 font--ubuntu">All Github Projects By Amrin.</p>

          <div className="flex items-center max-w-sm mx-auto my-8">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <AiOutlineSearch className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                id="simple-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5" // Adjust the right padding pr-10
                placeholder="Search project title..."
                required
              />
              {search && (
                <button
                  onClick={ResetSearch}
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <AiOutlineClose className="text-red-500 h-5 w-5" />
                </button>
              )}
            </div>
            <button
              onClick={Search}
              className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:ring-4 hover:ring-blue-300"
            >
              <AiOutlineSearch className="w-5 h-5" />
            </button>
          </div>
        </div>

        {displayedProjects.length === 0 ? (
          <h1 className=" text-4xl text-center">Error: No projects found.</h1>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 font--ubuntu">
            {displayedProjects.map((project, i) => {
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
        )}
      </div>
    </section>
  );
}

export default ProjectsArchive;

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

function BlogArchive() {
  const [refBlogs, setRefBlogs] = useState([]); // Reference array for all blogs fetched
  const [displayedBlogs, setDisplayedBlogs] = useState([]); // Array for blogs to be displayed after filtering
  const [search, setSearch] = useState(""); // State for the search input value

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=coderamrin&api_key=${API_KEY}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();

        // Format the blogs data
        const formattedBlogs = result.map((blog) => ({
          image: blog.cover_image,
          title: blog.title,
          desc: blog.description,
          url: blog.url,
        }));

        // Set state for both reference and displayed blogs
        setRefBlogs(formattedBlogs);
        setDisplayedBlogs(formattedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  // Effect for filtering blogs based on search input
  useEffect(() => {
    const lowercasedSearch = search.toLowerCase().trim(); // Convert search input to lowercase and trim whitespace

    // Filtering the blogs based on the search term
    const filteredBlogs = lowercasedSearch
      ? refBlogs.filter((blog) =>
          blog.title.toLowerCase().includes(lowercasedSearch)
        )
      : refBlogs; // If no search input, return all blogs
    setDisplayedBlogs(filteredBlogs); // Update the displayed blogs with the filtered results
  }, [search, refBlogs]);

  // Function to handle the search button action
  function Search() {
    const lowercasedSearch = search.toLowerCase().trim();

    // If there is a search term, filter the blogs, otherwise display all.
    if (lowercasedSearch) {
      const filteredBlogs = refBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(lowercasedSearch)
      );
      setDisplayedBlogs(filteredBlogs);
    } else {
      setDisplayedBlogs(refBlogs);
    }
  }

  // Reset the search, clear the search input
  function ResetSearch() {
    setSearch("");
    setDisplayedBlogs(refBlogs);
  }

  return (
    <section
      className="px-5 py-32 bg-gradient-to-r from-purple-100 via-white to-cyan-100"
      id="blogs"
    >
      <div className="container mx-auto mb-10">
        <div className="text-center pb-5">
          <h2 className="text-4xl font-bold mb-5 inline-block border-b-4 border--h2 pb-2 font-madimi">
            Blogs
          </h2>
          <p className="mb-5 font--ubuntu">All Blogs written By Amrin.</p>
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

        {displayedBlogs.length === 0 ? (
          <h1 className=" text-4xl text-center">Error: No projects found.</h1>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 font--ubuntu">
            {displayedBlogs.map((blog) => (
              <div className="bg-white rounded-lg overflow-hidden box--shadowblog shadow-lg hover:shadow-2xl ">
                <img
                  className="w-full h-48 object-cover"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 hover:text-orange-500 transition-colors duration-300">
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {blog.title}
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">{blog.desc}</p>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-4 py-2 rounded-full btn--transition font-medium"
                  >
                    Read More
                    <svg
                      className=" mt-2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 3.33398L12.6667 8.00065L8 12.6673"
                        stroke="currentColor"
                        strokeWidth="2.0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogArchive;

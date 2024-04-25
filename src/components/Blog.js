import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ErrorMessage from "./ErrorAPI";

// Blog Component on Home Page
function Blog() {
  const [blogs, setBlogs] = useState([]); // Holds the state for blog data.
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY; // Get the API key from environment variables for secure access.

  //console.log(API_KEY);

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

        // Slice the results to display only the first four.
        const slicedResult = result.slice(0, 4);

        // Format the blogs data
        const formattedBlogs = slicedResult.map((blog) => ({
          image: blog.cover_image,
          title: blog.title,
          desc: blog.description,
          url: blog.url,
        }));

        // Update the blogs state with the formatted blogs.
        setBlogs(formattedBlogs);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <section
        className="px-5 py-32 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
        id="blogs"
      >
        <ErrorMessage
          title="Blogs"
          message="Failed to load blogs. Please check your internet connection."
        />
      </section>
    );
  }

  return (
    <section
      className="px-5 py-32 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
      id="blogs"
    >
      <div className="container mx-auto ">
        <button className="absolute right-0 md:right-5 lg:right-16 text-white font-semibold px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-purple-600 hover:ring-4 hover:ring-purple-400 transition-ring duration-300 shadow-lg">
          <NavLink to="/blog" className="text-sm sm:text-lg">
            More Blogs
          </NavLink>
        </button>
        <div className="text-center pb-5">
          <h2 className="text-4xl font-bold mb-5 inline-block border-b-4 border--h2 pb-2 font-madimi">
            Blogs
          </h2>
          <p className="mb-5 font--ubuntu">Latest Blogs written By Amrin.</p>
        </div>
        {error && ( // This block will render only if there is an error
          <div className="text-red-500 text-center">
            <p>Failed to load blogs. Please try again later.</p>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-10 font--ubuntu">
          {blogs.map((blog) => (
            <div className="bg-white rounded-lg overflow-hidden box--shadowblog shadow-lg hover:shadow-2xl ">
              <img
                className="w-full h-48 object-cover"
                src={blog.image}
                alt={blog.title}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 hover:text-orange-500 transition-colors duration-300">
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
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
      </div>
    </section>
  );
}

export default Blog;

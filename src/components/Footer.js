import React from "react";

// Footer Component
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100 py-10 mt-auto">
      <div className=" mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="./logo-page.png" alt="Logo" className="mr-3 h-8" />
            <span className="text-xl hidden sm:block font--header">
              SLPortfolio
            </span>
          </a>
          <ul className="flex flex-col md:flex-row items-center text-sm sm:space-x-4">
            <li className="my-1 ul-footer">
              <a href="/#about" className="hover:underline">
                About
              </a>
            </li>
            <li className="my-1 ul-footer">
              <a href="/#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li className="my-1 ul-footer">
              <a href="/#blogs" className="hover:underline">
                Blogs
              </a>
            </li>
            <li className="my-1 ul-footer">
              <a href="/#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-t-1 border-gray-500 w-full" />
        <div className="text-center text-sm mt-12 ">
          <p>© 2024 | Licensed under the MIT License | Designed by SLau Tech</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

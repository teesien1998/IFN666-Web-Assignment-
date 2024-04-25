import React from "react";
import HeroImg from "../assets/heroimage3.png";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";

// Hero Component
function Hero() {
  return (
    <section className="px-5 py-32 bg-gradient-to-r from-indigo-100 via-sky-100 to-emerald-100">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info">
          <h1 className="text-4xl lg:text-6xl">
            Hi, Welcome to <br /> Amrin Portfolio
            <br />
            Frontend Developer
          </h1>

          <p className="py-5 font--caveat ">
            Let's Learn Together, Coding is Fun!!
          </p>

          <div className="flex py-5 mb-4">
            <a
              href="https://www.facebook.com/CoderAmrin/"
              className="pr-4 inline-block text--accent btn--facebook"
              target="_blank"
            >
              <AiOutlineFacebook size={30} />
            </a>
            <a
              href="https://www.youtube.com/@coderamrin"
              className="pr-4 inline-block text--accent btn--youtube"
              target="_blank"
            >
              <AiOutlineYoutube size={30} />
            </a>
            <a
              href="https://twitter.com/CoderAmrin"
              blank=""
              className="pr-4 inline-block text--accent btn--twitter"
              target="_blank"
            >
              {" "}
              <AiOutlineTwitter size={30} />{" "}
            </a>
            <a
              href="https://github.com/Coderamrin"
              className="pr-4 inline-block text--accent btn--github"
              target="_blank"
            >
              {" "}
              <AiOutlineGithub size={30} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className="btn px-5 py-2 shadow-lg rounded-xl text-white bg-purple-600 hover:bg-purple-500 transition-colors duration-300 inline-block"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[70%] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

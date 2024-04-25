import React from "react";
import AboutImg from "../assets/aboutme.gif";

// About Me Component
function About() {
  return (
    <section className=" px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] border--h2 pb-2 inline-block font-madimi">
            About Me
          </h2>

          <p className="pb-5 font--ubuntu">
            Amrin is a Frontend and React.js Developer hailing from Feni,
            Bangladesh, who currently contributes to a project named Uilogs. She
            brings a combination of creativity and technical prowess to web
            development, specializing in utilizing React and Tailwind CSS to
            deliver aesthetically appealing and functional websites. Her skill
            set is comprehensive, covering an array of frontend technologies
            such as React.js, Redux, Redux Toolkit, Axios, Tailwind CSS, SaSS,
            and CSS3.
          </p>
          <p className="pb-5 font--ubuntu">
            Not limited to frontend development, Amrin is also adept with
            backend technologies as well, boasting proficiency in Node.js,
            Express.js, MongoDB, and Mongoose. This combination of frontend and
            backend expertise equips her with the full-stack capabilities needed
            to handle complex web development projects.
          </p>
          <p className="font--ubuntu">
            Apart from her technical endeavors, Amrin is passionate about
            sharing knowledge and engaging with the tech community. She channels
            this passion into creating informative and educational YouTube
            videos as well as writing blog posts, where she discusses
            programming theories and narrates her experience building various
            projects. This content serves as a resource for those interested in
            programming and project development, and it reflects Amrin's
            dedication to both her personal growth and the growth of others in
            the field.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="sm:w-[90%] lg:w-[75%] mx-auto md:mx-0 md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import { FaGoogleDrive } from "react-icons/fa";

// Resume Component
function Resume() {
  return (
    <div>
      <section className="px-5 py-36 bg-gradient-to-b from-indigo-100 via-sky-100 to-emerald-100 text-center ">
        <div className="container mx-auto items-center justify-center md:justify-between py-48">
          <h1 className="text-4xl lg:text-6xl font-madimi">
            Hey, My Name is{" "}
            <span className="text-orange-500">Tee Sien Lau</span>
            <br />
            <h2 className="font-madimi ">This is My Resume</h2>
          </h1>
        </div>
        <a
          href="https://drive.google.com/file/d/1dvFLOCn8Z7ICoU9IhMU_Hy2qfDraNmuK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex absolute font-semibold top-24 right-10 xl:right-20 text-white px-4 py-2 rounded-full shadow-lg bg-purple-600 hover:ring-4 hover:ring-purple-400 transition-ring duration-300"
        >
          <FaGoogleDrive className=" mt-1 mr-2" /> Download Resume
        </a>
      </section>

      <section className="px-5 pt-24 " id="about">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start px-4">
          <div className="summary-info mb-6 p-8 rounded-lg shadow-2xl hover:ring-8 hover:ring-emerald-400	outline outline-offset-8 outline-purple-400 border-2 border-sky-400 ">
            {" "}
            <h2 className="text-4xl font-bold mb-7 border-b-[5px] border--h2 pb-2 inline-block font-madimi">
              Overview Summary
            </h2>
            <p className="font--ubuntu">
              I am Tee Sien Lau from Malaysia, currently pursuing a Master of
              Information Technology with a major in Computer Science at QUT
              (Queensland University of Technology). I am passionate about
              continuous learning. During my spare time, I enjoy exercising and
              working out regularly.
            </p>
          </div>

          <div className="education-info mb-6 p-8 rounded-lg shadow-2xl hover:ring-8 hover:ring-emerald-400 outline outline-offset-8 outline-purple-400 border-2 border-sky-400">
            <h2 className="text-4xl font-bold mb-7 border-b-[5px] border--h2 pb-2 inline-block font-madimi">
              Educations
            </h2>
            <ul className="list-disc pl-5 space-y-5 font--ubuntu">
              <li>
                <h2>INTI International College Penang </h2>
                <p className="text-gray-600 italic font-normal">2016 – 2017</p>
                <p className="text-gray-600">Cambridge A Level</p>
              </li>

              <li>
                <h2 className="">INTI International College Penang </h2>
                <p className="text-gray-600 italic font-normal">2017 – 2020</p>
                <p className="text-gray-600">
                  Bachelor of Engineering with Honors in Electrical and
                  Electronic Engineering
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 pt-24" id="about">
        <div className="container mx-auto items-start px-4">
          <div className="experience-info mb-6 p-8 rounded-lg shadow-2xl hover:ring-8 hover:ring-emerald-400 outline outline-offset-8 outline-purple-400 border-2 border-sky-400">
            {" "}
            <h2 className="text-4xl font-bold mb-7 border-b-[5px] border--h2 pb-2 inline-block font-madimi">
              Working Experience
            </h2>
            <div className="experience-block mb-8 font--ubuntu">
              <h2 className="text-2xl font-bold mb-2 ">Internship</h2>
              <p className="text-gray-600 mb-2 ">
                Plexus Manufacturing Sdn. Bhd. | Malaysia
              </p>
              <p className="text-gray-600 italic mb-2">2019 – 2020</p>
              <ul className="list-disc pl-5  ">
                <li>Trained under test engineering department</li>
                <li>
                  Learn and operated the AOI (Automated Optical Inspection)
                  inspection test for PCB in production line
                </li>
                <li>
                  Ensure PCBs are in good condition before proceeding to the
                  next manufacturing line such as ICT and AXI (Automated X-ray
                  Inspection).
                </li>
              </ul>
            </div>
            <div className="experience-block font--ubuntu">
              <h2 className="text-2xl font-semibold mb-2 ">
                Physical Design Engineer
              </h2>
              <p className="text-gray-600 mb-2 ">
                Oppstar Technology Sdn. Bhd. | Malaysia
              </p>
              <p className="text-gray-600 italic mb-2 ">2021 – 2023</p>
              <ul className="list-disc pl-5 text-gray-800">
                <li>
                  Perform auto Place & Route work, including floorplanning, PG
                  mesh, placement, CTS, routing, and DFM.
                </li>
                <li>
                  Close timing, fix DRC/LVS, and power metric check on a complex
                  integrated circuit design at the block, and subsystem level.
                </li>
                <li>
                  Responsible for full design flow through to design closure and
                  achieving the best QoR in terms of performance, power, and
                  timing convergence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-24 " id="about">
        <div className="container mx-auto items-start px-4">
          <div className="skills-info mb-6 p-8 rounded-lg shadow-2xl hover:ring-8 hover:ring-emerald-400 outline outline-offset-8 outline-purple-400 border-2 border-sky-400">
            {" "}
            <h2 className="text-4xl font-bold mb-7 border-b-[5px] border--h2 pb-2 inline-block font-madimi">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4 font--ubuntu">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Programming Languages:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li classname="">C# Languages (Intermediate)</li>
                  <li>HTML (Intermediate)</li>
                  <li>CSS (Intermediate)</li>
                  <li>JavaScript (Intermediate)</li>
                  <li>Python (Basic)</li>
                  <li>Unix (Intermediate)</li>
                  <li>C Languages (Basic)</li>
                  <li>Python (Basic)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Physical Design Engineering Skills:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cadence Innovus</li>
                  <li>Post-Layout / Physical Verification</li>
                  <li>Place & Route</li>
                  <li>Timing Closure</li>
                  <li>Unix Programming</li>
                  <li>Power Optimization</li>
                  <li>Static Timing Analysis (STA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24" id="about">
        <div className="container mx-auto items-start px-4">
          <div className="experience-info mb-6 p-8 rounded-lg shadow-2xl hover:ring-8 hover:ring-emerald-400 outline outline-offset-8 outline-purple-400 border-2 border-sky-400">
            {" "}
            <h2 className="text-4xl font-bold mb-7 border-b-[5px] border--h2 pb-2 inline-block font-madimi">
              Projects
            </h2>
            <div className="font--ubuntu">
              <ul className="list-disc pl-5 ">
                <li>
                  <span className="font-semibold">Embedded Project</span>:
                  Embedded and designed a vacuum cleaner robotic model. Built
                  with C languages.
                </li>
                <li>
                  <span className="font-semibold">
                    Solar Monitoring Web Application
                  </span>
                  : Designed and developed a real-time solar monitoring web
                  application. Built with HTML, CSS, Javascript & Node.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;

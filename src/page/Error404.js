import React, { useState, useEffect } from "react";
import { FaGoogleDrive } from "react-icons/fa";

function Error() {
  return (
    <section className="px-5 py-36 bg-gradient-to-b from-indigo-100 via-sky-100 to-emerald-100 text-center ">
      <div className="container mx-auto items-center justify-center md:justify-between py-48">
        <h1 className="text-6xl lg:text-8xl text-orange-500">404 Error</h1>
        <h1 className="text-4xl lg:text-6xl ">Page Not Found</h1>
      </div>
    </section>
  );
}
export default Error;

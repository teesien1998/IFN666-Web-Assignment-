import React from "react";

// Contact Component
function Contact() {
  return (
    <section className="px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto ">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] mx-auto border--h2 pb-2 inline-block font-madimi">
          Contact Her
        </h2>
        <p>
          She is presently seeking opportunities for a full-time position as a
          Frontend Developer. If you're interested in discussing this further,
          please don't hesitate to reach out to her via email or phone.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> coderamrin@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +88 01624-890723
        </p>
      </div>
    </section>
  );
}

export default Contact;

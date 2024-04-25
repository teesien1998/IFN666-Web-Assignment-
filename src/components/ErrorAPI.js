// ErrorMessage.js
import React from "react";

const ErrorMessage = ({ message, title }) => {
  return (
    <div className="container mx-auto ">
      <div className="text-center pb-5">
        <h2 className="text-4xl font-bold mb-5 inline-block border-b-4 border--h2 pb-2 font-madimi">
          {title}
        </h2>

        <h2 className="text-2xl lg:text-4xl text-orange-500 mt-10">
          Network Connection Error
        </h2>
        <br />
        <h2 className="text-2xl lg:text-4xl ">{message}</h2>
      </div>
    </div>
  );
};

export default ErrorMessage;

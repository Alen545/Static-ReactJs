import React from "react";

function InterestedSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full bg-black text-white py-4 mb-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-center">
          Interested In Delving Deeper Into The Project?
        </h2>
        <p className="max-w-xl text-center font-light text-[16px] leading-relaxed mb-8">
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at
          <a href="mailto:hello@abc.com" className="text-blue-500">
            {" "}
            hello@abc.com{" "}
          </a>
          or give us a call at
          <a href="tel:+9148020802730" className="text-blue-500">
            {" "}
            +91 480 20802730
          </a>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-transparent border border-white text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition">
            Ring us on Skype
          </button>
          <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </div>
      <footer className="w-full text-center text-sm font-roboto text-gray-500 mt-auto">
        © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </footer>
    </>
  );
}

export default InterestedSection;

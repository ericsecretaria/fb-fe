import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      {/* <img src="/hero.jpeg" className="w-full h-full object-cover" />
      src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
      */}

      <div className="relative">
        <img
          src="/hero.jpeg"
          className="absolute inset-0 object-cover w-screen h-screen"
          alt=""
        />
        {/* <div className="bg-gray-900 bg-opacity-50 relative h-screen flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"> */}
        <div className="bg-gray-900 bg-opacity-75 relative w-screen h-screen flex flex-col items-start  px-4 mx-auto md:px-8 ">
          <div className="mt-40">
            {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
               Brand new
             </p> */}
            <h2 className="md:pt-20 mb-10 font-sans text-4xl md:text-7xl font-bold tracking-wide text-white">
              Cooking made <span className="text-orange-600">easy.</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-white md:text-lg tracking-wide">
              Discover and enjoy amazing food recipes that you can simply make
              and serve on any occassion.
            </p>
            <p className="pr-5 mb-5 text-base text-white md:text-lg tracking-wide">
              Foods are at it's finest taste.
            </p>

            <div className="flex items-center mt-20">
              <Link
                to={"/login"}
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
//https://dribbble.com/shots/20787666-Recipe-Website-Design
// https://devdevout.com/css/css-cards

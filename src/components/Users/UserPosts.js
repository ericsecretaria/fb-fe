import React from "react";
import { Link } from "react-router-dom";

const UserPosts = ({ posts }) => {
  return (
    <section className="relative py-24 bg-transparent">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
        }}
      />
      <div className="container relative z-10 px-4 mx-auto">
        <div className="mx-auto mb-8 text-center md:max-w-5xl md:mb-16">
          <span className="inline-block px-3 py-px mb-4 text-xs font-medium leading-5 text-orange-500  bg-orange-100 rounded-full shadow-sm">
            Your Recipes
          </span>
          <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-5xl text-darkCoolGray-900">
            Shared Recipes ({posts?.length})
          </h3>
          <p className="mb-10 text-lg font-medium md:text-xl text-coolGray-500">
            With your passion and taste, you can share your favorite dish(es)
            and will also learn from others by their good food easy recipes.
          </p>
        </div>

        <div className="flex flex-wrap mb-12 -mx-4 md:mb-20">
          {posts?.map((post) => {
            return (
              <>
                {/* <div className="w-full px-4 mb-8 md:w-1/2"> */}
                <div className="w-full px-4 mb-8 md:w-1/2">
                  <Link
                    to={`/posts/${post?._id}`}
                    className="block mb-6 overflow-hidden rounded-md"
                  >
                    <img
                      className="w-full md:h-[350px]"
                      src={post?.image}
                      alt={post?.foodtitle}
                    />
                  </Link>
                  <div className="mb-4">
                    {/* {post?.category?.name && (
                      <a
                        className="inline-block px-3 py-1 text-xs font-medium leading-5 text-green-500 uppercase bg-green-100 rounded-full shadow-sm hover:text-green-600 hover:bg-green-200"
                        href="#"
                      >
                        {post?.category?.name}
                      </a>
                    )} */}
                  </div>
                  <p className="inline-flex mb-4 text-2xl font-bold leading-tight md:text-3xl text-coolGray-800 hover:text-coolGray-900">
                    {post?.foodtitle}
                  </p>
                  <span className="ml-3 text-orange-500">•</span>
                  <p className="flex inline-flex ml-3 mb-2 font-medium text-orange-500 italic">
                    {new Date(post?.createdAt).toDateString()}
                  </p>

                  {/* <p className="mb-6 text-lg font-medium text-coolGray-500">
                    {post?.foodcontent}
                  </p> */}
                  {/* <a
                    className="inline-flex items-center text-base font-semibold text-green-500 md:text-lg hover:text-green-600"
                    href="#"
                  > */}
                  {/* edit icon */}
                  {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg> */}
                  {/* </a> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserPosts;

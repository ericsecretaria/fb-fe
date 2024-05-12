import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrivatePostsAction } from "../../redux/slices/posts/postsSlice";
import LoadingComponent from "../Alert/LoadingComponent";
import { Link } from "react-router-dom";

const PostLists = () => {
  //! redux store
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector((state) => state?.posts);
  //dispatch
  useEffect(() => {
    dispatch(fetchPrivatePostsAction());
  }, [dispatch]);
  return (
    <>
      <div className="relative">
        <img
          // src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
          src="/recipe.jpg"
          className="absolute inset-0 object-cover w-screen h-screen"
          alt=""
        />
        {/* <div className="bg-black bg-opacity-60 relative w-screen h-screen overflow-scroll"> */}
        <div className="bg-black bg-opacity-10 relative w-screen h-screen overflow-y-scroll">
          {/* <div class="container my-12 mx-auto px-4 md:px-12"> */}
          <div class="container mt-20 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
              {/* loop */}
              {loading ? (
                <LoadingComponent />
              ) : error ? (
                <h3 className="text-red-500 text-center">{error?.message}</h3>
              ) : posts?.post?.length <= 0 ? (
                <h1>No Post found</h1>
              ) : (
                posts?.posts?.map((post) => {
                  return (
                    // <div class="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                    <div class="w-full md:w-1/4">
                      <div class="flex justify-center items-center hover:-translate-y-1">
                        <div class="max-w-md rounded overflow-hidden">
                          <div class="px-6 py-1 flex justify-between items-center">
                            <div class="text-sm border-2 border-orange-500 z-10 w-60 p-2 rounded-lg shadow-lg bg-orange-100">
                              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate text-start">
                                {post?.foodtitle}
                              </h4>
                              <p class="text-gray-600">
                                From: {post?.author?.username}
                              </p>
                              <p class="text-gray-600">
                                Preparation: {post?.foodtimeprep} mins.
                              </p>
                              <p class="text-gray-600">
                                Posted:{" "}
                                {new Date(post?.createdAt).toDateString()}
                              </p>
                              <div className="mt-3">
                                <Link
                                  to={`/posts/${post?._id}`}
                                  class="text-orange-600 text-md font-semibold hover:underline"
                                >
                                  View More &#x3E;
                                </Link>
                              </div>
                            </div>
                            <div class="relative -ml-10 z-10">
                              <div class="circle-img h-20 w-20 border-2 border-orange-500 rounded-full overflow-hidden">
                                <img
                                  src={post?.image}
                                  class="h-full w-full object-cover"
                                  alt="Circle food"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLists;

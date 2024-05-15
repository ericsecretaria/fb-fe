import React, { useEffect } from "react";
import {
  deletePostAction,
  getPostAction,
  // postViewCountAction,
} from "../../redux/slices/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import LoadingComponent from "../Alert/LoadingComponent";
import ErrorMsg from "../Alert/ErrorMsg";
import PostStats from "./PostStats";
// import calculateReadingTime from "../../utils/calculateReadingTime";
import AddComment from "../Comments/AddComment";

const PostDetails = () => {
  //! navigation
  const navigate = useNavigate();
  //! redux store
  const dispatch = useDispatch();
  const { post, error, success } = useSelector((state) => state?.posts);
  //! Get the creator of the post
  const creator = post?.post?.author?._id?.toString();
  //! Get Params
  const { postId } = useParams();
  //dispatch
  useEffect(() => {
    dispatch(getPostAction(postId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, postId, post?.post?.likes.length, post?.post?.dislikes.length]);
  //   console.log(post);

  //! Post view
  // useEffect(() => {
  //   dispatch(postViewCountAction(postId));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  useEffect(() => {
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! Get the login user
  const { userAuth } = useSelector((state) => state?.users);
  const loginUser = userAuth?.userInfo?._id?.toString();
  const isCreator = creator === loginUser;

  //! Delete Post Handler
  const deletePostHandler = () => {
    dispatch(deletePostAction(postId));

    if (success) {
      window.location.reload();
      navigate("/posts");
      window.scrollTo(0, 0);
    }
  };

  if (!post || !post.post || !post.post.foodrecipe) {
    // Handle the case when post or its properties are undefined
    return null;
  }
  const text = post.post.foodrecipe;
  const lines = text.split(".");

  return (
    <>
      {error ? (
        <ErrorMsg message={error?.message} />
      ) : (
        <section
          className="py-16 bg-white md:py-24 md:px-24"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="mx-auto mb-12 text-center md:max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-5xl text-darkCoolGray-900">
                {post?.post?.foodtitle}
              </h2>

              <Link
                to={`/user-public-profile/${post?.post?.author?._id}`}
                className="flex items-center justify-center -mx-2 text-left"
              >
                <div className="w-auto px-2">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={post?.post?.author?.profilePicture}
                    alt="post-author"
                  />
                </div>
                <div className="w-auto px-2">
                  <h4 className="text-base font-bold md:text-lg text-coolGray-800">
                    {post?.post?.author?.username}{" "}
                    <span className="mx-1 text-orange-500">•</span>
                    <p className="inline-block font-medium text-orange-500">
                      {new Date(post?.post?.createdAt).toDateString()}
                    </p>
                  </h4>
                </div>
              </Link>
              <div className="inline-block px-3 mt-5 py-1 mb-6 text-xs font-medium leading-5 text-orange-500  bg-orange-100 rounded-full shadow-sm italic">
                {post?.post?.category?.name}
              </div>
            </div>
          </div>

          <img
            className="w-full mx-auto mb-4 mb-10 rounded-2xl px-1 md:w-4/6 md:h-4/6"
            src={post?.post?.image}
            alt="post-food"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {/* Posts stats */}
            <PostStats
              postViews={post?.post?.postViews.length}
              likes={post?.post?.likes.length}
              dislikes={post?.post?.dislikes.length}
              totalComments={post?.post?.comments.length}
              createdAt={post?.post?.createdAt}
              // readingTime={calculateReadingTime(post?.post?.content)}
              postId={post?.post?._id}
              claps={post?.post?.claps}
            />
          </div>
          <div className="container px-4 mx-auto">
            <div className="mx-auto md:max-w-3xl">
              {/* delete and update icons */}
              {isCreator && (
                <div className="flex justify-end mb-4">
                  {/* edit */}
                  <Link
                    to={`/posts/${post?.post?._id}/update`}
                    className="p-2 mr-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#FC2E20"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                  {/* delete */}
                  <button
                    onClick={deletePostHandler}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#FC2E20"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {/* recipe guides */}
              <div className="bg-white rounded shadow">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-orange-500">
                    Description:
                  </h3>
                  <hr className="mb-2 border-gray-300" />
                  <div className="mb-10">
                    <p>{post?.post?.foodcontent}</p>
                  </div>

                  <h3 className="text-lg font-medium leading-6 text-orange-500">
                    Ingredients:
                  </h3>
                  <hr className="mb-2 border-gray-300" />

                  <div className="whitespace-pre-wrap">
                    {lines.map((line, index) => (
                      <p key={index}>{line.trim()}</p>
                    ))}
                  </div>

                  {/* <div className="mt-5">
                    <hr className="mt-5 border-gray-300" />
                    <h3 className="text-lg font-medium leading-6 text-blue-600">
                      How to cook:
                    </h3>
                  </div> */}
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-semibold md:text-3xl text-coolGray-800 mt-20">
                Leave a comment
              </h3>

              {/* Comment form */}
              <AddComment postId={postId} comments={post?.post?.comments} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;

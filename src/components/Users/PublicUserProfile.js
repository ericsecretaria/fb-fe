import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  blockUserAction,
  followUserAction,
  profileViewCountAction,
  unBlockUserAction,
  unFollowUserAction,
  userPrivateProfileAction,
  userPublicProfileAction,
} from "../../redux/slices/users/usersSlices";
import UserPosts from "./UserPosts";

export default function PublicUserProfile() {
  //Get id from params
  const { userId } = useParams();
  //! Get data from store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userPublicProfileAction(userId));
  }, [userId, dispatch]);

  //! Provile viewer count
  useEffect(() => {
    dispatch(profileViewCountAction(userId));
  }, [userId, dispatch]);

  const { user, profile } = useSelector((state) => state?.users);

  //!Get all the users, the login user has blocked
  const blockedUsers = profile?.user?.blockedUsers;
  const hasBlocked = blockedUsers?.some((user) => user._id === userId);

  //!Get all the users, the login user has followed
  const followedUsers = profile?.user?.following;
  const hasFollowed = followedUsers?.some((user) => user._id === userId);

  //get user private profile
  useEffect(() => {
    dispatch(userPrivateProfileAction());
  }, [userId, dispatch, hasBlocked, hasFollowed]);

  //! Block user handler
  const blockUserHandler = () => {
    dispatch(blockUserAction(userId));
  };

  //! unBlock user handler
  const unBlockUserHandler = () => {
    dispatch(unBlockUserAction(userId));
  };

  //! Follow user handler
  const followUserHandler = () => {
    dispatch(followUserAction(userId));
  };

  //! UnFollow user handler
  const unFollowUserHandler = () => {
    dispatch(unFollowUserAction(userId));
  };

  return (
    <>
      <div className="flex h-full">
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden bg-white">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <div>
                      <img
                        className="object-cover w-full h-32 lg:h-48"
                        src={user?.user?.coverImage}
                        alt={user?.user?.username}
                      />
                    </div>
                  </div>

                  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      {/* Add CameraIcon for profile image upload */}
                      <div className="relative flex items-center justify-center">
                        <img
                          className="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                          src={user?.user?.profilePicture}
                          alt={user?.user?.username}
                        />
                      </div>

                      <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                          <h1 className="text-2xl font-bold text-gray-900 truncate">
                            {user?.user?.username}
                          </h1>
                        </div>

                        <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4">
                          {/* user Views */}
                          <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <svg
                              className="-ml-0.5 h-5 w-5 text-gray-400"
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
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            ({user?.user?.profileViewers?.length})
                          </button>
                          {/* block and unblock */}
                          {hasBlocked ? (
                            <button
                              onClick={unBlockUserHandler}
                              type="button"
                              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <svg
                                className="-ml-0.5 h-5 w-5 text-gray-400"
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
                                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                />
                              </svg>
                              Unblock
                            </button>
                          ) : (
                            <button
                              onClick={blockUserHandler}
                              type="button"
                              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <svg
                                className="-ml-0.5 h-5 w-5 text-gray-400"
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
                                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                />
                              </svg>
                              Block
                            </button>
                          )}

                          {/* follow and unfollow*/}
                          {hasFollowed ? (
                            <button
                              onClick={unFollowUserHandler}
                              type="button"
                              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <svg
                                className="-ml-0.5 h-5 w-5 text-gray-400"
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
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              UnFollow
                            </button>
                          ) : (
                            <button
                              onClick={followUserHandler}
                              type="button"
                              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <svg
                                className="-ml-0.5 h-5 w-5 text-gray-400"
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
                                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              Follow
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {user?.user?.username}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Profile details */}
                <div className="max-w-5xl px-4 mx-auto mt-6 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Email: {user?.user?.email}
                      </dt>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Date Joined:{" "}
                        {new Date(user?.user?.createdAt).toDateString()}
                      </dt>
                    </div>

                    {/* <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        About
                      </dt>
                      <dd className="mt-1 space-y-5 text-sm text-gray-900 max-w-prose">
                        lorem label
                      </dd>
                    </div> */}
                  </dl>
                </div>
                {/* Posts Lists */}
                <UserPosts posts={user?.user?.posts} />
                {/* <Followers followers={profile?.user?.followers} /> */}
                {/* Followed Users */}
                {/* <UsersLists /> */}
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

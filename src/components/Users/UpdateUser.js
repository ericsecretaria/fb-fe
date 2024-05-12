import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import "tailwindcss/tailwind.css";
import { updateUserProfileAction } from "../../redux/slices/users/usersSlices";
import LoadingComponent from "../Alert/LoadingComponent";
// import ErrorMsg from "../Alert/ErrorMsg";
// import SuccessMsg from "../Alert/SuccessMsg";
import { Link } from "react-router-dom";
import { logoutAction } from "../../redux/slices/users/usersSlices";

const UpdateUser = () => {
  // const navigate = useNavigate();
  //! Dispatch
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });

  //handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //! dispatch
    // resetToken is from the slices, need to match and assign token in the params
    dispatch(
      updateUserProfileAction({
        username: formData.username,
        email: formData.email,
      })
    );
    // reset form
    setFormData({
      email: "",
      username: "",
    });
    dispatch(logoutAction());
    //reload
    // navigate("/login");
    window.location.reload();
  };

  // data in store
  //const user = useSelector((state) => state);
  //console.log(user); suppose to be state.users.userinfo but destructure it.
  const { loading } = useSelector((state) => state?.users);
  return (
    <div
      className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4 bg-orange-400"
      // style={{
      //   backgroundImage: "url(/register.jpg)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-opacity-50 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-orange-600">
              Update Profile
            </h3>
            <p className="italic text-xs mt-2">
              Take Note: Not all fields are required, just fill in with the
              necessary detail(s) to be updated. Please make sure to remember
              the details you have updated.
            </p>
          </div>
          <div>
            <div className="relative flex items-center text-white">
              <input
                name="username"
                type="text"
                className="bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-white"
                placeholder="Update your Username"
                value={formData.username}
                onChange={handleChange}
              />

              <svg
                viewBox="0 0 16 16"
                fill="black"
                stroke="gray-900"
                className="w-[18px] h-[18px] absolute right-2"
              >
                <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative flex items-center text-white">
              <input
                name="email"
                type="email"
                className="bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-white"
                placeholder="Update your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <svg
                viewBox="0 0 1024 1024"
                fill="black"
                stroke="black"
                className="w-[18px] h-[18px] absolute right-2"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
              </svg>
            </div>
          </div>

          <div className="mt-10">
            {loading ? (
              <LoadingComponent />
            ) : (
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none"
              >
                Update and Logout
              </button>
            )}

            <p className="text-sm text-center font-bold mt-6 text-black">
              I don't want to update my profile,
              <Link
                to="/user-profile"
                className="font-semibold hover:underline ml-1 whitespace-nowrap text-orange-600"
              >
                Take me back
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;

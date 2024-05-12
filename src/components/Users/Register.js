import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../../redux/slices/users/usersSlices";
import LoadingComponent from "../Alert/LoadingComponent";

const Register = () => {
  //! Navigation hook
  const navigate = useNavigate();
  //! Dispatch
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  //handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerAction({
        username: formData.username,
        password: formData.password,
        email: formData.email,
      })
    );
    // reset form
    setFormData({
      email: "",
      password: "",
      username: "",
    });
  };

  // data in store
  const { user, loading } = useSelector((state) => state?.users);
  //! Redirect
  useEffect(() => {
    if (user?.status === "success") {
      navigate("/login");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.status]);

  return (
    <div
      className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4"
      style={{
        backgroundImage: "url(/register.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-opacity-50 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-orange-600">
              Register
            </h3>
          </div>
          <div>
            <div className="relative flex items-center text-white">
              <input
                name="username"
                type="text"
                required
                className="bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-white"
                placeholder="Username"
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
                name="password"
                type="password"
                required
                className="bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-white"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <svg
                viewBox="0 0 1024 1024"
                fill="black"
                stroke="black"
                className="w-[18px] h-[18px] absolute right-2"
              >
                <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-8">
            <div className="relative flex items-center text-white">
              <input
                name="email"
                type="email"
                required
                className="bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-white"
                placeholder="Email"
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
                Register
              </button>
            )}

            <p className="text-sm text-center font-bold mt-6 text-black">
              I already have an account,
              <Link
                to="/login"
                className="font-semibold hover:underline ml-1 whitespace-nowrap text-orange-600"
              >
                Login
              </Link>
            </p>
          </div>
          {/* <hr className="my-6 border-gray-500" />
          <div className="space-x-8 flex justify-center">
            <button type="button" className="border-none outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                className="inline"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
            </button>
            <button type="button" className="border-none outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                fill="#000"
                viewBox="0 0 22.773 22.773"
              >
                <path
                  d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
            <button type="button" className="border-none outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                fill="#007bff"
                viewBox="0 0 167.657 167.657"
              >
                <path
                  d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                  data-original="#010002"
                ></path>
              </svg>
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Register;

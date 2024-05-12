import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Select from "react-select";
// import { fetchCategoriesAction } from "../../redux/slices/categories/categoriesSlice";
// import { addPostAction } from "../../redux/slices/posts/postsSlice";
import LoadingComponent from "../Alert/LoadingComponent";
// import ErrorMsg from "../Alert/ErrorMsg";
// import SuccessMsg from "../Alert/SuccessMsg";
import { uploadProfileImageAction } from "../../redux/slices/users/usersSlices";

const UploadProfileImage = () => {
  //fetch categories
  const dispatch = useDispatch();
  //! Error state
  // const [errors, setErrors] = useState({});

  useEffect(() => {}, [dispatch]);

  const [formData, setFormData] = useState({
    image: null,
  });

  const { loading } = useSelector((state) => state?.users);

  //1. Validate form
  // const validateForm = (data) => {
  //   let errors = {};
  //   if (!data.image) errors.image = "Image is required";
  //   return errors;
  // };
  //2. Handle Blur
  // const handleBlur = (e) => {
  //   const { name } = e.target;
  //   const formErrors = validateForm(formData);
  //   setErrors({ ...errors, [name]: formErrors[name] });
  // };

  //! Handle image change
  const HandleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const errors = validateForm(formData);
    // setErrors(errors);
    // if (Object.keys(errors).length === 0) {
    // console.log(formData);
    // dispatch the action
    dispatch(uploadProfileImageAction(formData));
    // e.preventDefault();
    // }
  };

  return (
    <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4 bg-orange-400">
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-opacity-50 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] mt-16"
        >
          {/* Error Here */}
          {/* {error && <ErrorMsg message={error?.message} />}
          {success && (
            <SuccessMsg message="Profile picture uploaded successfully" />
          )} */}
          <h3 className="mb-7 text-base md:text-lg text-coolGray-900 font-medium text-center">
            Upload or update Profile Image
          </h3>
          <div className="mt-8">
            <div className="relative flex items-center text-orange-500">
              <input
                name="image"
                type="file"
                className="bg-transparent rounded-lg w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
                placeholder="Profile picture"
                onChange={HandleFileChange}
              />
              <svg
                viewBox="0 0 1024 1024"
                fill="black"
                stroke="black"
                className="w-[18px] h-[18px] absolute right-2"
              >
                <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
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
                Upload Image
              </button>
            )}

            {/* <p className="text-sm text-center font-bold mt-6 text-black">
            I don't want to update my profile,
            <Link
              to="/user-profile"
              className="font-semibold hover:underline ml-1 whitespace-nowrap text-orange-600"
            >
              Take me back
            </Link>
          </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProfileImage;

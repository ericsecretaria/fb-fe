import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchCategoriesAction } from "../../redux/slices/categories/categoriesSlice";
import { updatePostAction } from "../../redux/slices/posts/postsSlice";
import LoadingComponent from "../Alert/LoadingComponent";
// import ErrorMsg from "../Alert/ErrorMsg";
// import SuccessMsg from "../Alert/SuccessMsg";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePost = () => {
  const navigate = useNavigate();
  //! Get the post id from params
  const { postId } = useParams();
  //fetch categories
  const dispatch = useDispatch();
  //! Error state
  // const [errors, setErrors] = useState({});
  //get data from store
  const { categories } = useSelector((state) => state?.categories);

  const options = categories?.categories?.map((category) => {
    return {
      value: category?._id,
      label: category?.name,
    };
  });
  //! Get post from store
  const { loading, success } = useSelector((state) => state?.posts);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    foodtitle: "",
    foodtimeprep: "",
    foodrecipe: "",
    image: null,
    category: null,
    foodcontent: "",
  });

  //1. Validate form
  // const validateForm = (data) => {
  //   let errors = {};
  //   if (!data.foodtitle) errors.foodtitle = "foodtitle is required";
  //   if (!data.foodtimeprep) errors.foodtimeprep = "foodtimeprep is required";
  //   if (!data.foodrecipe) errors.foodrecipe = "foodrecipe is required";
  //   if (!data.image) errors.image = "image is required";
  //   if (!data.category) errors.category = "category is required";
  //   if (!data.foodcontent) errors.foodcontent = "foodcontent is required";
  //   return errors;
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //! React select handle change
  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, category: selectedOption.value });
  };

  //! Handle image change
  const HandleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePostAction({ ...formData, postId }));
    e.preventDefault();
    setFormData({
      foodtitle: "",
      foodtimeprep: "",
      foodrecipe: "",
      image: null,
      category: null,
      foodcontent: "",
    });
  };

  //! Redirect Post Handler
  const redirectPostHandler = () => {
    navigate(`/posts`);
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
    //     <div className="flex flex-col items-center p-10 xl:px-24 xl:pb-12 bg-white lg:max-w-xl lg:ml-auto rounded-4xl shadow-2xl">
    //       <h2 className="mb-4 text-2xl md:text-3xl text-coolGray-900 font-bold text-center">
    //         Update Post
    //       </h2>
    //       {/* Error Here */}
    //       {error && <ErrorMsg message={error?.message} />}
    //       {success && <SuccessMsg message="Post Updated successfully" />}
    //       <h3 className="mb-7 text-base md:text-lg text-coolGray-500 font-medium text-center">
    //         Share your thoughts and ideas with the community
    //       </h3>
    //       <label className="mb-4 flex flex-col w-full">
    //         <span className="mb-1 text-coolGray-800 font-medium">Title</span>
    //         <input
    //           className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
    //           type="text"
    //           placeholder="Enter the post title"
    //           name="title"
    //           value={formData.title}
    //           onChange={handleChange}
    //         />
    //         {/* error here */}
    //       </label>
    //       <label className="mb-4 flex flex-col w-full">
    //         <span className="mb-1 text-coolGray-800 font-medium">Image</span>
    //         <input
    //           className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
    //           type="file"
    //           name="image"
    //           onChange={HandleFileChange}
    //         />
    //         {/* error here */}
    //       </label>
    //       {/* category here */}
    //       <label className="mb-4 flex flex-col w-full">
    //         <span className="mb-1 text-coolGray-800 font-medium">category</span>
    //         <Select
    //           options={options}
    //           name="category"
    //           onChange={handleSelectChange}
    //         />
    //         {/* error here */}
    //       </label>
    //       <label className="mb-4 flex flex-col w-full">
    //         <span className="mb-1 text-coolGray-800 font-medium">Content</span>
    //         <textarea
    //           className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
    //           placeholder="Write your post content"
    //           name="content"
    //           value={formData.content}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       {/* button */}
    //       {loading ? (
    //         <LoadingComponent />
    //       ) : (
    //         <button
    //           className="mb-4 inline-block py-3 px-7 w-full leading-6 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
    //           type="submit"
    //         >
    //           Update
    //         </button>
    //       )}
    //     </div>
    //   </form>
    // </div>
    <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4 bg-orange-400">
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-opacity-50 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] mt-16"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-orange-600">
              Update Food Recipe
            </h3>
            <p className="italic text-xs mt-2">
              Take Note: Not all fields are required, just fill in with the
              necessary detail(s) to be updated. Please make sure to remember
              the details you have updated.
            </p>
          </div>
          {/* Error Here */}
          {/* {error && <ErrorMsg message={error?.message} />} */}
          {/* {success && <SuccessMsg message="Post created successfully" />} */}
          <div>
            <div className="relative flex items-center text-orange-500">
              <input
                name="foodtitle"
                type="text"
                className="placeholder:italic bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
                placeholder="Food Name"
                value={formData.foodtitle}
                onChange={handleChange}
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                className="w-[18px] h-[18px] absolute right-2"
              >
                <path d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29V23M1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15h15.03M1 17h15v2H1v-2z" />
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative flex items-center text-orange-500">
              <input
                name="foodtimeprep"
                type="text"
                className="placeholder:italic bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
                placeholder="Preparation in minutes"
                value={formData.foodtimeprep}
                onChange={handleChange}
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                className="w-[18px] h-[18px] absolute right-2"
              >
                <path d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m.5 10.8l-4.8 2.8-.7-1.4 4-2.3V7h1.5v5.8z" />
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <textarea
              name="foodrecipe"
              rows="4"
              value={formData.foodrecipe}
              onChange={handleChange}
              class="placeholder:italic block p-2.5 bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
              placeholder="Write your recipes here..."
            ></textarea>

            {/* <div className="relative flex items-center text-orange-500">
            <input
              type="text"
              name="foodrecipe"
              className="bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
              placeholder="foodrecipes"
              value={formData.foodrecipe}
              onChange={handleChange}
            />
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="black"
              className="w-[18px] h-[18px] absolute right-2"
            >
              <path d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3.854 2.146a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 3.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 7.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z" />
            </svg>
          </div> */}
          </div>

          <div className="mt-8">
            <div className="relative flex items-center text-orange-500">
              <input
                name="image"
                type="file"
                className="placeholder:italic bg-transparent rounded-lg w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
                placeholder="Food Looks"
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

          <div className="mt-8">
            <div className="relative flex items-center text-orange-500">
              <Select
                options={options}
                name="category"
                className="placeholder:italic bg-transparent rounded-lg w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
                placeholder="Select a food category..."
                onChange={handleSelectChange}
              />
              {/* <svg
              viewBox="0 0 1024 1024"
              fill="black"
              stroke="black"
              className="w-[18px] h-[18px] absolute right-2"
            >
              <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
            </svg> */}
            </div>
          </div>

          <div className="mt-8">
            <div className="relative flex items-center text-orange-500">
              <textarea
                name="foodcontent"
                rows="4"
                value={formData.foodcontent}
                onChange={handleChange}
                className="placeholder:italic block p-2.5 bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
                placeholder="Food Description here..."
              ></textarea>

              {/* <input
              name="foodcontent"
              type="text"
              className="bg-transparent w-full text-sm border-b border-white px-2 py-3 outline-none placeholder:text-orange-500"
              placeholder="Food Description"
              value={formData.email}
              onChange={handleChange}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              className="w-[18px] h-[18px] absolute right-2"
            >
              <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z" />
              <path d="M7 9h10v2H7zm0 4h5v2H7z" />
            </svg> */}
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
                Update and Save Recipe
              </button>
            )}
            {success && redirectPostHandler()}

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

export default UpdatePost;

import React, { useEffect, useState } from "react";
import CommentsList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../redux/slices/comments/commentsSlice";

const AddComment = ({ postId, comments }) => {
  const [formData, setFormData] = useState({
    message: "",
  });

  //dispatch
  const dispatch = useDispatch();
  //! Handle Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //! get comment from store
  const { success } = useSelector((state) => state?.comments);
  //reload
  useEffect(() => {
    if (success) {
      window.location.reload();
    }
  }, [dispatch, success]);
  //! Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCommentAction({ ...formData, postId }));
  };

  return (
    <div className="bg-white rounded shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-orange-500">
          Comments
        </h3>
        <div className="mt-5">
          <hr className="mt-5 border-gray-300" />
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="flex-none">
                <img
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="flex-grow">
                <div className="border rounded-lg shadow-sm">
                  {/* <div className="p-3 border-b bg-gray-50">
                    <h4 className="text-sm font-medium text-blue-600">
                      Add a comment
                    </h4>
                  </div> */}
                  <div className="p-3">
                    <label htmlFor="comment" className="sr-only">
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      rows={3}
                      className="placeholder:italic block w-full mt-1 border-gray-300 rounded-md shadow-sm form-textarea focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      placeholder="Your comment"
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                    />
                  </div>
                  <div className="flex items-center justify-end px-3 py-2 rounded-b-lg bg-gray-50">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-orange-600 rounded hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* comment lists */}
        <CommentsList comments={comments} />
      </div>
    </div>
  );
};

export default AddComment;

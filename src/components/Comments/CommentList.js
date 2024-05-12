import React, { useState } from "react";

const CommentsList = ({ comments }) => {
  return (
    <div className="flex flex-col space-y-4 mt-5">
      <div className="flex space-x-4">
        <div className="flex-none">
          <img
            src="https://via.placeholder.com/50"
            alt="avatar"
            className="rounded-full h-12 w-12"
          />
        </div>
        <div className="flex-grow">
          <div>
            {comments?.length <= 0 ? (
              <h2>No Comments</h2>
            ) : (
              comments?.map((comment) => {
                return (
                  <>
                    <div className="bg-orange-50 px-4 py-3 sm:px-6 flex justify-between items-center mt-2">
                      <div>
                        <h4 className="text-sm font-medium text-orange-500">
                          {comment?.author?.username}
                        </h4>
                        <span className="text-sm text-gray-500 italic">
                          {new Date(comment?.createdAt).toDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="bg-orange-50 px-4 pb-4 sm:px-6">
                      <p className="text-sm text-gray-700">
                        {comment?.message}
                      </p>
                    </div>
                  </>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsList;

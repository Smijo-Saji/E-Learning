import React, { useContext, useEffect, useState } from "react";
import "./Comments.css";
import { userContext } from "../../context/UserContextProvider";
import axios from "axios";
import { base_url } from "../..";
import toast from "react-hot-toast";

function Comments({ courseId }) {
  const { user } = useContext(userContext);
  const [comment, setComment] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const addComment = async () => {
    setBtnLoading(true);
    try {
      const body = { user: user.name, comment };
      const { data } = await axios.post(
        `${base_url}/api/courses/${courseId}/comments`,
        body,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      toast.success(data.message);
      setBtnLoading(false);
      setComment("");
      getComments();
    } catch (error) {
      console.log(error);
      setBtnLoading(false);
    }
  };

  const getComments = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/courses/${courseId}/comments`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setComments(data.comments.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const { data } = await axios.delete(
        `${base_url}/api/courses/${courseId}/comments/${id}`,
        { headers: { token: localStorage.getItem("token") } }
      );
      toast.success(data.message);
      getComments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, [courseId]);
  return (
    <div>
      <hr />
      <h5>Comments ({comments?.length})</h5>
      <div className="add-comment d-flex gap-3">
        <input
          type="text"
          placeholder="Add a comment..."
          className="commentbox-input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="commentbox-btn bg-tertiary text-dark"
          onClick={() => setComment("")}
        >
          Cancel
        </button>
        <button
          className="commentbox-btn bg-primary"
          onClick={addComment}
          disabled={btnLoading}
        >
          {btnLoading ? "Adding.." : "Comment"}
        </button>
      </div>
      <div className="comments-sec mt-4">
        {comments?.length > 0 ? (
          comments.map((i) => (
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src="https://i.postimg.cc/N0QfDjvR/download-removebg-preview-14.png"
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="ms-2">
                    <div className="d-flex align-items-center">
                      <p className="user-name m-0">@{i.user}</p>
                      <p className="comment-time ms-5">
                        {i.createdAt.split("T").join(",").slice(0, -8)}
                      </p>
                    </div>
                    <p className="comment m-0">{i.comment}</p>
                  </div>
                </div>
              </div>
              {user.role === "admin" ? (
                <i
                  class="fa-regular fa-circle-xmark"
                  onClick={() => handleDeleteComment(i._id)}
                ></i>
              ) : (
                <i class="fa-solid fa-ellipsis-vertical"></i>
              )}
            </div>
          ))
        ) : (
          <p>No comments </p>
        )}
      </div>
    </div>
  );
}

export default Comments;

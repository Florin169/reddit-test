import React from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import useComments from "../../hooks/useComments";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CommentInput = ({ text, setText }) => {
  const { postId } = useParams();
  const { createComment, fetchComments } = useComments();
  const comments = useSelector((state) => state.post.comments);

  useEffect(
    () => {
      fetchComments(postId);
    },
    [postId],
    fetchComments
  );

  return (
    <div className="w-full md:w-[528px] rounded-md bg-white">
      <div className="flex">
        <div className="px-2"></div>
        <div className="p-2 w-full">
          <textarea
            placeholder="What are your thoughts?"
            value={text}
            className="w-full input pt-2 h-28"
            onChange={(e) => setText(e.target.value)}
          />
          <div className="w-full flex justify-end">
            <button
              className="solid w-[98px] h-[26px]"
              onClick={() => createComment(text, postId)}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
      {comments.map((comment) => (
        <Comment key={comment.text} comment={comment} />
      ))}
    </div>
  );
};

export default CommentInput;

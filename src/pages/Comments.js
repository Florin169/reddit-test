import React from "react";
import CommentInput from "../components/comments/CommentInput";
import Post from "../components/posts/Post";
import AboutCoomunity from "../components/community/AboutCommunity";
import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Comments = () => {
  const { postId } = useParams();
  const { fetchSinglePost } = usePosts();
  const post = useSelector((state) => state.post.post);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchSinglePost(postId);
  }, []);

  return (
    <div className="flex w-[60%] m-auto space-x-5">
      <div className="mt-5">
        <Post post={post} />
        <CommentInput text={text} setText={setText} />
      </div>
      <div>
        <AboutCoomunity />
      </div>
    </div>
  );
};

export default Comments;

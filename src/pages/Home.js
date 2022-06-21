import React, { useEffect } from "react";
import Signup from "../components/modals/Signup";
import Signin from "../components/modals/Signin";
import Postbar from "../components/posts/Postbar";
import TopCommunities from "../components/community/TopCommunities";
import CreateCommunity from "../components/modals/CreateCommunity";
import Post from "../components/posts/Post";
import usePosts from "../hooks/usePosts";
import { useSelector } from "react-redux";

const Home = () => {
  const { fetchPosts, fetchSnippets } = usePosts();
  const posts = useSelector((state) => state.community.posts);

  useEffect(() => {
    fetchPosts();
    fetchSnippets();
  }, []);

  return (
    <div className="w-full lg:w-[60%] m-auto">
      <div className="flex lg:space-x-5">
        <div className="w-full lg:w-[528px]">
          <Postbar />
          {posts.map((post) => (
            <Post key={post.title} post={post} />
          ))}
        </div>
        <TopCommunities />
      </div>

      <Signup />
      <Signin />
      <CreateCommunity />
    </div>
  );
};

export default Home;

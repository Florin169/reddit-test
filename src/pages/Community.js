import React from "react";
import { useParams } from "react-router-dom";
import AboutCommunity from "../components/community/AboutCommunity";
import Postbar from "../components/posts/Postbar";
import { Link } from "react-router-dom";
import usePosts from "../hooks/usePosts";
import Post from "../components/posts/Post";
import SkeletonLoader from "../components/SkeletonLoader";
import useCommunityData from "../hooks/useCommunityData";

const Community = () => {
  const { id } = useParams();
  const { loading, posts } = usePosts();
  const { onJoinOrLeaveCommunity, isJoined } = useCommunityData();

  return (
    <div>
      <div className="h-[70px] bg-blue-500"></div>
      <div className="flex items-center h-[70px] bg-white">
        <div className="flex items-center w-full px-4 lg:w-[60%] m-auto space-x-4 relative">
          <div className="absolute bottom-4 w-16 h-16 rounded-full bg-red-300"></div>
          <div className="pl-20">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold">{id}</h1>
              <button
                className={`${
                  isJoined ? "outline" : "solid"
                } w-[73px] h-[30px]`}
                onClick={() => onJoinOrLeaveCommunity()}
              >
                {isJoined ? "Joined" : "Join"}
              </button>
            </div>
            <span className="text-sm font-semibold text-gray-500 ">r/{id}</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-5 w-full md:w-[60%] m-auto">
        <div className="w-full lg:w-[528px]">
          <Link to={`/r/${id}/submit`}>
            <Postbar />
          </Link>
          {loading ? (
            <SkeletonLoader />
          ) : (
            posts.map((post) => (
              <Link to={`/r/${id}/comments/${post.id}`}>
                <Post key={post.id} post={post} />
              </Link>
            ))
          )}
        </div>
        <AboutCommunity />
      </div>
    </div>
  );
};

export default Community;

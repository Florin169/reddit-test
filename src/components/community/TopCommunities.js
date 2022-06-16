import React, { useEffect } from "react";
import topComm from "../../assets/topComm.png";
import TopCommunityCard from "./TopCommunityCard";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebase";
import { getCommunities } from "../../redux/features/communitySlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const TopCommunities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(collection(db, "communities"), (snapshot) => {
      dispatch(getCommunities(snapshot.docs.map((item) => item.data())));
    });
  }, [dispatch]);

  const communities = useSelector((state) => state.community.communities);

  return (
    <div className="hidden lg:block w-[307px] h-[377px] rounded-md my-5 bg-white">
      <div
        className="h-[75px] p-2 bg-cover rounded-t-md relative"
        style={{ backgroundImage: `url(${topComm})`, objectFit: "contain" }}
      >
        <div className="flex items-end p-3 absolute inset-0 w-full h-full bg-black/40 rounded-t-md">
          <h1 className="font-bold text-lg text-white">Top Communities</h1>
        </div>
      </div>
      {communities.slice(0, 5).map((community) => (
        <Link to={`/r/${community.id}`}>
          <TopCommunityCard key={community.id} community={community} />
        </Link>
      ))}
      <div className="p-3">
        <button className="solid h-[30px] w-full font-bold">View All</button>
      </div>
    </div>
  );
};

export default TopCommunities;

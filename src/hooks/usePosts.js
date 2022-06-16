import React from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getPosts } from "../redux/features/communitySlice";
import { useDispatch } from "react-redux";

const usePosts = () => {
  const dispatch = useDispatch();

  const fetchPosts = () => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      dispatch(getPosts(snapshot.docs.map((item) => item.data())));
    });
  };

  return { fetchPosts };
};

export default usePosts;

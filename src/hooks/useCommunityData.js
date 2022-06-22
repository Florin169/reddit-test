import React from "react";
import { useParams } from "react-router-dom";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addSnippet, deleteSnippet } from "../redux/features/communitySlice";
import usePosts from "./usePosts";

const useCommunityData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const snippets = useSelector((state) => state.community.snippets);
  const { singleCommunity } = usePosts();
  const isJoined = !!snippets.find(
    (snippet) => snippet.communityId === singleCommunity.id
  );

  const onJoinOrLeaveCommunity = () => {
    if (isJoined) {
      leaveCommunity();
    } else {
      joinCommunity();
    }
  };

  const joinCommunity = async () => {
    try {
      const newSnippet = {
        communityId: id,
        imageURL: "",
      };

      await setDoc(
        doc(db, `users/${user.uid}/communitySnippets`, id),
        newSnippet
      );

      dispatch(addSnippet(newSnippet));
    } catch (error) {
      console.log("joinCommunity error", error.message);
    }
  };

  const leaveCommunity = async () => {
    try {
      await deleteDoc(doc(db, `users/${user.uid}/communitySnippets`, id));

      dispatch(deleteSnippet(id));
    } catch (error) {
      console.log("leaveCommunity error", error.message);
    }
  };

  return {
    onJoinOrLeaveCommunity,
    isJoined,
  };
};

export default useCommunityData;

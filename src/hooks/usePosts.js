import React, { useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import {
  fetchSingleCommunity,
  getCommunityPosts,
  getCommunitySnippets,
  getPosts,
} from "../redux/features/communitySlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../redux/features/postSlice";

const usePosts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.community.communityPosts);
  const snippets = useSelector((state) => state.community.snippets);
  const singleCommunity = useSelector(
    (state) => state.community.singleCommunity
  );
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      dispatch(getPosts(snapshot.docs.map((item) => item.data())));
    });
  };

  const fetchCommunityPosts = async () => {
    try {
      setLoading(true);

      const postsQuery = query(
        collection(db, "posts"),
        where("communityId", "==", id),
        orderBy("createdAt", "desc")
      );

      const postsDocs = await getDocs(postsQuery);
      const posts = postsDocs.docs.map((post) => ({
        id: post.id,
        ...post.data(),
      }));
      dispatch(getCommunityPosts(posts));

      setLoading(false);
    } catch (error) {
      console.log("fetchCommunityPosts error", error.message);
    }
  };

  const fetchSnippets = async () => {
    try {
      const snippetDocs = await getDocs(
        collection(db, `users/${user.uid}/communitySnippets`)
      );
      const snippets = snippetDocs.docs.map((snippet) => ({
        ...snippet.data(),
      }));
      dispatch(getCommunitySnippets(snippets));
    } catch (error) {
      console.log("fetchSnippets error", error.message);
    }
  };

  const fetchCommunity = async () => {
    try {
      const communityDocs = await getDoc(doc(db, "communities", id));

      dispatch(fetchSingleCommunity(communityDocs.data()));
    } catch (error) {
      console.log("fetchCommunity error", error.message);
    }
  };

  const fetchSinglePost = async (postId) => {
    const postDoc = await getDoc(doc(db, "posts", postId));
    dispatch(getPost(postDoc.data()));
  };

  useEffect(() => {
    fetchCommunityPosts();
    fetchCommunity();
    fetchSnippets();
  }, [user]);

  return {
    fetchPosts,
    fetchSinglePost,
    loading,
    singleCommunity,
    snippets,
    posts,
  };
};

export default usePosts;

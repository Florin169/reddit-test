import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { auth } from "./firebase/firebase";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/features/authSlice";
import Community from "./pages/Community";
import CreatePost from "./pages/CreatePost";
import Comments from "./pages/Comments";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(getUser(user));
    });
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/r/:id" element={<Community />} />
        <Route path="/r/:id/submit" element={<CreatePost />} />
        <Route path="/r/:id/comments/:postId" element={<Comments />} />
      </Routes>
    </div>
  );
};

export default App;

import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/features/postSlice";

const useComments = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const createComment = async (text, postId) => {
    const commentRef = collection(db, "comments");
    const commentFields = {
      name: user.email.split("@")[0],
      createdAt: serverTimestamp(),
      text: text,
      postId: postId,
    };
    await addDoc(commentRef, commentFields);
  };

  const fetchComments = async (postId) => {
    const commentsQuery = query(
      collection(db, "comments"),
      where("postId", "==", postId)
    );

    const commentsDocs = await getDocs(commentsQuery);
    const comments = commentsDocs.docs.map((comment) => comment.data());
    dispatch(getComments(comments));
  };

  return { createComment, fetchComments };
};

export default useComments;

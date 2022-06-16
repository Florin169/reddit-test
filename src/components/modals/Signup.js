import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { closeSignUpModal } from "../../redux/features/authSlice";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const modal = useSelector((state) => state.auth.signUpModal);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password);

    setEmail("");
    setPassword("");
    dispatch(closeSignUpModal());
  };

  const createUserDocument = async (user) => {
    await setDoc(doc(db, "users", user.uid), JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (user) {
      createUserDocument(user);
    }
  }, [user]);

  return (
    <div
      className={`${
        !modal && "hidden"
      } fixed inset-0 bg-black/60 flex justify-center`}
    >
      <div className="w-[440px] h-[512px] rounded-md bg-white mt-16 p-4">
        <div className="w-full flex items-center justify-between pb-5">
          <h1 className="font-bold text-lg">Sign up</h1>
          <div
            className=" text-xl"
            onClick={() => dispatch(closeSignUpModal())}
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="flex flex-col w-[80%] m-auto my-5 space-y-4">
          <button className="outline h-9">Sign up with Google</button>
          <button className="outline h-9">Other Provider</button>
        </div>
        <h1 className="text-center py-5">OR</h1>

        <div className="flex flex-col w-[80%] m-auto space-y-3">
          <input
            type="text"
            value={email}
            placeholder="email"
            className="w-full h-10 input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            className="w-full h-10 input "
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="solid h-9" onClick={signUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

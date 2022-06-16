import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CommunityType from "../community/CommunityType";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { closeCommunityModal } from "../../redux/features/communitySlice";

const CreateCommunity = () => {
  const user = useSelector((state) => state.auth.user);
  const modal = useSelector((state) => state.community.communityModal);
  const dispatch = useDispatch();

  const createCommunityHandler = async () => {
    const communityRef = doc(db, "communities", name);
    const commFields = {
      id: name,
      numberOfMembers: 1,
      privacyType: communityType,
      createdAt: serverTimestamp(),
      creatorId: user.uid,
    };

    await setDoc(communityRef, commFields);
    await setDoc(doc(db, `users/${user?.uid}/communitySnippets`, name), {
      communityId: name,
      isModerator: true,
    });

    dispatch(closeCommunityModal());
    setName("");
  };

  const [communityType, setCommunityType] = useState("Public");
  const [name, setName] = useState("");

  return (
    <div
      className={`${
        !modal && "hidden"
      } fixed inset-0 bg-black/60 flex justify-center`}
    >
      <div className="w-[512px] h-[390px] bg-white mt-10 p-3 rounded-md space-y-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-base">Create community</h1>
          <div onClick={() => dispatch(closeCommunityModal())}>
            <AiOutlineClose />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Name</h1>
          <p className="text-xs text-gray-500">
            Community names including capitalization cannot be changed
          </p>
        </div>
        <input
          type="text"
          value={name}
          placeholder="r/"
          className="input w-full h-8"
          onChange={(e) => setName(e.target.value)}
        />

        <CommunityType
          communityType={communityType}
          setCommunityType={setCommunityType}
        />
        <div className="flex items-center justify-end space-x-3 pt-10">
          <button className="outline h-[30px] w-[78px]">Cancel</button>
          <button
            className="solid h-[30px] w-[157px]"
            onClick={createCommunityHandler}
          >
            Create Comunity
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;

import React, { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { BsCardImage, BsLink45Deg } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { TiMicrophoneOutline } from "react-icons/ti";
import CreatePostTab from "../components/posts/CreatePostTab";
import CreatePostInput from "../components/posts/CreatePostInput";
import CreatePostUpload from "../components/posts/CreatePostUpload";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { storage } from "../firebase/firebase";

const CreatePost = () => {
  const user = useSelector((state) => state.auth.user);
  const { id } = useParams();
  const navigate = useNavigate();

  const fields = [
    {
      Icon: <IoDocumentText />,
      text: "Post",
    },
    {
      Icon: <BsCardImage />,
      text: "Images&Video",
    },
    {
      Icon: <BsLink45Deg />,
      text: "Link",
    },
    {
      Icon: <BiPoll />,
      text: "Poll",
    },
    {
      Icon: <TiMicrophoneOutline />,
      text: "Talk",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(fields[0].title);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const uploadImageHandler = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target.result) {
        setSelectedFile(readerEvent.target.result);
      }
    };
  };

  const createPostHandler = async () => {
    const newPost = {
      communityId: id,
      creatorDisplayName: user?.email.split("@")[0],
      creatorId: user?.uid,
      numberOfComents: 0,
      voteStatus: 0,
      createdAt: serverTimestamp(),
      title: title,
      text: text,
    };

    const postDocRef = await addDoc(collection(db, "posts"), newPost);

    if (selectedFile) {
      const imageRef = ref(storage, `posts/${postDocRef.id}/image`);
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(postDocRef, {
        imageURL: downloadURL,
      });
    }

    navigate(-1);
  };

  return (
    <div className="w-[60%] m-auto">
      <div className="mt-7">
        <h1 className="font-bold mb-5">Create a Post</h1>
        <div className="flex w-[690px] h-[50px] bg-white rounded-t-md px-3">
          {fields.map((field) => (
            <CreatePostTab
              key={field.text}
              field={field}
              selected={field.text === selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </div>
      </div>
      {selectedTab === "Post" && (
        <CreatePostInput
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
          createPostHandler={createPostHandler}
        />
      )}
      {selectedTab === "Images&Video" && (
        <CreatePostUpload
          uploadImageHandler={uploadImageHandler}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      )}
    </div>
  );
};

export default CreatePost;

import React from "react";

const CreatePostInput = ({
  title,
  setTitle,
  text,
  setText,
  createPostHandler,
}) => {
  return (
    <div className="w-[690px] bg-white h-[230px] rounded-b-md p-3 space-y-3">
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="input w-full h-[40px]"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Text (optional)"
        value={text}
        className="input py-2 w-full h-[90px]"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          disabled={title === ""}
          className="solid w-[90px] h-[35px] disabled:bg-blue-500/70 disabled:text-white/70"
          onClick={createPostHandler}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostInput;

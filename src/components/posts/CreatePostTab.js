import React from "react";

const CreatePostTab = ({ field, selected, setSelectedTab }) => {
  return (
    <div
      className={`${
        selected && "text-blue-500 border-b border-b-blue-500"
      } flex items-center justify-center space-x-2 flex-1 font-bold cursor-pointer`}
      onClick={() => setSelectedTab(field.text)}
    >
      <p>{field.Icon}</p>
      <h1>{field.text}</h1>
    </div>
  );
};

export default CreatePostTab;

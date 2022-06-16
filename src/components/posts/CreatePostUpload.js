import React, { useRef } from "react";

const CreatePostUpload = ({
  uploadImageHandler,
  selectedFile,
  setSelectedFile,
}) => {
  const fileRef = useRef(null);

  return (
    <div className="w-[690px] bg-white h-[222px] p-3 ">
      <div className="flex items-center justify-center   h-full">
        <input type="file" ref={fileRef} hidden onChange={uploadImageHandler} />
        {selectedFile ? (
          <div className="w-full h-full">
            <img
              src={selectedFile}
              alt=""
              className="w-full max-h-[150px] object-cover"
            />
            <div className="w-full py-2 flex justify-end">
              <button
                className="solid w-[80px] h-7"
                onClick={() => setSelectedFile(null)}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <button
            className="outline w-[80px] h-7"
            onClick={() => fileRef.current.click()}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default CreatePostUpload;

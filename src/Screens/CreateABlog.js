import React, { useState } from "react";
import create1 from "../Images/createPost.png";
import { UilImagePlus, UilImageUpload } from "@iconscout/react-unicons";
import ReactQuill from "react-quill";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "react-quill/dist/quill.snow.css";
import TextEditor from "../Components/TextEditor";
import Validations from "../Functionalities/validations";
import blogPost from "../Models/PostModel";
import Blogs from "../Functionalities/Blogs";
import PopUp from "../Components/PopUp";
import { useNavigate } from "react-router-dom";
function CreateABlog() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "code-block",
  ];
  function showPopUp() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [smallSummary, setSmallSummary] = useState("");
  const [postContext, setPostContext] = useState("");
  const [tags, setTags] = useState(null);
  const [show,setShow] = useState(false)
  const [message,setMessage] = useState("")
  const [error,setError] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center mt-5 w-full">
      <div className="text-lg bg-fuchsia-300">Create a Boring Content</div>
      <div className="mt-5">
        <div className="flex flex-col w-screen justify-center items-center">
          <div className="w-screen h-80 bg-gray-100 relative">
            <img
              className="w-full h-full object-cover object-center"
              src={imageSrc}
            />
            <label
              htmlFor="file-input"
              className="space-x-2 flex bg-gray-300 text-white px-4 py-2 rounded cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <UilImageUpload />
              <div className="text-center">Wake up Image</div>
            </label>
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={(e) => {
                setSelectedFile(
                  Validations.uploadImageValidation(e, setImageSrc)
                );
              }}
            />
          </div>
          <textarea
            placeholder="Feature-Title(100 words)"
            className="border-2  focus:outline-none w-xl border-black p-2 mt-5 w-10/12 md:w-1/2 "
            onChange={(e) => {
              const textWithoutSpaces = e.target.value.replace(/\s/g, "");
              setTitle(textWithoutSpaces);
            }}
          />
          <textarea
            placeholder="long story short (400 words)"
            className="border-2  focus:outline-none w-xl border-black p-2 mt-5 w-10/12 md:w-1/2 "
            onChange={(e) => {
              const textWithoutSpaces = e.target.value.replace(/\s/g, "");
              setSmallSummary(textWithoutSpaces);
            }}
          />

          <div className="w-10/12 md:w-1/2 mt-5">
            <ReactQuill
              theme="snow"
              defaultValue={
                "Don't make them sleep, Erase this and start writing your post...."
              }
              modules={modules}
              formats={formats}
              value={postContext}
              onChange={(content, delta, source, editor) => {
                setPostContext(content);
                console.log(postContext);
              }}
            />
          </div>
          <textarea
            placeholder="Add # infront of your every tag"
            className="border-2  focus:outline-none  border-black p-2 mt-5 w-10/12 md:w-1/2 "
            onChange={(e) => {
              const cleanedValue = e.target.value
                .replace(/[\n\s]/g, "")
                .split("#");
              cleanedValue.shift();

              setTags(cleanedValue);
            }}
          />
          <div className="flex flex-row justify-start   w-10/12 md:w-1/2 overflow-x-scroll">
            {tags != null
              ? tags.map((item, index) => (
                  <div key={index} className="bg-blue-500 text-white p-2 m-2 ">
                    {item}
                  </div>
                ))
              : null}
          </div>
          <div className="flex flex-row space-x-2 mt-4">
            <button
              className="w-20 p-2 bg-green-400 text-center"
              onClick={ () =>{
                Blogs.createPost(title, smallSummary, postContext, selectedFile)
                .then((response)=>{
                  if(response.error==true) {
                    showPopUp();
                    setMessage(response.msg)
                    setError(true);
                  }
                  else{
                    navigate('/allblogsscreen')
                  }
                })
                
              }
                
              }
            >
              Post
            </button>
            <button className="w-20 p-2 bg-yellow-300 text-center">
              Preview
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={create1} />
      </div>
      {show == true ? <PopUp message={message} error={error} /> : <></>}
    </div>
  );
}

export default CreateABlog;

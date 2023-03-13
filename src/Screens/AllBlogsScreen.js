import React, { useState } from "react";
import { UilPlus } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import hoverGif from "../Images/homePageFloat.gif";
function AllBlogsScreen() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className={`flex flex-col-reverse lg:flex-row items-start justify-center  p-5 w-screen ${show==true?"opacity-0":"opacity-100"}`}>
        <div className="w-full lg:w-9/12 h-56 bg-slate-100"></div>
        <div className="w-full lg:w-3/12 h-16 lg:h-56 bg-slate-200"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {show ? <div>

          <img src={hoverGif} className="max-w-max max-h-fit" />
          <div className="text-center font-bold text-2xl">Write your imagination....</div>
        </div> : <></>}
      </div>
      <div className="absolute right-10 bottom-10 h-10 w-10 rounded-full flex hover:scale-125 items-center text-white justify-center bg-black">
        <button
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => {
            setShow(false);
          }}
          onClick={() => {
            navigate("/newblogscreen");
          }}
        >
          <UilPlus />
        </button>
      </div>
    </div>
  );
}

export default AllBlogsScreen;

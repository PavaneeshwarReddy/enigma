import React from "react";
import home1 from "../Images/dribble1.png";
import home2 from "../Images/dribble2.png";
import home3 from "../Images/dribble3.png";
import home4 from "../Images/dribble4.png";
import home5 from "../Images/dribble5.png";

import {
  UilDocumentLayoutLeft,
  UilArrowCircleRight,
  UilSetting,
  UilEnvelopes,
  UilCommentMessage,
} from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div class="grid ml-5 mr-5 border-black border-2 mt-5  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
        <div className="group relative ">
          <img  src={home1}></img>
          
          <div className="group-hover:opacity-100 sm:opacity-0 p-5 absolute bottom-0  w-full bg-gradient-to-b from-orange-200  to-green-200">
          <div className="font-bold text-3xl">
            Imaginations
          </div>
            <div>
            multiverse is a non-real entity,but dreamers do meet strangers in their dreams,do they really exists?
            </div>
            <div className="flex flex-row justify-center">
              <button className=" bg-black text-white p-2 w-full" onClick={()=>{
                navigate("/allblogsscreen")
              }}>view all</button>
            </div>
          </div>
        </div>
        <div className="group relative ">
          <img  src={home2}></img>
          
          <div className="group-hover:opacity-100 sm:opacity-0 p-5 absolute bottom-0  w-full bg-gradient-to-b from-blue-200  to-green-200">
          <div className="font-bold text-3xl">
            Imaginations
          </div>
            <div>
            multiverse is a non-real entity,but dreamers do meet strangers in their dreams,do they really exists?
            </div>
            <div className="flex flex-row justify-center">
              <button className=" bg-black text-white p-2 w-full">view all</button>
            </div>
          </div>
        </div>
        <div className="group relative ">
          <img  src={home3}></img>
          
          <div className="group-hover:opacity-100 sm:opacity-0 p-5 absolute bottom-0  w-full bg-gradient-to-b from-red-200  to-green-200">
          <div className="font-bold text-3xl">
            Imaginations
          </div>
            <div>
            multiverse is a non-real entity,but dreamers do meet strangers in their dreams,do they really exists?
            </div>
            <div className="flex flex-row justify-center">
              <button className=" bg-black text-white p-2 w-full">view all</button>
            </div>
          </div>
        </div>
        <div className="group relative ">
          <img  src={home4}></img>
          
          <div className="group-hover:opacity-100 sm:opacity-0 p-5 absolute bottom-0  w-full bg-gradient-to-b from-fuchsia-200  to-green-200">
          <div className="font-bold text-3xl">
            Imaginations
          </div>
            <div>
            multiverse is a non-real entity,but dreamers do meet strangers in their dreams,do they really exists?
            </div>
            <div className="flex flex-row justify-center">
              <button className=" bg-black text-white p-2 w-full">view all</button>
            </div>
          </div>
        </div>
        <div className="group relative ">
          <img  src={home5}></img>
          
          <div className="group-hover:opacity-100 sm:opacity-0 p-5 absolute bottom-0  w-full bg-gradient-to-b from-yellow-200  to-green-200">
          <div className="font-bold text-3xl">
            Imaginations
          </div>
            <div>
            multiverse is a non-real entity,but dreamers do meet strangers in their dreams,do they really exists?
            </div>
            <div className="flex flex-row justify-center">
              <button className=" bg-black text-white p-2 w-full">view all</button>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default HomeScreen;

/**
 * 
 * <div class="grid grid-cols-1 lg:grid-cols-3 w-full h-screen  gap-0  p-2 ">
      <div class="w-full bg-violet-400 p-4 "></div>
      <div class="w-full  bg-green-400 p-4"></div>
      <div class="w-full    bg-yellow-400 p-4"></div>
      <div class="w-full    bg-red-400 p-4"></div>
    </div>
 */

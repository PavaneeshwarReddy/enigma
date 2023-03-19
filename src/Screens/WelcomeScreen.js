import React, { useContext, useState } from "react";
import HomeScreenBlogBox from "../Components/homeScreenBlogBox";
import {
  UilTwitter,
  UilInstagramAlt,
  UilFacebook,
  UilRedditAlienAlt,
  UilHouseUser,
  UilForward
} from "@iconscout/react-unicons";
import home1 from "../Images/welcome1.png";
import { UserContext } from "../Functionalities/UserContext";
import { useNavigate } from "react-router-dom";
function HomeScreen() {
  const {userInfo,setUserInfo} = useContext(UserContext);
  const [bgColor,setBgColor] = useState("bg-white")
  const navigate = useNavigate();
  return (
    <div className={`m-5 h-full border-black border-2  overflow-hidden ${bgColor}`}  style={{background:"rgb(253,226,196)"}}>
     
      <div className="flex  flex-col justify-center items-center">
        <div className="w-screen sm:w-1/2  p-10">
          <div className="text-xl  text-center mb-5">
            Welcome to
            <span className="text-4xl text-center font-bold">`Enigma`</span>
          </div>

          <div className="text-center">
          a surreal storytelling website that celebrates the power of imagination and the mystery of the unknown. We believe that the best stories are those that challenge our perceptions, expand our understanding of the world, and leave us with more questions than answers.

          </div>
          <div className="flex justify-center space-x-2 mt-3">
            <div className="font-bold">Join Us at:</div>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
              <UilTwitter  className="text-blue-400"/>
            </a>
            <UilInstagramAlt  className="text-red-500"/>
            <UilFacebook  className="text-blue-600"/>
            <UilRedditAlienAlt  className="text-red-300"/>
          </div>
        
        </div>
        {
            userInfo.username!=null?<div onClick={()=>{
              navigate("/homescreen")
            }} className="flex-row justify-center p-2  text-white  flex items-center">
              <UilForward className="bg-green-600"/>
              <button  className="bg-fuchsia-600 ">resume your journey</button>
            </div>:<></>
          }
        
        <div className="grayscale-0">
          <img  src={home1} ></img>
      </div>
      </div>
    
    </div>
  );
}

export default HomeScreen;

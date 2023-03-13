import React from "react";
import HomeScreenBlogBox from "../Components/homeScreenBlogBox";
import {
  UilTwitter,
  UilInstagramAlt,
  UilFacebook,
  UilRedditAlienAlt,
} from "@iconscout/react-unicons";
import home1 from "../Images/home3.png";
function HomeScreen() {
  
  return (
    <div className="m-5 h-screen overflow-hidden">
      <div className="flex  flex-col items-center">
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
              <UilTwitter />
            </a>
            <UilInstagramAlt />
            <UilFacebook />
            <UilRedditAlienAlt />
          </div>
        </div>

        <div className="grayscale">
          <img src={home1}></img>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

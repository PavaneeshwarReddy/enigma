import React from "react";
import one from "../Images/surreal4.gif";
import two from "../Images/surreal3.gif";
import home1 from "../Images/surrreal.gif";
import home2 from "../Images/surrreal2.gif";
import home3 from "../Images/surrreal3.gif";
import home4 from "../Images/surreal5.gif";
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
      <div class="border-black hover:bg-violet-600 hover:text-white border-2 h-fit text-center p-4 flex flex-col justify-center items-center">
        <div className="flex space-x-2 flex-row">
          <UilDocumentLayoutLeft />
          <div className="bg-red-400">All Dreams</div>
        </div>
        <div>
        From bizarre dreams to haunting nightmares, our collection of surreal stories will take you on a journey through the depths of the human imagination. Get ready to enter a realm where anything is possible, and let your mind be transported to places you never thought possible. Browse through our collection and discover the surreal stories that will leave you questioning reality itself.
        </div>
        <button className="hover:scale-150 " onClick={()=>{
            navigate("/allblogsscreen");
        }}>
          <UilArrowCircleRight />
        </button>
      </div>
      <div className="w-screen/2">
        <img src={home3} />
      </div>
      <div class="border-black hover:bg-green-600 hover:text-white border-2 h-fit text-center p-4 flex flex-col justify-center items-center">
        <div className="flex space-x-2 flex-row">
          <UilCommentMessage />
          <div className="bg-blue-400">Chats</div>
        </div>
        <div>
        Welcome to our surreal dreamers community! Here, you can connect with other like-minded individuals who share your fascination with surrealism, dreams, and the bizarre. Whether you're a seasoned dreamer or a newcomer to the world of surrealism, this is the place to be.

Our one-on-one chat feature is designed to provide a safe and welcoming space where you can share your surreal experiences, exchange ideas, and connect with fellow dreamers from all over the world. Whether you want to discuss a recent dream that left you in awe, or you're looking for inspiration for your next creative project, our community is here to support you.
        </div>
        <button className="hover:scale-150 ">
          <UilArrowCircleRight />
        </button>
      </div>

      <div>
        <img src={one} />
      </div>
      <div class="bg-gray-200 h-80 flex justify-center items-center">
        <p>Content of div 4</p>
      </div>
      <div>
        <img src={two} />
      </div>
      <div class="border-black hover:bg-slate-600 hover:text-white border-2 h-fit text-center p-4 flex flex-col justify-center items-center">
        <div className="flex space-x-2 flex-row">
          <UilCommentMessage />
          <div className="bg-orange-400">Discover</div>
        </div>
        <div>
        Here, you can explore and discover the many different genres that fall under the broad umbrella of surrealism. From abstract art to experimental film, from dream poetry to magical realism, there's a surreal genre for everyone.

Our collection includes information and resources on some of the most popular and influential surreal genres, as well as lesser-known and emerging ones. Whether you're a fan of classic surrealist works or you're looking for something new and exciting to explore, this is the place to be.
        </div>
        <button className="hover:scale-150 ">
          <UilArrowCircleRight />
        </button>
      </div>
      <div>
        <img src={home1} />
      </div>
      <div class="bg-gray-200 h-80 flex justify-center items-center">
        <p>Content of div 3</p>
      </div>
      <div className="w-screen/2">
        <img src={home4} />
      </div>
      
      <div class="border-black hover:bg-red-600 hover:text-white border-2 h-fit text-center p-4 flex flex-col justify-center items-center">
        <div className="flex space-x-2 flex-row">
          <UilSetting />
          <div className="bg-green-400">Dreamer's Info</div>
        </div>
        <div>
          The settings section of a website is an essential part of the user
          experience, allowing users to customize their preferences and manage
          their account information. Typically, the settings section includes
          options to modify the user's personal information, such as name, email
          address, and password.Other settings may include language preferences,
          privacy settings, and account preferences, such as theme or color
          scheme. Overall, the settings section of a website is a vital tool for
          users to tailor their experience and ensure that the website operates
          in a way that best suits their needs.
        </div>
        <button className="hover:scale-150 ">
          <UilArrowCircleRight />
        </button>
      </div>
      <div>
        <img src={home2} />
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

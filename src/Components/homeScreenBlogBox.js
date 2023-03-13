import React from "react";

function HomeScreenBlogBox() {
  return (
    <div className="flex flex-col border-gray-500 border-2 p-5 mt-5">
      <img
        className="color"
        src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/12/what-is-chatgpt-6393027101b3c-sej.jpg"
      ></img>

      <div className="text-center text-2xl font-semibold">
        How chatGPT and Other AI tools effect out world
      </div>
      <div className="text-center text-xs">21-02-2023 13:45</div>
      <div className="text-center  text-xs">pavaneeshwar7077</div>
      <div className="text-center font-extralight">
        ChatGPT is a large language model created by OpenAI that uses
        state-of-the-art natural language processing techniques to converse with
        users in a variety of contexts. It has been trained on a vast corpus of
        text data and can generate human-like responses to questions and prompts
        in real-time.
      </div>
      <button className="bg-black text-white p-2 w-30 mt-2">view</button>
    </div>
  );
}

export default HomeScreenBlogBox;

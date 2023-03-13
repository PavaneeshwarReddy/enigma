import React, { useState, useEffect } from "react";

function PopUp(props) {


  return (
    <div
      className={"h-screen opacity-100 visible"}
    >
      <div className={`flex items-center absolute w-1/2 max-w-xs left-1/2 -translate-x-1/2 bottom-1/4 justify-center p-2 ${
        props.error==true?"bg-red-500":"bg-green-500"}`}>
        <p className="text-white font-semibold text-center">{props.message}</p>
      </div>
    </div>
  );
}

export default PopUp;

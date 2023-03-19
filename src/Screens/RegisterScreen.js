import React, { useState } from "react";
import PopUp from "../Components/PopUp";
import Authenticaton from "../Functionalities/Authentication";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import Validations from "../Functionalities/validations";

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [email, setEmail] = useState("");
  const [popUpMsg, setPopUpMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError] = useState(false);
  const [show,setShow] = useState(false);
  const [borderColor,setBorderColor] = useState("border-black")
  function showPopUp(){
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" h-screen font-mono">
      <div className="flex flex-col w-1/2 max-w-xs top-1/2  border-black border-2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute p-5" style={{background:"rgb(155,192,151)"}}>
        <div className="text-center font-bold">Register to noRaw</div>
        <input
          placeholder="e-mail"
          className="border-2 border-black focus:outline-none p-2 mt-5"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="username"
          className="border-2 focus:outline-none border-black p-2 mt-5"
          onChange={(e) => {
            const textWithoutSpaces = e.target.value.replace(/\s/g, "");
            setUsername(textWithoutSpaces);
          }}
        />
       <div className="relative inline-flex w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className={`appearance-none focus:outline-none w-full border-2 ${borderColor} p-2 mt-5 select-none `}
            onChange={(e) => {
            const  textWithoutSpaces = (e.target.value).replace(/\s/g, '');
            setPasssword(textWithoutSpaces);

            setBorderColor(Validations.passwordValidation(textWithoutSpaces));
          }}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute bottom-3 right-2"
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>
        <button
          className=" bg-black text-white mt-5 p-2"
          onClick={async () => {
            const response = await Authenticaton.registerUser(
              username,
              email,
              password
            );
            setPopUpMsg(response.msg);
            console.log(response.error);
            setError(response.error);
            showPopUp();
          }}
        >
          enter
        </button>
      </div>
      {show==true? <PopUp message={popUpMsg} error={error} /> : <></>}
    </div>
  );
}

export default RegisterScreen;

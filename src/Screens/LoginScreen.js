import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Authenticaton from "../Functionalities/Authentication";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import PopUp from "../Components/PopUp";
import home1 from "../Images/home1.jpg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Functionalities/UserContext";
function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [borderColor, setBorderColor] = useState("border-black");
  const [popUpMsg, setPopUpMsg] = useState(null);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  function showPopUp() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }
  
  function navigateToHome() {
    navigate("/homescreen");
  }

  return (
    <div>
      <div className="flex flex-col z-20 w-1/2 max-w-xs top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 absolute p-5 border-black border-2"  style={{background:"rgb(155,192,151)"}}>
        <div className="text-center font-bold">Login to noRaw</div>
        <input
          placeholder="username"
          className="border-2  focus:outline-none w-xl border-black p-2 mt-5 "
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
              const textWithoutSpaces = e.target.value.replace(/\s/g, "");
              setPasssword(textWithoutSpaces);
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
            Authenticaton.loginUser(username, password).then((response) => {
              setPopUpMsg(response.msg);
              setError(response.error);
              showPopUp();
              if (response.error == false) {
                console.log(response);
                setUserInfo({username:response.userData});
                navigateToHome();
              }
            });
          }}
        >
          give a try
        </button>
        <Link to="/registerscreen" className="font-bold underline text-end">
          register
        </Link>
      </div>
      {show == true ? <PopUp message={popUpMsg} error={error} /> : <></>}
    </div>
  );
}

export default LoginScreen;

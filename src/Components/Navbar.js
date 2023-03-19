import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UilSignInAlt,
  UilSignOutAlt,
  UilUserCircle,
} from "@iconscout/react-unicons";
import { UserContext } from "../Functionalities/UserContext";
function Navbar() {
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/usercookies", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserInfo({username:data["username"]});
      });
  }, [userInfo.username]);

  function logOut() {
    fetch("http://localhost:4000/logoutuser", {
      credentials: "include",
      method: "POST",
    }).then(() => {
      setUserInfo({username:null,token:null});
    });
  }
  return (
    <div className="mr-5 ml-5 mt-5 border-black border-2"  style={{background:"rgb(253,226,196)"}}>
      <div className="flex justify-between p-2 ml-5 mr-5">
        <Link to="/" className="font-bold text-3xl font-mono">
        Enigma
        </Link>
        <div className="flex  items-center justify-around font-mono space-x-2">
          {userInfo.username != null ? (
            <div className="flex">
              <UilUserCircle className="text-blue-400" />
              <div className="bg-yellow-200">{userInfo.username}</div>
            </div>
          ) : (
            <></>
          )}

          {userInfo.username != null ? (
            <div className="flex space-x-1">
              <UilSignOutAlt className="text-red-600 " />
              <button onClick={() => logOut()}>Logout</button>
            </div>
          ) : (
            <Link to="/loginscreen">
              <div className="flex space-x-1">
                <UilSignInAlt className="text-green-600" />
                <span>Login</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

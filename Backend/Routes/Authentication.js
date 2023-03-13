const express = require("express");
const UserModel = require("../Models/userModel");
const authenticateRoute = express.Router();
const jwt = require("jsonwebtoken");
const jwtSecretKey =
  "y/7:6d!>6G#*_7V94-!@h9%NAbu$6UeQr`[L{U#d$^;>z+@45$J#Kx9Xc7!R";
authenticateRoute.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExist = await UserModel.findOne({ username: username });

    if (userExist) {
      res.status(409).json({ msg: "User already exists" });
      return;
    }

    const newUserData = await UserModel.create({ username, email, password });
    res.status(201).json({ msg: "Account created", userData: newUserData });
  } catch (error) {
    console.log("network error");
    res.status(500).json({ error: "Connection error,please try again." });
  }
});

authenticateRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;

  var user = await UserModel.findOne({ username: username });

  try {
    if (user) {
      const checkPassword = password === user["password"];
      if (checkPassword) {
        jwt.sign(
          { username: user.username, userId: user._id },
          jwtSecretKey,
          {},
          (error, token) => {
            res
              .cookie("norawtoken", token)
              .status(201)
              .json({ userData:username,msg: "Logged in successfully" });
          }
        );
      } else {
        res.status(401).json({ msg: "Invalid password" });
      }
    } else {
      res
        .status(404)
        .json({ msg: "User doesn't exits,please try to register" });
      return;
    }
  } catch (error) {
    res.status(500).json({ msg: "Connection error,please try again later" });
  }
});

authenticateRoute.get("/usercookies", (req, res) => {
  const { norawtoken } = req.cookies;
  jwt.verify(norawtoken, jwtSecretKey, {}, (error, info) => {
    if (error) {
      res.status(400).json({ msg: "failed to fetch user data from cookies" });
    }
    res.status(201).json({username:info["username"],msg:"Successfully fetched from cookies"});
  });
});

authenticateRoute.post("/logoutuser",(req,res)=>{
  res.cookie('norawtoken').json({msg:"logged out"});
})

module.exports = authenticateRoute;

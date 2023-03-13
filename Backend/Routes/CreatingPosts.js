//here you will just send with credentials include in frontend and here you verify everytime with JWT and return the results
//this is to avoid all the storage of userData in Browser

const express = require("express");
const postsRoute = express.Router();
const multer = require("multer");
const uploadMiddleWare = multer({ dest: "uploads/" });
const fs = require("fs");
const jwt = require("jsonwebtoken");
const PostModel = require("../Models/PostModel");
const jwtSecretKey =
  "y/7:6d!>6G#*_7V94-!@h9%NAbu$6UeQr`[L{U#d$^;>z+@45$J#Kx9Xc7!R";

postsRoute.post("/createblog", uploadMiddleWare.single("file"), (req, res) => {
  //here we are just changing the path to file name in the extension
  const { originalname, path } = req.file;
  console.log(originalname);
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  //verifying whether jwt token is valid or not
  
  const { norawtoken } = req.cookies;
  jwt.verify(norawtoken, jwtSecretKey, {}, async (error, info) => {
    const { userId } = info;
    const { title, smallSummary, postContext } = req.body;
    console.log(title, smallSummary, postContext);

    const postCreated = await PostModel.create({
      title,
      smallSummary,
      postContent: postContext,
      userId,
      file: newPath,
      tags: "",
    });
    
    if (postCreated) {
      res.status(201).json({ msg: "Created Blog Successfully!!!" });
      console.log(postCreated);
    }
    else{
        res.status(400).json({msg:"Unable to post Blog"})
    }
  });
});

module.exports = postsRoute;

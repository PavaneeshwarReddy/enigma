const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authenticateRoute = require("./Routes/Authentication");
const postsRoute = require("./Routes/CreatingPosts");

app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());
app.use(authenticateRoute);
app.use(postsRoute);
mongoose
  .connect(
    "mongodb+srv://noraw:noraw@cluster0.rj0ysfy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB");
  });

app.listen(4000, () => console.log("Port started"));


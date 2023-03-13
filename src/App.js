import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { UserContextProvider } from "./Functionalities/UserContext";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import AllBlogsScreen from "./Screens/AllBlogsScreen";
import CreateABlog from "./Screens/CreateABlog";
function App() {
  return (
    <div className="font-mono">
      <UserContextProvider>
      <Navbar />
        <Routes>
          <Route element={<WelcomeScreen />} path="/"></Route>
          <Route element={<HomeScreen />} path="/homescreen"></Route>
          <Route element={<LoginScreen />} path="/loginscreen"></Route>
          <Route element={<RegisterScreen />} path="/registerscreen"></Route>
          <Route element={<AllBlogsScreen />} path="/allblogsscreen"></Route>
          <Route element={<CreateABlog />} path="/newblogscreen"></Route>
          
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;

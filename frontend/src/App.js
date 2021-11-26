import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/logIn/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signUp/signUp"
import Navigation from "./components/navigation/index";

const App = () => {
  return (
    <div>
      <Header />
      
      
      <Routes>
        <Route path="/" element={<><Main/><Login/></>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
       
      <Footer />
      <SignUp />
      {/* <Navigation /> */}
    </div>
  );
};

export default App;

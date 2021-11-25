import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/logIn/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Resulted from "./components/dashboard/resulted";
import Navigation from "./components/navigation/index";

const App = () => {
  return (
    <div>
      <Header />
      
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<><Main/><Login/></>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Router path="/dashboard" element={<Dashboard1 />} />
      <Router path="/Available" element={<Available />} />
      <Router path="/dashboard" element={<Cancelled />} />
      <Router path="/dashboard" element={<Previous />} /> */}
      </Routes>
      
      <Footer />
      {/* <Navigation /> */}
    </div>
  );
};

export default App;

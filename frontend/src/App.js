import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/logIn/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import SignUp from "./components/SignUp/signUp";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/signUp"
          element={
            <>
              <SignUp />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

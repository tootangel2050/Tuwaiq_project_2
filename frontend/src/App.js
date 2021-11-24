import React from "react";
import { Route , Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/logIn/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Login />
      <Dashboard />
      <Footer />
	  <Routes>
{/* <Route path= ""  > */}


	  </Routes>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/Dashboard";
import Login from './components/logIn/LogIn'

// import Navigation from "./components/navigation/index"
// import 'bootstrap/dist/css/bootstrap.min.css';

// import provider
// import store

ReactDOM.render(
  // The provider will enable the child components to access the store
  <BrowserRouter>
    <App/>
  </BrowserRouter>,

  document.getElementById("root")
);

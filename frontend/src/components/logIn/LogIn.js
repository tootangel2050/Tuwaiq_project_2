import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const nav = useNavigate();
  const [NationalID, setNationalID] = useState("");
  const [Password, setPassword] = useState("");

  function validatFrom() {
    return NationalID.lenght > 0 && Password.lenght > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("user/", {
        NationalID: NationalID,
        Password: Password,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          if (res.data.role === "Admin") {
            nav("/admin");
          } else if (res.data.role === "user") {
            nav("/user");
          }
      })
      .catch((err) => {
        console.log(err);
        //swa1("not correct");
      });
  }


  return(
      <div></div>
  )

}

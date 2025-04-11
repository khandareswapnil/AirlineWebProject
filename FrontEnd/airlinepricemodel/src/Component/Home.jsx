import React from "react";
import { Header } from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/backgroundImage.webp";

export const Home = () => {
  return (
   <>
   <Header />
   <div className="w-100" style={{ height: "560px" }}>
    <img src={logo} alt="" className="w-100" style={{ height: "550px" }}/>
   </div>
   </>
  )
};



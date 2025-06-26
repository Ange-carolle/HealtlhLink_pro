import React from "react";
import logo from "../assets/images/logo.png";


function Welcome() {
  return (
      <div className="flex items-center bg-[#F2FFFC] relative h-screen w-full justify-center ">
        <img src={logo} className="h-30 w-60" />
        <h1 className="text-9xl font-bold bg-gradient-to-r from-[#3A6158] to-[#3B947F] bg-clip-text text-transparent">
          HealthLink
        </h1>
      </div>
  );
}

export default Welcome;

import { useState } from "react";
import React from "react";
import  photo from '../assets/images/photo.jpg'
import { FaBell, FaBlog, FaGlobe } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

function Navbar() {
  const [isclick, setIsclick] = useState(false);
  function change() {
    setIsclick(!isclick);
  }
  const [ischange, setIschange] = useState(false);
  function changed() {
    setIschange(!ischange);
  }

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Bienvenue Ange";
      case "/patient":
        return "Liste des patients";
      case "/listmedecin":
        return "Liste des medecins";
      default:
        return "Bienvenue Ange";
    }
  };
  return (
    <div className="w-full h-[10%] z-50 relative">
      <div className="w-full h-[10%] flex justify-between bg_color fixed  items-center px-10 ">
      <h1 className="text-green-800 text-3xl font-bold">{getTitle()}</h1>
      <div className="flex items-center gap-6">
        <div className="langues">
          <button onClick={change}>
            <FaGlobe/>
          </button>
          {isclick && (
            <ul className="absolute right-58 top-[60px] bg-green-800 text-white shadow-lg rounded-lg flex flex-col gap-2">
              <a href="">
                <li>Français</li>
              </a>
              <a href="">
                <li>English</li>
              </a>
            </ul>
          )}
        </div>
        <button>
           <FaBell/>
        </button>
        <img src={photo} alt="" className="w-10 h-10 rounded-[100%]" />
        <button onClick={changed}>
            <FaEllipsisVertical/>
        </button>
        {ischange && (
          <div className="absolute right-0 top-[80px] bg-green-800 text-white shadow-lg rounded-lg flex flex-col gap-2">
            <button className="hover:bg-gray-400 p-2">
              Se deconnecter
            </button>
            <button className="hover:bg-gray-400 p-2">
               Parametres
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Navbar;

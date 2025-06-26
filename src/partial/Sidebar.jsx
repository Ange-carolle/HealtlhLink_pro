import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { TieredMenu } from "primereact/tieredmenu";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import {
  Home,
  Stethoscope,
  User,
  User2,
  ChevronRight,
  Settings,
} from "lucide-react";
import { MdMedicalInformation } from "react-icons/md";
import { FaNotesMedical, FaVirus } from "react-icons/fa";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("/");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Met à jour l'item actif basé sur l'URL actuelle
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const element = [
    {
      icon: <Home className="w-5 h-5" />,
      text: "Accueil",
      url: "/",
    },
    {
      icon: <User className="w-5 h-5" />,
      text: "Accueil Admin",
      url: "/DashboardAdmin",
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      text: "Accueil Médecin",
      url: "/AcceuilMedecin",
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      text: "Nouvelle consultation",
      url: "/AddConsultation",
    },
    {
      icon: <User2 className="w-5 h-5" />,
      text: "Patient",
      url: "/patient",
    },
    {
      icon: <MdMedicalInformation className="w-5 h-5" />,
      text: "Mes consultations",
      url: "/ConsultationsPatient",
    },
    {
      icon: <FaNotesMedical className="w-5 h-5" />,
      text: "Mes ordonnances",
      url: "/OrdonnancesPatient",
    },
    {
      icon: <FaVirus className="w-5 h-5" />,
      text: "Mes maladies",
      url: "/Maladies",
    },
  ];

  const navigate = useNavigate();

  const items = [
    {
      label: "Router",
      icon: "pi pi-palette",
      items: [
        {
          label: "Styled",
          url: "/theming",
        },
        {
          label: "Unstyled",
          url: "/unstyled",
        },
      ],
    },
    {
      label: "Programmatic",
      icon: "pi pi-link",
      command: () => {
        navigate("/installation");
      },
    },
    {
      label: "External",
      icon: "pi pi-home",
      items: [
        {
          label: "React.js",
          url: "https://react.dev/",
        },
        {
          label: "Vite.js",
          url: "https://vitejs.dev/",
        },
      ],
    },
  ];

  const tabelement = [
    {
      title: "Medecin",
      dropelement: [
        {
          text: "Ajouter médecin",
          url: "/AddMedecin",
        },
        {
          text: "Liste médecin",
          url: "/listmedecin",
        },
      ],
    },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out bg_side${
        isCollapsed ? "w-20" : "w-72"
      } relative min-h-screen  shadow-2xl border-r border-[#28C7A2]/20`}
    >
      {/* Header avec logo */}
      <div className="p-6 border-b border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 rounded-lg shadow-lg ring-2 ring-white/30 transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-white drop-shadow-lg">
                  HealthLink
                </h1>
                <p className="text-xs text-white/70">Système de santé</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-105 text-white outline-none"
          >
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isCollapsed ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {element.map((item, index) => {
          const isActive = activeItem === item.url;
          return (
            <Link
              key={index}
              to={item.url}
              className={`group relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                isActive
                  ? "bg_hover_menu text-white shadow-lg shadow-black/10"
                  : "text-black hover:bg-white/10 hover:shadow-md"
              }`}
            >
              {/* Indicateur actif */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1 bg-[#28C7A2] rounded-r-full"></div>
              )}

              {/* Icône avec effet de hover */}
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#28C7A2]"
                    : "text-gray-700 group-hover:text-white group-hover:bg-gray-700"
                }`}
              >
                {item.icon}
              </div>

              {/* Texte avec animation */}
              {!isCollapsed && (
                <span
                  className={`font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-700 group-hover:text-gray-700"
                  }`}
                >
                  {item.text}
                </span>
              )}

              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          );
        })}
      </nav>

      {/* Section Dropdown stylisée */}
      {!isCollapsed && (
        <div className="p-4 border-t border-white/10 mt-4">
          <div className="mb-4">
            <div className="bg-black/10  rounded-lg p-3 backdrop-blur-sm border border-white/10">
              {tabelement.map((item, index) => (
                <Dropdown
                  key={index}
                  title={item.title}
                  dropelement={item.dropelement}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer avec bouton paramètres */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className=" w-full flex items-center justify-center space-x-2 px-4 py-3 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 text-gray-700">
          <Settings className="w-4 h-4" />
          {!isCollapsed && <span className="text-xl">Paramètres</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

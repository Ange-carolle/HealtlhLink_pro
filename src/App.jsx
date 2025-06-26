import { useContext, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Patient from "./pages/Admin/Patient";
import MedecinList from "./pages/Admin/MedecinList";
import ConsultationsPatient from "./pages/patient/ConsultationsPatient";
import OrdonnancesPatient from "./pages/patient/OrdonnancesPatient";
import DashbordAdmin from "./pages/Admin/DashbordAdmin";
import AcceuilMedecin from "./pages/medecin/AcceuilMedecin";
import AddMedecin from "./pages/Admin/AddMedecin";
import Maladies from "./pages/patient/Maladies";
import AddConsultation from "./pages/medecin/AddConsultation";
import Login from "./pages/LogIn";
import { AuthContext, AuthProvider } from "./Context/AuthContext";
import { ModalProvider } from "./Context/ModalContext";
import Welcome from "./pages/Welcome";

function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Welcome />;
  }
  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    );
  }
  // if (user?.role === "Administrateur") {
  //   return <DashbordAdmin />;
  // } else if (user?.role === "Patient") {
  //   return <Dashbord />;
  // } else if (user?.role === "Medecin") {
  //   return <AcceuilMedecin />;
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/listmedecin" element={<MedecinList />} />
        <Route
          path="/ConsultationsPatient"
          element={<ConsultationsPatient />}
        />
        <Route path="/OrdonnancesPatient" element={<OrdonnancesPatient />} />
        <Route path="/DashboardAdmin" element={<DashbordAdmin />} />
        <Route path="/AcceuilMedecin" element={<AcceuilMedecin />} />
        <Route path="/AddMedecin" element={<AddMedecin />} />
        <Route path="/Maladies" element={<Maladies />} />
        <Route path="/AddConsultation" element={<AddConsultation />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

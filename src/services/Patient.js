import axios from "axios";
import { API_BASE_URL } from "./Url";

export const getPatient = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getpatient`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des patients:", error);
    throw error;
  }
};

export const addPatient = async (patientData) => {
  try {
    const formData = new FormData();

    // Ajout de chaque champ au formData
    Object.entries(patientData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        formData.append(key, value);
      }
    });
    
    for (let pair of formData.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}
    const response = await axios.post(`${API_BASE_URL}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error("Erreur lors de l'ajout du patient:", error);
    throw error;
  }
};

export const fetchDashboardCounts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard-counts`);
    return response.data; // { patients: ..., medecins: ... }
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques :", error);
    throw error;
  }
};
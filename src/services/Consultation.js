import axios from "axios";
import { API_BASE_URL } from "./Url";


export const getConsultation = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getConsultation`);
    console.log("Réponse de l'API :", response);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des consultations:", error);
    throw error;
  }
};



export const addConsultation = async (consultationData) => {
  try {
    const formData = new FormData();
    // Ajout de chaque champ au formData
    Object.entries(consultationData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        formData.append(key, value);
      }
    });
    
    for (let pair of formData.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}
    const response = await axios.post(`${API_BASE_URL}/consultations`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error("Erreur lors de l'ajout d'une consultation:", error);
    throw error;
  }
};

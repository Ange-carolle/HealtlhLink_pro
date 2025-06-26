import axios from "axios";
import { API_BASE_URL } from "./Url";


export const getMedecin = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getmedecin`);
    if (!response) {
      throw new Error("Erreur lors de la récupération du médecin");
    }
    // const data = await response.json(;
    return response.data;
  } catch (error) {
    console.error("Erreur:", error);
    throw error;
  }
}

// export const addMedecin = async (data) => {
//   const formData = new FormData();

//   formData.append("name", data.name);
//   formData.append("prenom", data.prenom);
//   formData.append("date_naissance", data.date_naissance);
//   formData.append("email", data.email);
//   formData.append("telephone", data.telephone);
//   formData.append("specialite", data.specialite);
//   formData.append("num_ordre", data.num_ordre);
//   formData.append("adresse", data.adresse);
//   formData.append("ville", data.ville);
//   formData.append("hopital", data.hopital);
//   formData.append("role", data.role);
//   formData.append("password", data.password);

//   if (data.photo) {
//     formData.append("photo", data.photo);
//   }

//   const response = await axios.post(`${API_BASE_URL}/register`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response.data;
// };

export const addMedecin = async (formData) => {
  const data = new FormData();

  for (const key in formData) {
    data.append(key, formData[key]);
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/register`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout du médecin:", error);
    throw error;
  }
};


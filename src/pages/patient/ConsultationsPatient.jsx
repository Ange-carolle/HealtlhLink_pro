import React, { use, useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  FileText,
  Search,
  Pill,
} from "lucide-react";
import Layout from "../../partial/Layout";
import { getConsultation } from "../../services/Consultation";

const ConsultationsPatient = () => {
  const [consultations, setConsultations] = useState([]);

useEffect(() => {
  const fetchConsultations = async () => {
    const response = await getConsultation();
    console.log("Réponse récupérée :", response); // ici c'est utile
    setConsultations(response);
  };
  fetchConsultations();
}, []);
  
  const getStatusColor = (status) => {
    switch (status) {
      case "Terminée":
        return "bg-green-100 text-green-800 border-green-200";
      case "Programmée":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Annulée":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Barre de recherche et filtre sans logique */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Recherche..."
                className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <select className="px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Toutes les consultations</option>
              <option>Récentes (30 jours)</option>
              <option>Cardiologie</option>
              <option>Dermatologie</option>
              <option>Orthopédie</option>
            </select>
          </div>
        </div>

        {/* Liste statique des consultations */}
        <div className="space-y-4">

          {consultations.map((consultation) =>{ 
            const date = new Date(consultation.created_at);
            const heure = date.toLocaleTimeString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
            });
         
            return(
            <div
              key={consultation.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <User className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                         {consultation.medecin?.user?.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {consultation.medecin?.specialite}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(date).toLocaleDateString("fr-FR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {heure}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Type de consultation
                    </h4>
                    <p className="text-sm text-gray-600">{consultation.motif}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Diagnostic
                    </h4>
                    <p className="text-sm text-gray-600">
                      {consultation.diagnostic}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Statut
                    </h4>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                        consultation.statut
                      )}`}
                    >
                      {consultation.statut}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    Notes de consultation
                  </h4>
                  <p className="text-sm text-gray-600">{consultation.notes}</p>
                </div>

                {/* {consultation.prescription && ( */}
                  <div className="mt-4 bg-green-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-green-800 mb-2 flex items-center">
                      <Pill className="h-4 w-4 mr-1" />
                      Prescription
                    </h4>
                    <p className="text-sm text-green-700">
                      {consultation.ordonnance?.map((item)=>{

                        return (
                          <span key={item.id} className="block">
                            {item.note}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                {/* // )} */}
              </div>
            </div>
          )})}
        </div>
      </div>
    </Layout>
  );
};

export default ConsultationsPatient;

import React, { use, useEffect, useState } from "react";
import {
  Users,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Phone,
  Mail,
  Calendar,
  MapPin,
  UserCheck,
  UserX,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import Layout from "../../partial/Layout";
import PatientRow from "../../components/PatientRow";
import { useModal } from "../../Context/ModalContext";
import { fetchDashboardCounts, getPatient } from "../../services/patient";

const Patient = () => {
  const [patients, setPatients] = useState([]);

  const [counts, setCounts] = useState({
    patients: 0,
    medecins: 0,
    patients_this_month: 0,
    medecins_this_month: 0,
  });

  useEffect(() => {
    const getCounts = async () => {
      try {
        const data = await fetchDashboardCounts();
        setCounts(data);
      } catch (error) {
        console.error("Erreur récupération counts :", error);
      }
    };

    getCounts();
  }, []);

  useEffect(() => {
    // Fetch patients from API or other source
    const fetchPatients = async () => {
      const response = await getPatient();
      setPatients(response);
    };
    fetchPatients();
    console.log(patients);
  }, []);

  const { openModal } = useModal();
  return (
    <Layout>
      <div
        className="min-h-screen from-slate-50 to-blue-50"
        style={{ backgroundColor: "#F2FFFC" }}
      >
        {/* En-tête */}
        <div className=" ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-3">
                <button
                  onClick={openModal}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Nouveau Patient
                </button>
                <div className="bg-teal-50 p-3 rounded-full">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>

                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">
                    {counts.patients}
                  </p>
                  <p className="text-gray-600 text-sm">Total patients</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <UserCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">
                    {counts.patients}
                  </p>
                  <p className="text-gray-600 text-sm">Actifs ce mois</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Plus className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">
                    {counts.patients_this_month}
                  </p>
                  <p className="text-gray-600 text-sm">Nouveaux ce mois</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filtres et recherche */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un patient..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Tous les statuts</option>
                  <option>Actifs</option>
                  <option>Inactifs</option>
                  <option>Nouveaux</option>
                </select>

                <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Toutes les villes</option>
                  <option>Yaounde</option>
                  <option>Douala</option>
                  <option>Nkongsamba</option>
                </select>

                <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Trier par nom</option>
                  <option>Trier par âge</option>
                  <option>Trier par date</option>
                </select>

                <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filtres
                </button>
              </div>
            </div>
          </div>

          {/* Tableau des patients */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Âge
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Localisation
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dernière visite
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Patients */}
                  {patients.map((item, id) => (
                    <PatientRow
                      key={id}
                      pseudo={item.user?.pseudo} 
                      nom={item.user?.name} 
                      id={item.user?.id} 
                      number={item.user?.telephone} 
                      email={item.user?.email} 
                      age={item.user?.age} 
                      date_nais={item.user?.date_naissance} 
                      adresse={item.user?.adresse}
                      date={item.date} 
                      type={item.type} 
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Affichage de <span className="font-medium">1</span> à{" "}
                <span className="font-medium">5</span> sur{" "}
                <span className="font-medium">{counts.patients}</span> patients
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Précédent
                </button>
                <button className="px-3 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition-colors">
                  1
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  3
                </button>
                <span className="px-3 py-2 text-gray-500">...</span>
                <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  125
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Patient;

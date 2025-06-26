import React, { useEffect, useState } from "react";
import {
  Users,
  UserPlus,
  Activity,
  Settings,
  Search,
  Bell,
  Calendar,
  TrendingUp,
  UserMinus,
  Eye,
} from "lucide-react";
import Layout from "../../partial/Layout";
// import { useModal } from "../../components/ModalContext";
import PatientForm from "../../components/PatientForm";
import { fetchDashboardCounts } from "../../services/patient";
import { useModal } from "../../Context/ModalContext";

export default function AdminDashboard() {
  const { openModal, closeModal } = useModal();

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
        // Gère l'erreur si besoin
      }
    };

    getCounts();
  }, []);

  return (
    <Layout>
      <PatientForm />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-emerald-100 to-teal-100 border-b-4 border-emerald-300 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-emerald-800">
                    AdminDashboard
                  </h1>
                  <p className="text-emerald-600 text-sm">
                    Gestion du système médical
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-emerald-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-10 pr-4 py-2 bg-white/70 backdrop-blur-sm border border-emerald-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                </div>
                <button className="p-2 bg-white/70 backdrop-blur-sm rounded-full hover:bg-white/90 transition-all">
                  <Bell className="w-5 h-5 text-emerald-600" />
                </button>
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <span className="text-emerald-700 font-medium">Admin</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">
                  {counts.patients}
                </span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                Total Patients
              </h3>
              <p className="text-emerald-600 text-sm">
                +{counts.patients_this_month} ce mois
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">
                  {counts.medecins}
                </span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                Médecins Actifs
              </h3>
              <p className="text-emerald-600 text-sm">
                +{counts.medecins_this_month} ce mois
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">89</span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                RDV Aujourd'hui
              </h3>
              <p className="text-emerald-600 text-sm">15 en attente</p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">94%</span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                Taux de Satisfaction
              </h3>
              <p className="text-emerald-600 text-sm">+2% ce mois</p>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Gestion Patients */}
            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-emerald-800">
                  Gestion des Patients
                </h2>
              </div>

              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <UserPlus className="w-5 h-5" />
                  <span className="font-medium">Ajouter un Patient</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-white border-2 border-emerald-200 text-emerald-700 rounded-xl hover:bg-emerald-50 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                  <span className="font-medium">Voir tous les Patients</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-white border-2 border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition-all duration-300">
                  <UserMinus className="w-5 h-5" />
                  <span className="font-medium">Supprimer un Patient</span>
                </button>
              </div>
            </div>

            {/* Gestion Médecins */}
            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-emerald-800">
                  Gestion des Médecins
                </h2>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg">
                  <UserPlus className="w-5 h-5" />
                  <span className="font-medium">Ajouter un Médecin</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-white border-2 border-emerald-200 text-emerald-700 rounded-xl hover:bg-emerald-50 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                  <span className="font-medium">Voir tous les Médecins</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-white border-2 border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition-all duration-300">
                  <UserMinus className="w-5 h-5" />
                  <span className="font-medium">Supprimer un Médecin</span>
                </button>
              </div>
            </div>
          </div>

          {/* Activity Monitor */}
          <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-emerald-800">
                  Activité du Système
                </h2>
              </div>
              <button className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors">
                Voir tout
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-xl border border-emerald-100">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-emerald-800 font-medium">
                    Nouveau patient ajouté
                  </p>
                  <p className="text-emerald-600 text-sm">
                    Dr. Martin - Il y a 5 min
                  </p>
                </div>
                <span className="text-emerald-600 text-sm">14:35</span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-xl border border-emerald-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-emerald-800 font-medium">
                    Rendez-vous confirmé
                  </p>
                  <p className="text-emerald-600 text-sm">
                    Patient: Marie Dubois - Il y a 12 min
                  </p>
                </div>
                <span className="text-emerald-600 text-sm">14:28</span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-xl border border-emerald-100">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-emerald-800 font-medium">
                    Mise à jour profil médecin
                  </p>
                  <p className="text-emerald-600 text-sm">
                    Dr. Sophie Laurent - Il y a 25 min
                  </p>
                </div>
                <span className="text-emerald-600 text-sm">14:15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

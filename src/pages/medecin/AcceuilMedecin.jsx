import React, { useState } from "react";
import {
  FileText,
  Users,
  Clipboard,
  Search,
  Bell,
  Plus,
  Eye,
  Edit,
  Stethoscope,
  Heart,
  Activity,
  User,
  Pill,
  Calendar,
  Clock,
} from "lucide-react";
import Layout from "../../partial/Layout";
import ConsultationForm from "../../components/ConsultationForm";

function AcceuilMedecin() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const openForm = (patient = null) => {
    setSelectedPatient(patient); // facultatif si tu veux préremplir le formulaire
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setSelectedPatient(null);
  };

  const saveConsultation = (data) => {
    console.log("Consultation enregistrée :", data);
  };

  return (
    <Layout>
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Header */}
        <header className="relative  z-50 fixed h-full bg_color overflow-auto scrollbar-none bg-gradient-to-r from-emerald-100 to-teal-100 border-b-4 border-emerald-300 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-emerald-800">
                    Dashboard Médecin
                  </h1>
                  <p className="text-emerald-600 text-sm">
                    Dr. Sophie Martin - Cardiologie
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-emerald-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Rechercher un patient..."
                    className="pl-10 pr-4 py-2 bg-white/70 backdrop-blur-sm border border-emerald-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                </div>
                <button className="p-2 bg-white/70 backdrop-blur-sm rounded-full hover:bg-white/90 transition-all relative">
                  <Bell className="w-5 h-5 text-emerald-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SM</span>
                  </div>
                  <span className="text-emerald-700 font-medium">
                    Dr. Martin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
         <ConsultationForm
        isOpen={isOpen}
        onClose={closeForm}
        onSave={saveConsultation}
        patientData={selectedPatient}
      />
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Clipboard className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">24</span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                Consultations
              </h3>
              <p className="text-emerald-600 text-sm">Cette semaine</p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">187</span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                Mes Patients
              </h3>
              <p className="text-emerald-600 text-sm">Total actifs</p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">156</span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                Ordonnances
              </h3>
              <p className="text-emerald-600 text-sm">Ce mois</p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-emerald-800">4.8</span>
              </div>
              <h3 className="text-emerald-700 font-semibold mb-1">
                Note Moyenne
              </h3>
              <p className="text-emerald-600 text-sm">Satisfaction patients</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Consultations Récentes */}
              <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Clipboard className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-emerald-800">
                      Consultations Récentes
                    </h2>
                  </div>
                  <button
                    onClick={() => openForm()}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Nouvelle Consultation</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-xl border border-emerald-100 hover:bg-white/90 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-emerald-800">
                        Marie Dubois
                      </h3>
                      <p className="text-emerald-600 text-sm">
                        Consultation cardiologique - Hypertension
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-700 font-medium">14/06/2025</p>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Terminée
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-xl border border-emerald-100 hover:bg-white/90 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-emerald-800">
                        Jean Moreau
                      </h3>
                      <p className="text-emerald-600 text-sm">
                        Bilan de santé général - Contrôle routine
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-700 font-medium">13/06/2025</p>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        Ordonnance créée
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/70 rounded-xl border border-emerald-100 hover:bg-white/90 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-emerald-800">
                        Claire Bernard
                      </h3>
                      <p className="text-emerald-600 text-sm">
                        Suivi cardiaque - Arythmie
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-700 font-medium">12/06/2025</p>
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                        Suivi requis
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Principales */}
              <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100">
                <h2 className="text-xl font-bold text-emerald-800 mb-6">
                  Actions Principales
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all">
                    <Users className="w-8 h-8" />
                    <span className="font-medium">Mes Patients</span>
                    <span className="text-sm opacity-90">Voir & Gérer</span>
                  </button>
                  <button className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all">
                    <FileText className="w-8 h-8" />
                    <span className="font-medium">Ordonnances</span>
                    <span className="text-sm opacity-90">Créer & Modifier</span>
                  </button>
                  <button className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all">
                    <Clipboard className="w-8 h-8" />
                    <span className="font-medium">Consultations</span>
                    <span className="text-sm opacity-90">Historique</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Patients Récents */}
              <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-emerald-800">
                    Patients Récents
                  </h3>
                  <button className="text-emerald-600 text-sm hover:text-emerald-700">
                    Voir tous
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg hover:bg-white/90 transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">YA</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-emerald-800 font-medium text-sm">
                        Youka Ange
                      </p>
                      <p className="text-emerald-600 text-xs">
                        Dernière visite: 14/06
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg hover:bg-white/90 transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">CA</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-emerald-800 font-medium text-sm">
                        Carolle Youka
                      </p>
                      <p className="text-emerald-600 text-xs">
                        Dernière visite: 13/06
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg hover:bg-white/90 transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">CB</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-emerald-800 font-medium text-sm">
                        Claire Bernard
                      </p>
                      <p className="text-emerald-600 text-xs">
                        Dernière visite: 12/06
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ordonnances à Traiter */}
              <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">
                  Ordonnances en Cours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Pill className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-emerald-800 font-medium text-sm">
                        Ordonnance #1245
                      </p>
                      <p className="text-emerald-600 text-xs">
                        Marie D. - Antihypertenseur
                      </p>
                    </div>
                    <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      En cours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <Pill className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-emerald-800 font-medium text-sm">
                        Ordonnance #1246
                      </p>
                      <p className="text-emerald-600 text-xs">
                        Jean M. - Anti-inflammatoire
                      </p>
                    </div>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Validée
                    </span>
                  </div>
                </div>
              </div>

              {/* Statistiques Rapides */}
              <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">
                  Activité
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-700 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Aujourd'hui
                    </span>
                    <span className="text-emerald-600 text-sm font-medium">
                      6 consultations
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-700 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Cette semaine
                    </span>
                    <span className="text-emerald-600 text-sm font-medium">
                      24 consultations
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-700 text-sm flex items-center">
                      <Activity className="w-4 h-4 mr-2" />
                      Taux de suivi
                    </span>
                    <span className="text-emerald-600 text-sm font-medium">
                      92%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default AcceuilMedecin;

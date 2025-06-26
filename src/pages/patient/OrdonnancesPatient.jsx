import React from "react";
import {
  Calendar,
  Clock,
  User,
  Pill,
  Download,
  Eye,
  Filter,
  Search,
  ChevronDown,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Layout from "../../partial/Layout";

const OrdonnancesPatient = () => {
  return (
    <Layout>
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
        style={{ backgroundColor: "#F2FFFC" }}
      >
        {/* En-tête */}
        <div className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Mes Ordonnances
                </h1>
                <p className="text-gray-600 mt-1">
                  Gérez et consultez vos prescriptions médicales
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-teal-50 p-3 rounded-full">
                  <FileText className="h-8 w-8 text-teal-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-gray-600 text-sm">Ordonnances actives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Pill className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">6</p>
                  <p className="text-gray-600 text-sm">Médicaments prescrits</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-gray-600 text-sm">Ce mois-ci</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">1</p>
                  <p className="text-gray-600 text-sm">Bientôt expirée</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filtres et recherche */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher par médecin ou médicament..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex space-x-3">
                <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none">
                  <option>Tous les statuts</option>
                  <option>Actives</option>
                  <option>Terminées</option>
                  <option>Expirées</option>
                </select>

                <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none">
                  <option>Trier par date</option>
                  <option>Trier par médecin</option>
                  <option>Trier par statut</option>
                </select>
              </div>
            </div>
          </div>

          {/* Exemple d'ordonnance active */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Ordonnance #001
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          15 juin 2024
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          Dr. Martin Dubois
                        </div>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          Cardiologue
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium text-emerald-600 bg-emerald-50">
                      Active
                    </span>
                    <div className="flex space-x-1">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Médicaments */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Pill className="h-4 w-4 mr-2 text-teal-600" />
                    Médicaments prescrits
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-medium text-gray-900">
                        Lisinopril 10mg
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Posologie: 1 cp/jour
                      </div>
                      <div className="text-sm text-gray-600">
                        Durée: 30 jours
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-medium text-gray-900">
                        Atorvastatine 20mg
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Posologie: 1 cp le soir
                      </div>
                      <div className="text-sm text-gray-600">
                        Durée: 30 jours
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations supplémentaires */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Valide jusqu'au 15 juillet 2024
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple d'ordonnance terminée */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Ordonnance #002
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          10 juin 2024
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          Dr. Sophie Laurent
                        </div>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          Médecin généraliste
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50">
                      Terminée
                    </span>
                    <div className="flex space-x-1">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Pill className="h-4 w-4 mr-2 text-teal-600" />
                    Médicaments prescrits
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-medium text-gray-900">
                        Amoxicilline 500mg
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Posologie: 3 cp/jour
                      </div>
                      <div className="text-sm text-gray-600">
                        Durée: 7 jours
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-medium text-gray-900">
                        Doliprane 1000mg
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Posologie: 3 cp/jour si besoin
                      </div>
                      <div className="text-sm text-gray-600">
                        Durée: 7 jours
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Valide jusqu'au 17 juin 2024
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Retiré en pharmacie
                    </span>
                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple d'ordonnance expirée */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Ordonnance #003
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          28 mai 2024
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          Dr. Pierre Moreau
                        </div>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          Dermatologue
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium text-red-600 bg-red-50">
                      Expirée
                    </span>
                    <div className="flex space-x-1">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Pill className="h-4 w-4 mr-2 text-teal-600" />
                    Médicaments prescrits
                  </h4>
                  <div className="grid md:grid-cols-1 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-medium text-gray-900">
                        Crème hydratante
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Posologie: 2x/jour
                      </div>
                      <div className="text-sm text-gray-600">
                        Durée: 15 jours
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Valide jusqu'au 12 juin 2024
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Retiré en pharmacie
                    </span>
                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrdonnancesPatient;

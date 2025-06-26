import React, { useState } from "react";
import Layout from "../../partial/Layout";

import {
  Search,
  Filter,
  Plus,
  Calendar,
  AlertCircle,
  Clock,
  User,
  FileText,
  ChevronDown,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";

const Maladies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Données d'exemple des maladies
  const diseases = [
    {
      id: 1,
      name: "Hypertension artérielle",
      category: "Cardiovasculaire",
      severity: "Modérée",
      status: "Chronique",
      diagnosisDate: "2023-03-15",
      lastUpdate: "2024-12-10",
      notes: "Contrôlée par médication, surveillance régulière requise",
    },
    {
      id: 2,
      name: "Diabète de type 2",
      category: "Endocrinien",
      severity: "Élevée",
      status: "Chronique",
      diagnosisDate: "2022-08-22",
      lastUpdate: "2024-11-28",
      notes: "Hémoglobine glyquée à surveiller trimestriellement",
    },
    {
      id: 3,
      name: "Bronchite aigüe",
      category: "Respiratoire",
      severity: "Légère",
      status: "Guérie",
      diagnosisDate: "2024-10-05",
      lastUpdate: "2024-10-20",
      notes: "Traitement antibiotique terminé avec succès",
    },
    {
      id: 4,
      name: "Arthrose du genou",
      category: "Rhumatologie",
      severity: "Modérée",
      status: "Stable",
      diagnosisDate: "2021-11-30",
      lastUpdate: "2024-09-15",
      notes: "Physiothérapie recommandée, anti-inflammatoires au besoin",
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Légère":
        return "bg-green-50 text-green-700 border-green-200";
      case "Modérée":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Élevée":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Chronique":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Aigüe":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Stable":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Guérie":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const filteredDiseases = diseases.filter((disease) => {
    const matchesSearch =
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      disease.status.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50"
        style={{ backgroundColor: "#f2fffc" }}
      >
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <FileText className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Dossier Médical
                  </h1>
                  <p className="text-gray-600">Liste des maladies du patient</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-lg">
                  <User className="h-5 w-5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">
                    Ange Youka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher une maladie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                  >
                    <Filter className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">Filtres</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        showFilters ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showFilters && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
                      <div className="p-2">
                        {["all", "chronique", "aigüe", "stable", "guérie"].map(
                          (filter) => (
                            <button
                              key={filter}
                              onClick={() => setSelectedFilter(filter)}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                selectedFilter === filter
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "hover:bg-gray-100 text-gray-700"
                              }`}
                            >
                              {filter === "all"
                                ? "Toutes"
                                : filter.charAt(0).toUpperCase() +
                                  filter.slice(1)}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <button className="flex items-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors">
                  <Plus className="h-5 w-5" />
                  <span>Ajouter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Chroniques
                  </p>
                  <p className="text-2xl font-bold text-blue-600">2</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Actives</p>
                  <p className="text-2xl font-bold text-orange-600">3</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-xl">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Guéries</p>
                  <p className="text-2xl font-bold text-green-600">1</p>
                </div>
                <div className="p-3 bg-green-100 rounded-xl">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Diseases List */}
          <div className="space-y-4">
            {filteredDiseases.map((disease) => (
              <div
                key={disease.id}
                className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {disease.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(
                          disease.severity
                        )}`}
                      >
                        {disease.severity}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          disease.status
                        )}`}
                      >
                        {disease.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Catégorie</p>
                        <p className="font-medium text-gray-900">
                          {disease.category}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Diagnostic</p>
                        <p className="font-medium text-gray-900">
                          {new Date(disease.diagnosisDate).toLocaleDateString(
                            "fr-FR"
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Dernière mise à jour
                        </p>
                        <p className="font-medium text-gray-900">
                          {new Date(disease.lastUpdate).toLocaleDateString(
                            "fr-FR"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">
                        Notes cliniques
                      </p>
                      <p className="text-gray-800">{disease.notes}</p>
                    </div>
                  </div>

                  <div className="ml-4 flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDiseases.length === 0 && (
            <div className="text-center py-12">
              <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche ou filtres.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Maladies;

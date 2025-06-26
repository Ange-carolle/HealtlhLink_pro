import React from 'react';
import { User, Heart, AlertTriangle, Calendar, FileText, Phone, Mail, MapPin, Pill, Ruler, Weight, Scale } from 'lucide-react';
import Layout from '../partial/Layout';

const Dashboard = () => {
  return (
    <Layout>
    <div className="min-h-screen" style={{backgroundColor: '#F2FFFC'}}>
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Informations personnelles */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <User className="w-6 h-6 text-emerald-600" />
              <h2 className="text-lg font-semibold text-gray-900">Informations Personnelles</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Nom complet</p>
                  <p className="text-lg font-semibold text-gray-900">Youka Ange</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Âge</p>
                  <p className="text-base text-gray-900">25 ans</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Groupe sanguin</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    A+
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Ruler className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Taille</p>
                    <p className="text-base text-gray-900">158 cm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Téléphone</p>
                    <p className="text-base text-gray-900">6 54 25 65 36</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <p className="text-base text-gray-900">y.carolle@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Scale className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">poids</p>
                    <p className="text-base text-gray-900">50 Kg</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Adresse</p>
                    <p className="text-base text-gray-900">Qt6 Nkongsamba</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Sécurité sociale</p>
                  <p className="text-base text-gray-900 font-mono">1 78 03 75 114 023 45</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vue d'ensemble - Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-800">Maladies connues</p>
                <p className="text-2xl font-bold text-emerald-900">3</p>
              </div>
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-800">Allergies</p>
                <p className="text-2xl font-bold text-orange-900">3</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">Consultations</p>
                <p className="text-2xl font-bold text-blue-900">3</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-800">Ordonnances</p>
                <p className="text-2xl font-bold text-purple-900">2</p>
              </div>
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Maladies connues */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-emerald-600" />
              <h2 className="text-lg font-semibold text-gray-900">Maladies Connues</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Diabète de type 2</h3>
                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-orange-100 text-orange-800 border-orange-200">
                    Modéré
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Stable
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Contrôlé par régime alimentaire et médication</p>
              <p className="text-sm text-gray-600">Diagnostiquée en 2020</p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Hypertension artérielle</h3>
                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-yellow-100 text-yellow-800 border-yellow-200">
                    Léger
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Stable
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Tension artérielle bien contrôlée</p>
              <p className="text-sm text-gray-600">Diagnostiquée en 2019</p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Cholestérol élevé</h3>
                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-orange-100 text-orange-800 border-orange-200">
                    Modéré
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    En amélioration
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Réduction significative avec traitement</p>
              <p className="text-sm text-gray-600">Diagnostiquée en 2021</p>
            </div>
          </div>
        </div>

        {/* Allergies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h2 className="text-lg font-semibold text-gray-900">Allergies</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Pénicilline</h3>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-red-100 text-red-800 border-red-200">
                  Sévère
                </span>
              </div>
              <p className="text-gray-700"><strong>Réaction:</strong> Éruption cutanée, difficultés respiratoires</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Fruits à coque</h3>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-orange-100 text-orange-800 border-orange-200">
                  Modéré
                </span>
              </div>
              <p className="text-gray-700"><strong>Réaction:</strong> Démangeaisons, gonflement</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Latex</h3>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-yellow-100 text-yellow-800 border-yellow-200">
                  Léger
                </span>
              </div>
              <p className="text-gray-700"><strong>Réaction:</strong> Irritation cutanée</p>
            </div>
          </div>
        </div>

        {/* Consultations récentes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Consultations Récentes</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">15 Juin 2025</h3>
                    <p className="text-sm text-gray-600">Dr. Martin Laurent - Endocrinologie</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Terminée
                </span>
              </div>
              <p className="text-gray-700"><strong>Motif:</strong> Suivi diabète</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">02 Juin 2025</h3>
                    <p className="text-sm text-gray-600">Dr. Sophie Bernard - Cardiologie</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Terminée
                </span>
              </div>
              <p className="text-gray-700"><strong>Motif:</strong> Contrôle tension</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">28 Mai 2025</h3>
                    <p className="text-sm text-gray-600">Dr. Jean Moreau - Médecine générale</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Terminée
                </span>
              </div>
              <p className="text-gray-700"><strong>Motif:</strong> Consultation générale</p>
            </div>
          </div>
        </div>

        {/* Ordonnances récentes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Ordonnances Récentes</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Ordonnance du 15 Juin 2025</h3>
                  <p className="text-sm text-gray-600">Prescrite par Dr. Martin Laurent</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="flex items-start space-x-3">
                    <Pill className="w-4 h-4 text-purple-600 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Metformine</h4>
                        <span className="text-sm text-gray-600">3 mois</span>
                      </div>
                      <p className="text-sm text-gray-600">500mg - 2x/jour</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="flex items-start space-x-3">
                    <Pill className="w-4 h-4 text-purple-600 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Gliclazide</h4>
                        <span className="text-sm text-gray-600">3 mois</span>
                      </div>
                      <p className="text-sm text-gray-600">30mg - 1x/jour</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Ordonnance du 02 Juin 2025</h3>
                  <p className="text-sm text-gray-600">Prescrite par Dr. Sophie Bernard</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="flex items-start space-x-3">
                    <Pill className="w-4 h-4 text-purple-600 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Amlodipine</h4>
                        <span className="text-sm text-gray-600">6 mois</span>
                      </div>
                      <p className="text-sm text-gray-600">5mg - 1x/jour</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="flex items-start space-x-3">
                    <Pill className="w-4 h-4 text-purple-600 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Atorvastatine</h4>
                        <span className="text-sm text-gray-600">6 mois</span>
                      </div>
                      <p className="text-sm text-gray-600">20mg - 1x/soir</p>
                    </div>
                  </div>
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

export default Dashboard;
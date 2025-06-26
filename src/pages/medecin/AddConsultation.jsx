import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  FileText,
  Plus,
  X,
  Save,
  AlertCircle,
} from "lucide-react";

import Layout from "../../partial/Layout";
import { addConsultation } from "../../services/Consultation";

const AddConsultation = () => {
  const [showOrdonnanceModal, setShowOrdonnanceModal] = useState(false);
  const [ordonnances, setOrdonnances] = useState([]);

  const [formData, setFormData] = useState({
    patient: "",
    patient_id: "",
    medecin_id: "",
    date: "",
    time: "",
    motif: "",
    diagnostic: "",
    statut: "Programmée",
    notes: "",
    medicaments: [{ nom: "", posologie: "", duree: "" }],
  });

  const [currentOrdonnance, setCurrentOrdonnance] = useState({
    medicaments: [{ nom: "", posologie: "", duree: "" }],
    recommandations: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMedicamentChange = (index, field, value) => {
    const newMedicaments = [...formData.medicaments];
    newMedicaments[index][field] = value;
    setCurrentOrdonnance((prev) => ({
      ...prev,
      medicaments: newMedicaments,
    }));
  };

  const addMedicament = () => {
    setCurrentOrdonnance((prev) => ({
      ...prev,
      medicaments: [...prev.medicaments, { nom: "", posologie: "", duree: "" }],
    }));
  };

  const removeMedicament = (index) => {
    if (currentOrdonnance.medicaments.length > 1) {
      const newMedicaments = currentOrdonnance.medicaments.filter(
        (_, i) => i !== index
      );
      setCurrentOrdonnance((prev) => ({
        ...prev,
        medicaments: newMedicaments,
      }));
    }
  };



  const saveOrdonnance = () => {
    if (currentOrdonnance.medicaments.some((med) => med.nom.trim() !== "")) {
      const newOrdonnance = {
        id: Date.now(),
        ...currentOrdonnance,
        dateCreation: new Date().toLocaleString("fr-FR"),
      };
      setOrdonnances((prev) => [...prev, newOrdonnance]);
      setCurrentOrdonnance({
        medicaments: [{ nom: "", posologie: "", duree: "" }],
        recommandations: "",
      });
      setShowOrdonnanceModal(false);
    }
  };

  

  const deleteOrdonnance = (id) => {
    setOrdonnances((prev) => prev.filter((ord) => ord.id !== id));
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        ...formData,
        medicaments: [...formData.medicaments],
      };

      await addConsultation(dataToSend);
      alert("Consultation ajoutée avec succès !");
      setFormData({
        patient: "",
        patient_id: "",
        medecin_id: "",
        date: "",
        time: "",
        motif: "",
        diagnostic: "",
        statut: "",
        notes: "",
        medicaments: [{ nom: "", posologie: "", duree: "" }],
      });
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout de la consultation");
    }
  };





  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: "#f2fffc" }}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto ">
            {/* Header */}
            <div className="flex flex-row  items-center justify-between mb-6">
              <div className="mb-8 ">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Nouvelle Consultation
                </h1>
                <p className="text-gray-600">
                  Ajoutez les informations de la consultation
                </p>
              </div>
              <input
                type="text"
                name="medecin_id"
                value={formData.medecin_id}
                onChange={handleInputChange}
                className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Id du médecin"
                required
              />
            </div>
            {/* Main Form */}
            <div className="space-y-6">
              <div
                className="bg-white rounded-xl shadow-lg p-6"
                style={{ borderLeft: "4px solid #e8f7f0" }}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <User className="mr-2" style={{ color: "#10b981" }} />
                  Informations de la consultation
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient *
                    </label>
                    <input
                      type="text"
                      name="patient"
                      value={formData.patient}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nom du patient"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Id du patient *
                    </label>
                    <input
                      type="text"
                      name="patient_id"
                      value={formData.id}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Id du patient"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Heure *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Diagnostic *
                    </label>
                    <input
                      type="text"
                      name="diagnostic"
                      value={formData.diagnostic}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Statut
                    </label>
                    <select
                      name="statut"
                      value={formData.statut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Choisir</option>
                      <option value="Programmée">Programmée</option>
                      <option value="En cours">En cours</option>
                      <option value="Terminée">Terminée</option>
                      <option value="Annulée">Annulée</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motif de consultation *
                  </label>
                  <input
                    type="text"
                    name="motif"
                    value={formData.motif}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ex: Consultation de routine, Douleurs abdominales..."
                    required
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes de consultation
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Observations, diagnostic, recommandations..."
                  />
                </div>
              </div>

              {/* Ordonnance Section */}
              <div
                className="bg-white rounded-xl shadow-lg p-6"
                style={{ borderLeft: "4px solid #d1fae5" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <FileText className="mr-2" style={{ color: "#059669" }} />
                    Ordonnance
                  </h2>
                  <button
                    type="button"
                    onClick={() => setShowOrdonnanceModal(true)}
                    className="flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#10b981" }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Créer une ordonnance
                  </button>
                </div>

                {ordonnances.length === 0 ? (
                  <div
                    className="text-center py-8"
                    style={{ backgroundColor: "#f0fdf4" }}
                  >
                    <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">Aucune ordonnance créée</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Cliquez sur "Créer une ordonnance" pour en ajouter une
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {ordonnances.map((ord, index) => (
                      <div
                        key={ord.id}
                        className="border border-gray-200 rounded-lg p-4"
                        style={{ backgroundColor: "#f8fffe" }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-medium text-gray-800">
                            Ordonnance #{index + 1}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              {ord.dateCreation}
                            </span>
                            <button
                              onClick={() => deleteOrdonnance(ord.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-2">
                              Médicaments :
                            </h5>
                            <div className="space-y-2">
                              {ord.medicaments
                                .filter((med) => med.nom.trim() !== "")
                                .map((med, medIndex) => (
                                  <div
                                    key={medIndex}
                                    className="text-sm text-gray-600 pl-3 border-l-2"
                                    style={{ borderColor: "#10b981" }}
                                  >
                                    <div className="font-medium">{med.nom}</div>
                                    {med.posologie && (
                                      <div className="text-gray-500">
                                        Posologie: {med.posologie}
                                      </div>
                                    )}
                                    {med.duree && (
                                      <div className="text-gray-500">
                                        Durée: {med.duree}
                                      </div>
                                    )}
                                  </div>
                                ))}
                            </div>
                          </div>

                          {ord.recommandations && (
                            <div>
                              <h5 className="text-sm font-medium text-gray-700 mb-1">
                                Recommandations :
                              </h5>
                              <p
                                className="text-sm text-gray-600 pl-3 border-l-2"
                                style={{ borderColor: "#10b981" }}
                              >
                                {ord.recommandations}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#10b981" }}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Enregistrer la consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Ordonnance */}
        {showOrdonnanceModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                    <FileText className="mr-2" style={{ color: "#059669" }} />
                    Créer une ordonnance
                  </h3>
                  <button
                    onClick={() => setShowOrdonnanceModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Médicaments
                      </h4>
                      <button
                        type="button"
                        onClick={addMedicament}
                        className="flex items-center px-3 py-2 text-sm text-white rounded-lg hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#10b981" }}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Ajouter
                      </button>
                    </div>

                    <div className="space-y-4">
                      {currentOrdonnance.medicaments.map(
                        (medicament, index) => (
                          <div
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg"
                            style={{ backgroundColor: "#f8fffe" }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1 grid md:grid-cols-3 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom du médicament
                                  </label>
                                  <input
                                    type="text"
                                    value={medicament.nom}
                                    name="nom"
                                    onChange={(e) =>
                                      handleMedicamentChange(
                                        index,
                                        "nom",
                                        e.target.value
                                      )
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Ex: Doliprane 1000mg"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Posologie
                                  </label>
                                  <input
                                    type="text"
                                    name="posologie"
                                    value={medicament.posologie}
                                    onChange={(e) =>
                                      handleMedicamentChange(
                                        index,
                                        "posologie",
                                        e.target.value
                                      )
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Ex: 1 comprimé 3 fois par jour"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Durée
                                  </label>
                                  <input
                                    name="duree"
                                    type="text"
                                    value={medicament.duree}
                                    onChange={(e) =>
                                      handleMedicamentChange(
                                        index,
                                        "duree",
                                        e.target.value
                                      )
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Ex: 5 jours"
                                  />
                                </div>
                              </div>
                              {currentOrdonnance.medicaments.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeMedicament(index)}
                                  className="ml-2 text-red-500 hover:text-red-700"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recommandations
                    </label>
                    <textarea
                      value={currentOrdonnance.recommandations}
                      name="description"
                      onChange={(e) =>
                        setCurrentOrdonnance((prev) => ({
                          ...prev,
                          recommandations: e.target.value,
                        }))
                      }
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Recommandations particulières, conseils, précautions..."
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowOrdonnanceModal(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={saveOrdonnance}
                    className="flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#10b981" }}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Enregistrer l'ordonnance
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AddConsultation;

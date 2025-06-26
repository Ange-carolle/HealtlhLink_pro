import React, { useState } from 'react';
import { X, User, Calendar, Clock, FileText, Stethoscope, Activity, Plus, Save } from 'lucide-react';

const ConsultationForm = ({ isOpen, onClose, onSave, patientData = null }) => {
  const [formData, setFormData] = useState({
    patientId: patientData?.id || '',
    patientName: patientData?.name || '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    motifConsultation: '',
    symptomes: '',
    examenClinique: '',
    diagnostic: '',
    traitement: '',
    observations: '',
    prochainRendezVous: '',
    urgence: false,
    type: 'consultation'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Le nom du patient est requis';
    }
    if (!formData.motifConsultation.trim()) {
      newErrors.motifConsultation = 'Le motif de consultation est requis';
    }
    if (!formData.symptomes.trim()) {
      newErrors.symptomes = 'Les symptômes sont requis';
    }
    if (!formData.diagnostic.trim()) {
      newErrors.diagnostic = 'Le diagnostic est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const consultationData = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      
      onSave(consultationData);
      onClose();
      
      // Reset form
      setFormData({
        patientId: '',
        patientName: '',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().slice(0, 5),
        motifConsultation: '',
        symptomes: '',
        examenClinique: '',
        diagnostic: '',
        traitement: '',
        observations: '',
        prochainRendezVous: '',
        urgence: false,
        type: 'consultation'
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-[7%] left-1 right-1 z-40 flex items-center justify-center bg_color/30 backdrop-blur-xl p-4 ">
      <div className="w-full h-ful max-w-4xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden ">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#28C7A2] to-[#20B494] p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nouvelle Consultation</h2>
                <p className="text-white/80">Enregistrement des informations médicales</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Informations Patient */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-[#28C7A2]" />
                Informations Patient
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du Patient *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                      errors.patientName 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-[#28C7A2]'
                    }`}
                    placeholder="Nom complet du patient"
                  />
                  {errors.patientName && (
                    <p className="text-red-500 text-sm mt-1">{errors.patientName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID Patient
                  </label>
                  <input
                    type="text"
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#28C7A2] focus:outline-none transition-colors"
                    placeholder="Identifiant patient"
                  />
                </div>
              </div>
            </div>

            {/* Date et Heure */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Date et Heure
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de consultation
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Heure
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de consultation
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="consultation">Consultation</option>
                    <option value="suivi">Suivi</option>
                    <option value="urgence">Urgence</option>
                    <option value="controle">Contrôle</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="urgence"
                    checked={formData.urgence}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Consultation d'urgence</span>
                </label>
              </div>
            </div>

            {/* Informations Médicales */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-green-600" />
                Informations Médicales
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motif de consultation *
                  </label>
                  <input
                    type="text"
                    name="motifConsultation"
                    value={formData.motifConsultation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                      errors.motifConsultation 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-green-500'
                    }`}
                    placeholder="Raison de la visite..."
                  />
                  {errors.motifConsultation && (
                    <p className="text-red-500 text-sm mt-1">{errors.motifConsultation}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Symptômes observés *
                  </label>
                  <textarea
                    name="symptomes"
                    value={formData.symptomes}
                    onChange={handleInputChange}
                    rows="3"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none resize-none ${
                      errors.symptomes 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-green-500'
                    }`}
                    placeholder="Décrivez les symptômes du patient..."
                  />
                  {errors.symptomes && (
                    <p className="text-red-500 text-sm mt-1">{errors.symptomes}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Examen clinique
                  </label>
                  <textarea
                    name="examenClinique"
                    value={formData.examenClinique}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Résultats de l'examen physique..."
                  />
                </div>
              </div>
            </div>

            {/* Diagnostic et Traitement */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-600" />
                Diagnostic et Traitement
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Diagnostic *
                  </label>
                  <textarea
                    name="diagnostic"
                    value={formData.diagnostic}
                    onChange={handleInputChange}
                    rows="2"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none resize-none ${
                      errors.diagnostic 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-purple-500'
                    }`}
                    placeholder="Diagnostic médical..."
                  />
                  {errors.diagnostic && (
                    <p className="text-red-500 text-sm mt-1">{errors.diagnostic}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Traitement prescrit
                  </label>
                  <textarea
                    name="traitement"
                    value={formData.traitement}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Médicaments, posologie, durée..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Observations complémentaires
                  </label>
                  <textarea
                    name="observations"
                    value={formData.observations}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Notes additionnelles..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prochain rendez-vous
                  </label>
                  <input
                    type="date"
                    name="prochainRendezVous"
                    value={formData.prochainRendezVous}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-3 bg-gradient-to-r from-[#28C7A2] to-[#20B494] text-white rounded-lg hover:from-[#20B494] to-[#1BA085] transition-all duration-200 font-medium flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Enregistrement...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Enregistrer</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
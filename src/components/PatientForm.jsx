import { useState } from "react";
import { addPatient } from "../services/patient";
import {
  Camera,
  User,
  Calendar,
  Weight,
  Ruler,
  MapPin,
  Droplet,
  Save,
  X,
  Phone,
  Mail,
  Shield,
  ShieldCheck,
} from "lucide-react";
// import { useModal } from "./ModalContext";
import { CgPassword } from "react-icons/cg";
import { useModal } from "../Context/ModalContext";

function PatientForm() {
  const { isOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    date_naissance: "",
    email: "",
    telephone: "",
    poids: "",
    taille: "",
    adresse: "",
    ville: "",
    groupe_sanguin: "",
    photo: null,
    role: "patient",     // par défaut
    password: "",        // mot de passe
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const groupesSanguins = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, photo: file }));
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPatient(formData);  // ta fonction d'API doit gérer le FormData
      alert("Patient ajouté avec succès !");
      setFormData({
        nom: "",
        prenom: "",
        date_naissance: "",
        email: "",
        telephone: "",
        poids: "",
        taille: "",
        adresse: "",
        ville: "",
        groupe_sanguin: "",
        photo: null,
        role: "patient",
        password: "",
      });
      setPhotoPreview(null);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout du patient");
    }
  };


  if (!isOpen) return null;

  return (
    <div className="absolute top-1 left-1 right-1 z-40 flex items-center justify-center bg_color/30 backdrop-blur-xl p-4 ">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-white relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-4">
              <User className="w-12 h-12 mr-4" />
              <h1 className="text-4xl font-bold">Nouveau Patient</h1>
            </div>
            <p className="text-teal-100 text-lg">Ajouter un Nouveau patient</p>
          </div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          {/* Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-teal-200 overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Aperçu"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="w-12 h-12 text-teal-400" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-teal-600 hover:bg-teal-700 text-white rounded-full p-2 cursor-pointer transition-colors shadow-lg">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Champs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Nom */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <User className="w-4 h-4 mr-2 text-teal-600" />
                Nom *
              </label>
              <input
                type="text"
                name="name"
                value={formData.nom}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Entrez le nom"
              />
            </div>

            {/* Prénom */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <User className="w-4 h-4 mr-2 text-teal-600" />
                Prénom *
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                required
                className="w-full px-4 outline-none py-3 border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Entrez le prénom"
              />
            </div>

            {/* Date de naissance */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                Date de naissance *
              </label>
              <input
                type="date"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
              />
            </div>
            {/* Adresse mail */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Mail className="w-4 h-4 mr-2 text-teal-600" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Ex: exemple@gmail.com"
              />
            </div>
            {/*  Telephone */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Phone className="w-4 h-4 mr-2 text-teal-600" />
                Telephone*
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Ex: 6 00 00 00 00 "
             />
            </div>

            {/* Groupe sanguin */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Droplet className="w-4 h-4 mr-2 text-red-500" />
                Groupe sanguin *
              </label>
              <select
                name="groupe_sanguin"
                value={formData.groupe_sanguin}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
              >
                <option value="">Sélectionnez un groupe</option>
                {groupesSanguins.map((groupe) => (
                  <option key={groupe} value={groupe}>
                    {groupe}
                  </option>
                ))}
              </select>
            </div>

            {/* Poids */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Weight className="w-4 h-4 mr-2 text-teal-600" />
                Poids (kg)
              </label>
              <input
                type="number"
                name="poids"
                value={formData.poids}
                onChange={handleInputChange}
                step="0.1"
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Ex: 70.5"
              />
            </div>

            {/* Taille */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Ruler className="w-4 h-4 mr-2 text-teal-600" />
                Taille (cm)
              </label>
              <input
                type="number"
                name="taille"
                value={formData.taille}
                onChange={handleInputChange}
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Ex: 175"
              />
            </div>

            {/* adresse */}
            <div className="space-y-2 mb-8">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                Adresse
              </label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Entrez votre adresse"
              />
            </div>

            {/* Ville */}
            <div className="space-y-2 mb-8">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                Ville
              </label>
              <input
                type="text"
                name="ville"
                value={formData.ville}
                onChange={handleInputChange}
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Entrez la ville de résidence"
              />
            </div>
          </div>
          {/* password */}
            <div className="space-y-2 mb-8">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <CgPassword className="w-4 h-4 mr-2 text-teal-600" />
                Mot de passe *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
             {/* Roles */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <ShieldCheck className="w-4 h-4 mr-2 text-teal-600" />
                Role *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 outline-none border-2 border-teal-200 rounded-xl bg-white/50  focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
              >
                <option value="">Sélectionnez un role</option>
                  <option name="role">
                    Administrateur
                  </option>
                  <option name="role">
                    Medecin
                  </option>
                  <option name="role">
                    Patient
                  </option>
              </select>
            </div>

          {/* Boutons */}
          <div className="flex flex-col mt-8 sm:flex-row gap-4 justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-semibold"
            >
              <X className="w-5 h-5 mr-2" />
              Annuler
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              <Save className="w-5 h-5 mr-2" />
              Enregistrer le patient
            </button>
          </div>
        </form>

        {/* Note */}
        <div className="bg-white/60 backdrop-blur-sm text-center text-sm text-gray-600 p-4 border-t border-teal-100">
          <span className="text-red-500">*</span> Champs obligatoires
        </div>
      </div>
    </div>
  );
}

export default PatientForm;

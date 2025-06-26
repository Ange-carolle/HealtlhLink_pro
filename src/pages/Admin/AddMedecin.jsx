import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Stethoscope,
  GraduationCap,
  Building,
  Clock,
  Globe,
  Camera,
  Save,
  X,
  ArrowLeft,
  Star,
  Award,
  FileText,
  Shield,
  Heart,
} from "lucide-react";
import Layout from "../../partial/Layout";
import { addMedecin } from "../../services/Medecin";
import { useState } from "react";
import { CgPassword } from "react-icons/cg";

export default function AddMedecin() {
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    date_naissance: "",
    email: "",
    telephone: "",
    specialite: "",
    num_ordre: "",
    adresse: "",
    ville: "",
    hopital: "",
    photo: null,
    role: "Medecin",
    password: "",
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log("PHOTO SELECTIONNÉE :", file);
    setFormData((prev) => ({ ...prev, photo: file }));
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("formData à envoyer :", formData);
      await addMedecin(formData);
      alert("medecin ajouté avec succès !");
      setFormData({
        name: "",
        prenom: "",
        date_naissance: "",
        email: "",
        telephone: "",
        specialite: "",
        num_ordre: "",
        adresse: "",
        ville: "",
        hopital: "",
        photo: null,
        role: "Medecin",
        password: "",
      });
      setPhotoPreview(null);
      
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout du medecin");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header avec navigation */}
          <div className="flex items-center justify-between mb-8">
            <button className="flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à la liste
            </button>
            <div className="text-sm text-gray-500">
              Administration / Médecins / Nouveau
            </div>
          </div>

          {/* Titre principal */}
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Nouveau Médecin</h1>
                  <p className="text-teal-100 text-lg">
                    Ajouter un praticien au système
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
            <div className="absolute bottom-4 left-20 w-24 h-24 bg-white/5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Informations personnelles */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-teal-100 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Informations Personnelles
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <User className="w-4 h-4 mr-2 text-teal-600" />
                      Nom *
                    </label>
                    <input
                      name="name"
                      value={formData.nom}
                      onChange={handleInputChange}
                      type="text"
                      className="w-full px-4 text-red py-3 border-2 border-teal-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Nom de famille"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <User className="w-4 h-4 mr-2 text-teal-600" />
                      Prénom *
                    </label>
                    <input
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      type="text"
                      className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Prénom"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                      Date de naissance *
                    </label>
                    <input
                      name="date_naissance"
                      value={formData.date_naissance}
                      onChange={handleInputChange}
                      type="date"
                      className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <User className="w-4 h-4 mr-2 text-teal-600" />
                      Genre
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 bg-white/70 hover:bg-white/90">
                      <option value="">Sélectionner</option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-teal-100 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Contact & Localisation
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" />
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="email@hopital.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="6 24 25 65 36"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      Ville d'exercice *
                    </label>
                    <input
                      type="text"
                      name="ville"
                      value={formData.ville}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Nkongsamba, Douala, Bafang..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Building className="w-4 h-4 mr-2 text-blue-600" />
                      Établissement
                    </label>
                    <input
                      type="text"
                      name="hopital"
                      value={formData.hopital}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Hôpital, Clinique, Cabinet..."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center mt-6 text-sm font-semibold text-gray-700">
                    <CgPassword className="w-4 h-4 mr-2 text-blue-600" />
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                  />
                </div>
                <div className="mt-6">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    Adresse complète
                  </label>
                  <textarea
                    rows="3"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white/90 resize-none"
                    placeholder="Adresse complète du cabinet ou de l'établissement"
                  ></textarea>
                </div>
              </div>

              {/* Informations professionnelles */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-teal-100 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Informations Professionnelles
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Stethoscope className="w-4 h-4 mr-2 text-purple-600" />
                      Spécialité principale *
                    </label>
                    <select
                      name="specialite"
                      value={formData.specialite}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                    >
                      <option value="">Choisir une spécialité</option>
                      <option value="cardiologie">Cardiologie</option>
                      <option value="pediatrie">Pédiatrie</option>
                      <option value="orthopédie">Orthopédie</option>
                      <option value="dermatologie">Dermatologie</option>
                      <option value="neurologie">Neurologie</option>
                      <option value="chirurgie">Chirurgie générale</option>
                      <option value="medecine-generale">
                        Médecine générale
                      </option>
                      <option value="gynecologie">Gynécologie</option>
                      <option value="ophtalmologie">Ophtalmologie</option>
                      <option value="psychiatrie">Psychiatrie</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      Spécialités secondaires
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Séparées par des virgules"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Shield className="w-4 h-4 mr-2 text-purple-600" />
                      Numéro RPPS *
                    </label>
                    <input
                      type="text"
                      name="num_ordre"
                      value={formData.num_ordre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Numéro d'identification RPPS"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                      Années d'expérience
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Nombre d'années"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <GraduationCap className="w-4 h-4 mr-2 text-purple-600" />
                      Formation principale
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Université, École de médecine..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Globe className="w-4 h-4 mr-2 text-purple-600" />
                      Langues parlées
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white/90"
                      placeholder="Français, Anglais, Espagnol..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar droite */}
            <div className="space-y-6">
              {/* Photo de profil */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 shadow-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-teal-600" />
                  Photo de profil
                </h3>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl border-4 border-teal-200 overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center mb-4 group hover:border-teal-300 transition-colors duration-200">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Aperçu de la photo"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Camera className="w-12 h-12 text-teal-400 group-hover:text-teal-500 transition-colors duration-200" />
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      name="photo"
                      onChange={handlePhotoChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-4 py-2 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-center">
                      Choisir une photo
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Format JPG, PNG
                    <br />
                    Taille max: 2MB
                  </p>
                </div>
              </div>

              {/* Statut et permissions */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 shadow-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-teal-600" />
                  Statut & Permissions
                </h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">
                      Statut du compte
                    </label>
                    <select className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all duration-200 bg-white/70">
                      <option value="actif">Actif</option>
                      <option value="inactif">Inactif</option>
                      <option value="suspendu">Suspendu</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-600">
                      Administrateur
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 text-teal-600 border-2 border-teal-300 rounded focus:ring-2 focus:ring-teal-200"
                        />
                        <label className="text-sm text-gray-600">Medecin</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 text-teal-600 border-2 border-teal-300 rounded focus:ring-2 focus:ring-teal-200"
                        />
                        <label
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="text-sm text-gray-600"
                        >
                          Patient
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-teal-600 border-2 border-teal-300 rounded focus:ring-2 focus:ring-teal-200"
                        />
                        <label
                          className="text-sm text-gray-600"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                        >
                          Accès administrateur
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes additionnelles */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 shadow-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-teal-600" />
                  Notes & Commentaires
                </h3>

                <textarea
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 bg-white/70 hover:bg-white/90 resize-none"
                  placeholder="Notes administratives, commentaires particuliers, certifications spéciales..."
                ></textarea>
              </div>

              {/* Actions */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 shadow-xl">
                <div className="space-y-3">
                  <button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Enregistrer le médecin
                  </button>

                  <button className="w-full flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold">
                    <X className="w-5 h-5 mr-2" />
                    Annuler
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    <span className="text-red-500">*</span> Champs obligatoires
                    <br />
                    Les informations seront vérifiées avant validation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

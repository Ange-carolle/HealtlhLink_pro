import { useEffect, useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  MoreVertical,
  UserCheck,
  UserX,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Calendar,
  Users,
  Download,
  Upload,
  Settings,
} from "lucide-react";
import Layout from "../../partial/Layout";
import { getMedecin } from "../../services/Medecin";

export default function MedecinList() {
  // const [doctors, setDoctors] = useState([
  //   {
  //     id: 1,
  //     nom: "Ange",
  //     prenom: "Dr. Youka",
  //     email: "Youka.Ange@hopital.com",
  //     telephone: "6 54 25 65 36",
  //     specialite: "Cardiologie",
  //     ville: "Douala",
  //     statut: "actif",
  //     dateInscription: "2023-01-15",
  //     nombrePatients: 156,
  //     photo: null,
  //   },
  //   {
  //     id: 2,
  //     nom: "Youka",
  //     prenom: "Dr. Carolle",
  //     email: "Carolle.Youka@hopital.com",
  //     telephone: "6 52 45 48 71",
  //     specialite: "Pédiatrie",
  //     ville: "Nkongsamba",
  //     statut: "actif",
  //     dateInscription: "2023-02-20",
  //     nombrePatients: 89,
  //     photo: null,
  //   },
  //   {
  //     id: 3,
  //     nom: "Carolle",
  //     prenom: "Dr. Ange",
  //     email: "Ange.Carolle@hopital.com",
  //     telephone: "6 96 54 01 70",
  //     specialite: "Orthopédie",
  //     ville: "Yaounde",
  //     statut: "inactif",
  //     dateInscription: "2022-11-10",
  //     nombrePatients: 203,
  //     photo: null,
  //   },
  //   {
  //     id: 4,
  //     nom: "Youka",
  //     prenom: "Dr. Youka",
  //     email: "Youka.Youka@hopital.com",
  //     telephone: "6 51 04 75 39",
  //     specialite: "Dermatologie",
  //     ville: "Nkongsamba",
  //     statut: "actif",
  //     dateInscription: "2023-03-05",
  //     nombrePatients: 124,
  //     photo: null,
  //   },
  //   {
  //     id: 5,
  //     nom: "caro",
  //     prenom: "Dr. Angou",
  //     email: "Angou.caro@hopital.com",
  //     telephone: "6 52 45 48 71",
  //     specialite: "Neurologie",
  //     ville: "Bafang",
  //     statut: "actif",
  //     dateInscription: "2023-01-30",
  //     nombrePatients: 78,
  //     photo: null,
  //   },
  // ]);

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch patients from API or other source
    const fetchDoctors = async () => {
      const response = await getMedecin();
      setDoctors(response);
    };
    fetchDoctors();
    console.log(doctors);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [sortBy, setSortBy] = useState("nom");
  const [sortOrder, setSortOrder] = useState("asc");

  const specialties = [
    "Cardiologie",
    "Pédiatrie",
    "Orthopédie",
    "Dermatologie",
    "Neurologie",
    "Chirurgie",
    "Médecine générale",
  ];

  // Filtrage et tri
  const filteredDoctors = doctors
    .filter((doctor) => {
      const nom = doctor.user?.nom ?? "";
      const prenom = doctor.user?.prenom ?? "";
      const email = doctor.user?.email ?? "";

      const matchesSearch =
        nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpecialty =
        !filterSpecialty || doctor.specialite === filterSpecialty;

      const matchesStatus = !filterStatus || doctor.statut === filterStatus;
      return matchesSearch && matchesSpecialty && matchesStatus;
    })
    .sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      if (sortBy === "nombrePatients") {
        aVal = parseInt(aVal);
        bVal = parseInt(bVal);
      }
      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

  const handleSelectDoctor = (doctorId) => {
    setSelectedDoctors((prev) =>
      prev.includes(doctorId)
        ? prev.filter((id) => id !== doctorId)
        : [...prev, doctorId]
    );
  };

  const handleSelectAll = () => {
    if (selectedDoctors.length === filteredDoctors.length) {
      setSelectedDoctors([]);
    } else {
      setSelectedDoctors(filteredDoctors.map((doctor) => doctor.id));
    }
  };

  const handleStatusChange = (doctorId, newStatus) => {
    setDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === doctorId ? { ...doctor, statut: newStatus } : doctor
      )
    );
  };

  const handleDeleteDoctor = () => {};

  const handleBulkDelete = () => {
    setDoctors((prev) =>
      prev.filter((doctor) => !selectedDoctors.includes(doctor.id))
    );
    setSelectedDoctors([]);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const stats = {
    total: doctors.length,
    actifs: doctors.filter((d) => d.statut === "actif").length,
    inactifs: doctors.filter((d) => d.statut === "inactif").length,
    totalPatients: doctors.reduce((sum, d) => sum + d.nombrePatients, 0),
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    Gestion des Médecins
                  </h1>
                  <p className="text-teal-100 text-lg">
                    Administration et suivi des praticiens
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Stethoscope className="w-16 h-16 text-white/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-teal-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Médecins
                  </p>
                  <p className="text-3xl font-bold text-teal-600">
                    {stats.total}
                  </p>
                </div>
                <Users className="w-12 h-12 text-teal-400" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Médecins Actifs
                  </p>
                  <p className="text-3xl font-bold text-green-600">
                    {stats.actifs}
                  </p>
                </div>
                <UserCheck className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Médecins Inactifs
                  </p>
                  <p className="text-3xl font-bold text-red-600">
                    {stats.inactifs}
                  </p>
                </div>
                <UserX className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Patients
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    {stats.totalPatients}
                  </p>
                </div>
                <Calendar className="w-12 h-12 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-teal-100 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un médecin..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border-2 outline-none border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-white/50 w-80"
                  />
                </div>

                {/* Filters */}
                <select
                  value={filterSpecialty}
                  onChange={(e) => setFilterSpecialty(e.target.value)}
                  className="px-4 py-2 border-2 outline-none border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-white/50"
                >
                  <option value="">Toutes spécialités</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border-2 outline-none border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 bg-white/50"
                >
                  <option value="">Tous statuts</option>
                  <option value="actif">Actif</option>
                  <option value="inactif">Inactif</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {selectedDoctors.length > 0 && (
                  <button
                    onClick={handleBulkDelete}
                    className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Supprimer ({selectedDoctors.length})
                  </button>
                )}
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter Médecin
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-teal-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-teal-50 to-emerald-50 border-b border-teal-100">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        checked={
                          selectedDoctors.length === filteredDoctors.length &&
                          filteredDoctors.length > 0
                        }
                        onChange={handleSelectAll}
                        className="w-4 h-4 text-teal-600 border-2 border-teal-300 rounded focus:ring-2 focus:ring-teal-200"
                      />
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-teal-100 transition-colors"
                      onClick={() => handleSort("nom")}
                    >
                      Médecin{" "}
                      {sortBy === "nom" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Contact
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-teal-100 transition-colors"
                      onClick={() => handleSort("specialite")}
                    >
                      Spécialité{" "}
                      {sortBy === "specialite" &&
                        (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Ville
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Statut
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-teal-100 transition-colors"
                      onClick={() => handleSort("nombrePatients")}
                    >
                      Patients{" "}
                      {sortBy === "nombrePatients" &&
                        (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-100">
                  {filteredDoctors.map((doctor) => (
                    <tr
                      key={doctor.id}
                      className="hover:bg-teal-25 transition-colors duration-150"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedDoctors.includes(doctor.id)}
                          onChange={() => handleSelectDoctor(doctor.id)}
                          className="w-4 h-4 text-teal-600 border-2 border-teal-300 rounded focus:ring-2 focus:ring-teal-200"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                            {doctor.user?.prenom?.split(" ")[1]?.[0] ?? // 2e mot du prénom (ex: Ange Carolle -> C)
                              doctor.user?.prenom?.[0] ?? // ou 1re lettre du prénom
                              ""}
                            {doctor.user?.nom?.[0] ?? ""}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {doctor.user?.prenom} {doctor.user?.nom}
                            </div>
                            <div className="text-sm text-gray-500">
                              Inscrit le{" "}
                              {new Date(
                                doctor.dateInscription
                              ).toLocaleDateString("fr-FR")}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-900">
                            <Mail className="w-4 h-4 mr-2 text-gray-400" />
                            {doctor.user?.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                            {doctor.user?.telephone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {doctor.specialite}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-sm text-gray-900">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          {doctor.user?.ville}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() =>
                            handleStatusChange(
                              doctor.id,
                              doctor.statut === "actif" ? "inactif" : "actif"
                            )
                          }
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                            doctor.statut === "actif"
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-red-100 text-red-800 hover:bg-red-200"
                          }`}
                        >
                          {doctor.statut === "actif" ? (
                            <>
                              <UserCheck className="w-3 h-3 mr-1" />
                              Actif
                            </>
                          ) : (
                            <>
                              <UserX className="w-3 h-3 mr-1" />
                              Inactif
                            </>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-gray-900">
                          {doctor.nombrePatients}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedDoctor(doctor);
                              setShowEditModal(true);
                            }}
                            className="p-1 text-gray-400 hover:text-green-600 transition-colors duration-200"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedDoctor(doctor);
                              setShowDeleteModal(true);
                            }}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-700">
              Affichage de {filteredDoctors.length} médecin(s) sur{" "}
              {doctors.length}
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 text-sm border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                Précédent
              </button>
              <button className="px-3 py-2 text-sm bg-teal-600 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-2 text-sm border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                2
              </button>
              <button className="px-3 py-2 text-sm border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                Suivant
              </button>
            </div>
          </div>

          {/* Delete Confirmation Modal */}
          {showDeleteModal && selectedDoctor && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Confirmer la suppression
                </h3>
                <p className="text-gray-600 mb-6">
                  Êtes-vous sûr de vouloir supprimer le médecin{" "}
                  {selectedDoctor.prenom} {selectedDoctor.nom} ? Cette action
                  est irréversible.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowDeleteModal(false);
                      setSelectedDoctor(null);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={() => handleDeleteDoctor()}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

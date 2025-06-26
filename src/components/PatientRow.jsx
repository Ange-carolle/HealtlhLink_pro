import {
  Edit,
  Eye,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  UserCheck,
} from "lucide-react";
import React from "react";

function PatientRow(props) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white font-medium">
            {props.pseudo}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{props.nom}</div>
            <div className="text-sm text-gray-500">ID: {props.id}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 flex items-center">
          <Phone className="h-4 w-4 mr-2 text-gray-400" />
          {props.number}
        </div>
        <div className="text-sm text-gray-500 flex items-center mt-1">
          <Mail className="h-4 w-4 mr-2 text-gray-400" />
          {props.email}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{props.age} ans</div>
        <div className="text-sm text-gray-500">Née le {props.date_nais}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
          {props.adresse}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{props.date}</div>
        <div className="text-sm text-gray-500">{props.type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
          <UserCheck className="h-3 w-3 mr-1" />
          Actif
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-2">
          <button className="text-teal-600 hover:text-teal-900 p-1 rounded transition-colors">
            <Eye className="h-4 w-4" />
          </button>
          <button className="text-blue-600 hover:text-blue-900 p-1 rounded transition-colors">
            <Edit className="h-4 w-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-900 p-1 rounded transition-colors">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default PatientRow;

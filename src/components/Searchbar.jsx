import React from "react";
import { FiSearch } from "react-icons/fi";

function Searchbar({ options = [], onSearch, onFilterChange }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-4  p-4 rounded-2xl w-full md:max-w-2xl">
        {/* Dropdown */}
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-xl bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500"
        >
          <option value="">Filtrer par...</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Barre de recherche avec icône */}
        <div className="relative w-full md:flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Recherche..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-xl bg-gray-50 text-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-green-500 border-green-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;

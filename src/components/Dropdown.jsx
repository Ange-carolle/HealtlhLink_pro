import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Dropdown({dropelement, title}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le dropdown si on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex w-full  px-10 py-2 text-sm font-medium text-gray-700 "
        >
         {title}
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="">
          <div className="py-1">
            {dropelement.map((item) => {
              return (
                <Link
                  to={item.url}
                  className={`${window.location.pathname===item.url?"bg_hover_menu text-white":""} hover:bg-gray-400 block px-10 py-4 text-sm `}
                >
                  {item.text}
                </Link>
              );
            })}
     
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

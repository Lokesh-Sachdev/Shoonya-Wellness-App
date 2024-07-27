import React from "react";

const Pagination = ({ perPage, total, paginate, currentPage }) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

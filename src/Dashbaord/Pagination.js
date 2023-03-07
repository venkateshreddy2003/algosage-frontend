import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div class="mb-10 flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="list-style-none flex">
          <li className="page-item">
            <a
              className="pointer-events-none relative block rounded bg-transparent py-3 px-5 text-lg text-neutral-500 transition-all duration-300 dark:text-neutral-400"
              onClick={prevPage}
              href="#"
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPage == pgNumber ? "active" : ""
              } `}
            >
              <a
                onClick={() => setCurrentPage(pgNumber)}
                className="relative block rounded bg-transparent py-3 px-5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                {pgNumber}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="relative block rounded bg-transparent py-3 px-5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              onClick={nextPage}
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

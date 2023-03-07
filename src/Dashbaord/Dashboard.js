import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Records from "./Records";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  useEffect(() => {
    axios
      .post(
        `https://gateway.credmark.com/v1/model/run#uniswap-v3.lp`,
        {
          slug: "uniswap-v3.lp",
          chainId: 1,
          blockNumber: "latest",
          input: {
            lp: "0x6c86b9442246ff449eb67b969c4fa51f43253858",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer caprod_nXhAos8a1cBVK3Z_UgcWnuXtYmB5d32kxJ5_vo4Z6Mq3ENeq3rCDNdvhqoKhAAbC",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data.output.positions);
      });
  }, []);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  return (
    <>
      {loading && (
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          fill="nones"
          xmlns="http://www.w3.org/2000/svg"
          className="flex justify-center"
        >
          <path
            opacity="0.2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#000000"
          />
          <path
            d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
            fill="#000000"
          />
        </svg>
      )}
      {!loading && (
        <div className="container mt-5">
          <Records data={currentRecords} />
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
      {!data && (
        <div className="flex items-center justify-center h-screen text-green-500 font-medium">
          No Data
        </div>
      )}
    </>
  );
};

export default Dashboard;

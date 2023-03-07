import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const Landing = () => {
  const [haveMetamask, setMetamask] = useState(true);
  const [connected, setConnection] = useState(false);
  useEffect(() => {
    async function c() {
      if (window.ethereum) {
        // Do something
        console.log("ok");
        if (localStorage.getItem("address")) {
          setConnection(true);
        }
      } else {
        setMetamask(false);
        console.log("not ok");
      }
    }
    c();
  }, []);

  const handler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        // Return the address of the wallet
        console.log(res);
        //  setConnection
        setConnection(true);
        localStorage.setItem("address", "" + res);
        window.location.href = "/dashboard";
      });
    } else {
      setMetamask(false);

      //  alert("install metamask extension!!");
    }
  };
  return (
    <>
      {haveMetamask ? (
        <>
          {connected && (
            <h4 className="bg-green-600 font-medium flex items-center justify-center text-black">
              connected to {localStorage.getItem("address")}
            </h4>
          )}

          <div className="flex items-center justify-center h-screen">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handler}
            >
              Connect to metamask wallet
            </button>
          </div>
        </>
      ) : (
        <>
          <div class="flex items-center justify-center h-screen">
            <button
              type="button"
              class="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled
            >
              Connect to metamask wallet
            </button>
            <h6 className="text-red-500">
              {" "}
              your browser does not have metamask
            </h6>
          </div>
        </>
      )}
    </>
  );
};

export default Landing;

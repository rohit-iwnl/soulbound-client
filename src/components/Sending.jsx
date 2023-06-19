import React from "react";
import { useContext } from "react";
import { TransactionContext } from "@/context/TransactionContext";
import Link from "next/link";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
  />
);

function Sending() {
  const {
    connectWallet,
    connectCounter,
    formData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo } = formData;
    const ipfsdata = "https://ipfs.io/ipfs/" + addressTo;

    e.preventDefault();

    if (!addressTo) return;

    sendTransaction();
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center snap-center bg-[#121212]">
      <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
        <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
              Authentiate{" "}
              <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
                Student
              </span>{" "}
              Wallets
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
              Paste the student wallet in the textfield to the right. 
              Please check the wallet address before clicking send now. 
              This action is not reversible
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
          <form>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <Input
                placeholder="Address of Student"
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Link
                onClick={handleSubmit}
                href="#features"
                className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Send now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sending;

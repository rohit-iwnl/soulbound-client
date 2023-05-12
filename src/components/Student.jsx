import React, { useContext } from "react";
import { TransactionContext } from "@/context/TransactionContext";
import Link from "next/link";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

export default function Student() {
  const {
    connectWallet,
    connectCounter,
    formData,
    handleChange,
    handleStudent,
    sendTransaction,
    studentData,
    setStudentData,
    claimDegree,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { jsonURI, addressFrom } = studentData;

    e.preventDefault();

    if (!jsonURI || !addressFrom) return;

    claimDegree();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center snap-center bg-[#121212]">
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center">
        <Input
          placeholder="Content Identifier Code"
          name="jsonURI"
          type="text"
          handleChange={handleStudent}
        />
        <Input
          placeholder="Address of Student"
          name="addressFrom"
          type="text"
          handleChange={handleStudent}
        />
      </div>
      <div>
        <Link
          onClick={handleSubmit}
          href="#"
          className="text-white border border-red-300 p-8 rounded-xl flex"
        >
          Claim Degree
        </Link>
      </div>
    </div>
  );
}

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

export default function Features() {
  const { connectWallet, connectCounter, formData, handleChange, sendTransaction } =
    useContext(TransactionContext);

  const handleSubmit =(e) =>{
    const {addressTo,message,keyword} = formData;

    e.preventDefault();

    if(!addressTo || !message || !keyword)return;

    sendTransaction();

    };

  return (
    <div className="h-screen flex flex-col justify-center items-center snap-center bg-[#121212]">
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center">
        <Input
          placeholder="Address of Student"
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
      </div>
      <div>
        <Link onClick={handleSubmit} href="#features" className="text-white border border-red-400 rounded-2xl p-8">Send now</Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import {Skull} from 'lucide-react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ChevronsDown } from "lucide-react";
import { TransactionContext } from "@/context/TransactionContext";

type Props = {};

export default function Hero({}: Props) {
  const { connectWallet,currentAccount } = useContext(TransactionContext);

  const [text, count] = useTypewriter({
    words: [
      "Secure",
      "Faster",
      "Low Fees ",
      "Efficient",
      "Solana",
      "Blockchain",
      "Just let us do it",
    ],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 100,
  });

  return (
        <div className="hero h-screen flex flex-col justify-center text-white snap-center p-8 pt-20">
        {/* Top Div */}
        <div>
          <span className="text-5xl md:text-9xl font-extrabold">
            Redefining the way your identity is built
          </span>
          <div className="text-4xl font-bold pt-12 md:pt-20 md:text-6xl">
            <span>{text}</span>
            <Cursor cursorBlinking cursorColor="#F7AB0A" />
          </div>
        </div>
        {/* Bottom div */}
        <div className="pt-16 space-y-20 md:space-y-24 md:pt-20">
          {/* Types of Docs */}

          <div className="font-semibold text-lg md:text-xl md:text-gray-50">
            <span>
              University Degree // Course Certificates // Medical Reports //
              Government Documents
            </span>
          </div>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <Skull className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          {/* Medium above view  */}

          {/* Explore Now */}
          <div className="flex items-center justify-center bottom-2">
            {/* Explore button */}
            <div className="flex-row flex  bg-[#121212] rounded-3xl font-bold text-xl p-4 items-center justify-center">
              <Link href="#features">Sell your soul</Link>
              <ChevronsDown />
            </div>
          </div>
        </div>
      </div>
  );
}

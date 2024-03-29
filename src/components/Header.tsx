import { Skull } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BrowserView, isMobile, MobileView } from "react-device-detect";
import { useContext } from "react";
import { TransactionContext } from "@/context/TransactionContext";

type Props = {};

export default function Header({}: Props) {
  const { currentAccount, connectWallet, connectCounter } =
    useContext(TransactionContext);

    const check='test';

  return (
    <motion.div
      initial={{
        y: -200,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="w-11/12 sm:w-5/6 text-white flex justify-between items-center py-8 px-3 sm:p-8 mx-auto h-10 backdrop-blur-lg sticky top-5 border border-red-400 glassmorphism z-20"
    >
      {/* Logo */}
      <div className="flex cursor-pointer items-center justify-center space-x-1">
        <Link href="/#hero" scroll={false}>
          <Skull color="white" height={36} width={36} />
        </Link>
        <Link href="#hero" className="hidden sm:block">
          <span className="text-sm md:text-sm lg:text-lg font-bold ">
            Soul Bound
          </span>
        </Link>
      </div>

      {/* Nav buttons */}
      <div>
        <ul className="hidden list-none font-medium md:flex space-x-6 md:space-x-3">
          <Link
            href="#feat"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#7d7d7d] to-[#4e4e4e]"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#7d7d7d] to-[#4e4e4e]"
          >
            About us
          </Link>
          <Link
            href="#send"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#7d7d7d] to-[#4e4e4e]"
          >
            Send
          </Link>
          <Link
            href="#claim"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#7d7d7d] to-[#4e4e4e]"
          >
            Claim
          </Link>
        </ul>
      </div>

      {/* Login */}
        <div className="overflow-clip">
          <Link href="#signup" onClick={connectWallet}>
            {connectCounter == 0 && (
              <div className="rounded-xl bg-[#6648fc] font-bold py-2 px-3">
                Connect Wallet
              </div>
            )}
            {connectCounter != 0 && (
              <div className="rounded-xl bg-[#6648fc] font-bold py-2 px-3 w-">
                <p className="overflow-ellipsis">{currentAccount}</p>
              </div>
            )}
          </Link>
        </div>
    </motion.div>
  );
}

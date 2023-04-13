import { Skull } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BrowserView, isMobile, MobileView } from "react-device-detect";

type Props = {};

export default function Header({}: Props) {
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
      <div className="flex items-center justify-center space-x-1">
        <Skull color="white" height={36} width={36} />
        <Link href="#h" className="hidden sm:block">
          <span className="text-sm md:text-sm lg:text-lg font-bold ">
            Sell Your Soul
          </span>
        </Link>
      </div>

      {/* Nav buttons */}
      <div>
        <ul className="hidden list-none font-medium md:flex space-x-6 md:space-x-3">
          <Link
            href="#features"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#f77d8b] to-[#6648FC]"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#F77D8B] to-[#6648FC]"
          >
            Pricing
          </Link>
          <Link
            href="#institutions"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#F77D8B] to-[#6648FC]"
          >
            Institutions
          </Link>
          <Link
            href="#about"
            className="hover:font-bold rounded-full hover:px-4 hover:transition duration-200 hover:bg-gradient-to-r from-[#F77D8B] to-[#6648FC]"
          >
            About Us
          </Link>
        </ul>
      </div>

      {/* Login */}
      <div>
        <Link href="#signup">
          <MobileView>
            <div className="rounded-xl bg-[#6648fc] font-bold py-2 px-3 block sm:hidden">
              Login
            </div>
          </MobileView>
          <BrowserView>
            <div className="rounded-xl bg-[#6648fc] font-bold py-2 px-3">
              Connect Wallet
            </div>
          </BrowserView>
        </Link>
      </div>
    </motion.div>
  );
}
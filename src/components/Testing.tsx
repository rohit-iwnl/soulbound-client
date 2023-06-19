import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Testing({}: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center snap-center bg-[#121212]">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          explore our <br /> features
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>{" "}
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Security
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Soulbound tokens can allow for greater security with regards to
                user verification. Identity attacks can be reduced by soulbound
                tokens that verify unique users are who they claim to be,
                eliminating the risk of fake users and imposters.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-fast-forward"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.804 8 1 4.633v6.734L6.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                  <path d="M14.804 8 9 4.633v6.734L14.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Super Fast
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                The transactions are very fast with the network we use that is
                Polygon. Lower fees
                <br />
                Faster Transactions
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Decentralized
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
          IPFS platform allows us to truly decentralise all the assets used in this contract and the project including images on the contract and the metadata required for the deployment
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Identity
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Unlike NFTs which hold a monetary value, these tokens do not have as it solely based on identification and each identity is unique.
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="hidden lg:flex lg:w-1/2 lg:justify-center"
          >
            <img
              className="w-[34rem] h-[28rem] flex-shrink-0 object-cover xl:w-[46rem] xl:h-[42rem] rounded-xl"
src="https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80"            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

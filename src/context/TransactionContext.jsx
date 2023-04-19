import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const getEthereumContract = () => {
  console.log("test inside")
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,transactionContract
  })
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [connectCounter, setConnectCounter] = useState(0);
  const [formData,setFormData] = useState({addressTo:'' , message:'', keyword:''});

  const handleChange = (e,name) =>{
    setFormData((prevState) => ({...prevState,[name]:e.target.value}));
  }


    // Initial Startup function
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts);
    if (currentAccount == null) {
      setCurrentAccount(accounts[0]);
    }

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
      // getALLTransactions;
    } else {
      console.log("No accounts");
    }
  };

//   Custom Connect Button
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      if (currentAccount) {
        if (connectCounter == 0) {
          setConnectCounter(connectCounter + 1);
          return alert("Wallet Connected");
        } else if (connectCounter >= 1) {
          getEthereumContract();
          console.log("test outside")
          setConnectCounter(connectCounter + 1);
          return alert("Wallet already connected");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendTransaction = async () =>{
    try {
      if(!ethereum) return alert("Please install metamask");
      const {addressTo,message,keyword} = formData;
      const transactionContract = getEthereumContract();

      await ethereum.request({
        method:'eth_sendTransaction',
        params:[{
          from:currentAccount,
          to:addressTo,
          gas:'0x5208',
        }]
      });

      const transactionHash = await transactionContract.issueDegree(addressTo);
      console.log("Sending")
      await transactionHash.wait();
      console.log(`Vetri - ${transactionHash.hash}`);

    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object found");
    }
  }

//   Startup
  useEffect(() => {
    checkIfWalletIsConnected();
    // onInit();
  }, []);


//   Return fuction and passing all values
  return (
    <TransactionContext.Provider
      value={{ connectWallet, connectCounter, currentAccount,formData,setFormData,handleChange,sendTransaction}}
    >
      {children}
    </TransactionContext.Provider>
  );
};

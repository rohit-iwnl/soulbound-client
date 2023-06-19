import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );


  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [connectCounter, setConnectCounter] = useState(0);
  const [formData,setFormData] = useState({addressTo:''});

  const [studentData,setStudentData] = useState({jsonURI:'',addressFrom:''});

  const handleChange = (e,name) =>{
    setFormData((prevState) => ({...prevState,[name]:e.target.value}));
  }

  const handleStudent = (e,name) =>{
    setStudentData((prevState) => ({...prevState,[name]:e.target.value}));
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
      const {addressTo} = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther("0")

      await ethereum.request({
        method:'eth_sendTransaction',
        params:[{
          from:currentAccount,
          to:contractAddress,
          gas:'0x186A0',
          value: parsedAmount._hex,
        }]
      });

      const transactionHash = await transactionContract.issueDegree(addressTo);
      await transactionHash.wait();

    } catch (error) {
      console.log(error);
    }
  }

  const claimDegree = async () =>{
    try {
      if(!ethereum) return alert("Please install metamask");
      const {jsonURI} = studentData;
      const ipfsdata = "https://ipfs.io/ipfs/"+jsonURI;
      const transactionContract = getEthereumContract();

      await ethereum.request({
        method:'eth_sendTransaction',
        params:[{
          from:currentAccount,
          to:contractAddress,
          gas:'0x5208',
        }]
      });

      const transactionHash = await transactionContract.claimDegree(ipfsdata);
      await transactionHash.wait();

    } catch (error) {
      console.log(error);
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
      value={{ connectWallet, connectCounter, currentAccount,formData,setFormData,handleChange,handleStudent,sendTransaction,claimDegree,studentData,setStudentData}}
    >
      {children}
    </TransactionContext.Provider>
  );
};

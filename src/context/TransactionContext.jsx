import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import { AlertTriangle } from "lucide-react";
import { connected } from "process";

export const TransactionContext = React.createContext();

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [connectCounter, setConnectCounter] = useState(0);

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts);
    if (currentAccount == null) {
      setCurrentAccount(accounts[0]);
      console.log("After Setting : " + currentAccount);
    }

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
      console.log("Current Account from startup: " + currentAccount);
      console.log("Accounts from startup: " + accounts);
      // getALLTransactions;
    } else {
      console.log("No accounts");
    }
  };

  const connectWallet = async () => {
    try {
        console.log(connectCounter);
      await window.ethereum.enable();
      if (!ethereum) return alert("Please install metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      if (currentAccount) {
        console.log(currentAccount);
        if (connectCounter == 0) {
            setConnectCounter(connectCounter+1);
          return alert("Wallet Connected");
        }
        else if(connectCounter>=1){
            setConnectCounter(connectCounter+1);
            return alert("Wallet already connected")
        }
      }
      console.log("Hitting");
      console.log(accounts);
      console.log("Current Account:" + currentAccount);
    } catch (error) {
      console.log(error);
    }
  };

  async function onInit() {
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log(account);
    window.ethereum.on("accountsChanged", function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0]);
    });
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    // onInit();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet,connectCounter,currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};

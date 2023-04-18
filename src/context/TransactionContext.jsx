import React,{useEffect,useState} from 'react';
import {ethers} from 'ethers';

import{contractABI,contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();


const getEthereumContract =() => {
    const provider =new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);

}

export const TransactionProvider = ({children}) =>{
    const [currentAccount,setCurrentAccount] = useState();

    const checkIfWalletIsConnected = async () =>{
        const {ethereum} = window   
        if(!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({method:'eth_accounts'});

        if(accounts.length!=0){
            setCurrentAccount(accounts[0]);
            console.log(currentAccount)
            // getALLTransactions;
        }else{
            console.log("No accounts")
        }
    }


    const connectWallet = async () =>{
        try {
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method:'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            window.location.reload();
            console.log("Hitting")
            console.log(accounts)
            console.log(currentAccount)

        } catch (error) {
            console.log(error);        }
    }


    useEffect(() => {
        // const {ethereum} = window   
        checkIfWalletIsConnected();
    },[]);

    return(
        <TransactionContext.Provider value={{connectWallet}}>
            {children}
        </TransactionContext.Provider>
    )
}

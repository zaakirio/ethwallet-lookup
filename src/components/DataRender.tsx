import React, { useRef, useCallback } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './DataRender.css';

export const DataRender: React.FC = () => {
const [wallet, setWallet] = useState('');
const inputRef = React.useRef<HTMLInputElement>(null);
    
    const updateWallet = () => {
        if(!inputRef.current){
            setWallet("Invalid wallet format try 0x...");
        }
        else if((inputRef.current.value.length >= 40 && inputRef.current?.value.length <= 42)){
            getWalletData(inputRef.current.value);
        }else{
            setWallet("Invalid wallet format try 0x...");
        }
      }

    const getWalletData = useCallback(async (walletAddress: string) => {
        try {
            const response = await axios.get(
                `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`
            );
            const data = (response.data.result / 1000000000000000000).toString();
            setWallet(data)
        } catch (error) {
            return 0;
        }
    }, []);


    return (
            <div className='header'>
                <h1>Ethereum Wallet Lookup</h1>
                <input ref={inputRef}/>
      <button onClick={updateWallet}>Click</button>
      <h4>{wallet ? wallet : ""}</h4>
      </div>
    );
};
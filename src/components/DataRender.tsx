import React, { useRef, useCallback } from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
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

    const bookMarkWallet = (walletAddress: string) => {
        // 
        // Check if user is logged in, if not logged in offer registration/sign in modal - allow sign in via github/google
        // 
        // Create mongodb entry
    }
    //  
    // get connection to mongo db
    // verify login
    // create search history of wallets
    // bookmarks + history
    // 


    return (
            <div className='header'>
                <Typography className='title' fontSize={30}>Ethereum Wallet Lookup</Typography>
                <Input className='input-style' inputRef={inputRef}/>
      <Button className='button-style' onClick={updateWallet}>Enter</Button>
      <Typography className='output' fontSize={20}>{wallet ? wallet + " ETH" : ""}</Typography>
      <Star
      </div>
    );
};
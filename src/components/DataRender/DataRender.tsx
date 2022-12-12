import React, { useRef, useCallback } from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import axios from "axios";
import "./DataRender.css";
import Wallet from "../../types/Wallet";
import LoginDialog from "../LoginDialog/LoginDialog";
import { getWalletData } from "../../services/api/walletData";
export function DataRender() {
  const [wallet, setWallet] = useState<Wallet>();
  const [error, setError] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateWallet = () => {
    if (!inputRef.current) {
      setError("Please enter a valid wallet address");
    } else if (inputRef.current.value.length >= 40 &&
      inputRef.current?.value.length <= 42) {
      getWalletData(inputRef.current.value);
    } else {
      setError("Please enter a valid wallet address");
    }
  };


  return (
    <div className="header">
      <Typography className="title" fontSize={30}>
        Ethereum Wallet Lookup
      </Typography>
      <Input className="input-style" inputRef={inputRef} />
      <Button className="button-style" onClick={updateWallet}>
        Enter
      </Button>
      {wallet ? (
        <>
          <Typography className="output" fontSize={20}>
            {wallet.balance + " ETH"}
          </Typography>
<LoginDialog/>
        </>
      ) : (
        <Typography className="output" fontSize={17}>
          {error}
        </Typography>
      )}
    </div>
  );
};

import React, { useRef, useCallback } from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import RadarIcon from "@mui/icons-material/Radar";
import axios from "axios";
import "./DataRender.css";
import { IconButton, Tooltip } from "@mui/material";

export const DataRender: React.FC = () => {
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateWallet = () => {
    if (!inputRef.current) {
      setError("Please enter a valid wallet address");
    } else if (
      inputRef.current.value.length >= 40 &&
      inputRef.current?.value.length <= 42
    ) {
      getWalletData(inputRef.current.value);
    } else {
      setError("Please enter a valid wallet address");
    }
  };

  const getWalletData = useCallback(async (walletAddress: string) => {
    try {
      const response = await axios.get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = (response.data.result / 1000000000000000000).toString();
      setWallet(data);
    } catch (error) {
      return 0;
    }
  }, []);

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
            {wallet + " ETH"}
          </Typography>
          <Tooltip title="Add wallet to watchlist">
            <IconButton>
              <RadarIcon />{" "}
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Typography className="output" fontSize={17}>
          {error}
        </Typography>
      )}
    </div>
  );
};

import React, { useRef, useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Searchbar.css";
import Wallet from "../../types/Wallet";
import LoginDialog from "../LoginDialog/LoginDialog";
import { getWalletData } from "../../services/api/walletData";
import { Content } from "antd/es/layout/layout";
import { SendOutlined, ThunderboltOutlined } from "@ant-design/icons";
import SearchBar from '@mkyy/mui-search-bar';
import Grid from "@mui/material/Grid";


export const Searchbar = () => {
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
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>
      <SearchBar width="400px"
      ></SearchBar>
      </Grid>
  );
};

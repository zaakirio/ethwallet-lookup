import React, { useRef, useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./DataRender.css";
import Wallet from "../../types/Wallet";
import LoginDialog from "../LoginDialog/LoginDialog";
import { getWalletData } from "../../services/api/walletData";
import { Grid, Input, Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { SendOutlined, ThunderboltOutlined } from "@ant-design/icons";

const { Search } = Input;

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
    <Layout style={{display: 'flex', alignItems:'center' , height:'100%' ,background:"white" }}>
      <Content style={{maxHeight: '100%', width:'50%'}}>
      <Typography.Title>
        EthLookup
      </Typography.Title>

      <Search placeholder="input search text" allowClear={true} enterButton={<SendOutlined />} size="large" loading />
      {/* {wallet ? (
        <>
          <Typography className="output">
            {wallet.balance + " ETH"}
          </Typography>
          <LoginDialog />
        </>
      ) : (
        <Typography className="output">
          {error}
        </Typography>
      )} */}
            </Content>
    </Layout>
  );
};

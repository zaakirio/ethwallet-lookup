import React, { useEffect, useState } from "react";
import "./DataCard.css";
import {
  AntDesignOutlined,
  ApartmentOutlined,
  NodeIndexOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CardInfo from "../../types/CardInfo";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Box, Card } from "@mui/material";
// import { WalletData } from '../../services/api/walletData';
import axios from "axios";
import { getEthPrice } from "../../services/api/getEthPrice";

const DataCard: React.FC = () => {
  const [wallet, setWallet] = useState<string>();
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    async function fetchData() {
      const data = await getEthPrice();
      setPrice(data);
    }
    fetchData();
  }, []);

  return (
    <><Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Card className="card-container" style={{ boxShadow: "13px 10px black" }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Current price
              <div className="title">{price}</div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>Daily Average</div>
              <div style={{ fontSize: "17px" }}>24%+ 15%-</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-container" style={{ boxShadow: "13px 10px black" }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Marketcap Distribution
              <div className="title">Binance: x</div>
              <div className="title">Coinbase: x</div>
              <div className="title">Eth Foundation: x</div>
            </Grid>
            <Grid item>
              <div style={{ fontSize: "17px" }}>Daily average</div>
              <div style={{ fontSize: "17px" }}>-25% +1%</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-container" style={{ boxShadow: "13px 10px black" }}>
        <CardContent>
          {/* https://docs.alchemy.com/reference/sdk-getgasprice */}
          <Grid container>
            <Grid item xs>
              Gas Fees
              <div className="title">500 wei</div>
            </Grid>
            <Grid item>
              <div style={{ fontSize: "17px" }}>Daily average</div>
              <div style={{ fontSize: "17px" }}>-25% +1%</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-container" style={{ boxShadow: "13px 10px black" }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Staking Rates
              <div className="title">0.01ETH APY</div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>Monthly average</div>
              <div style={{ fontSize: "17px" }}>-25% +1%</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
      <Grid className="table-container" style={{boxShadow: "13px 10px black"}}>
        hello
      </Grid></>
  );
};

export default DataCard;

import React from 'react';
import './DataCard.css'
import { AntDesignOutlined, ApartmentOutlined, NodeIndexOutlined, UserOutlined } from '@ant-design/icons';
import CardInfo from '../../types/CardInfo';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Box, Card } from '@mui/material';



const DataCard: React.FC = () => {

  return (
    <Grid
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
              <div className="title">
                $2,500
              </div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Daily Average
              </div>
              <div style={{ fontSize: "17px" }}>
                24%+ 15%-
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card><Card className="card-container" style={{ boxShadow: "13px 10px black" }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Marketcap Distribution
              <div className="title">
                Binance: x
              </div>
                            <div className="title">
                Coinbase: x
              </div>
                            <div className="title">
                Eth Foundation: x
              </div>
              
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Daily average
              </div>
              <div style={{ fontSize: "17px" }}>
                -25% +1%
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-container" style={{ boxShadow: "13px 10px black" }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Gas Fees
              <div className="title">
                500 wei
              </div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Daily average
              </div>
              <div style={{ fontSize: "17px" }}>
                -25% +1%
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-container" style={{ boxShadow: "13px 10px black" }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Staking Rates
              <div className="title">
                0.01ETH APY
              </div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Monthly average
              </div>
              <div style={{ fontSize: "17px" }}>
                -25% +1%
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default DataCard;
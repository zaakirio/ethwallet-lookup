import React from 'react';
import './DataCard.css'
import { AntDesignOutlined, ApartmentOutlined, NodeIndexOutlined, UserOutlined } from '@ant-design/icons';
import CardInfo from '../../types/CardInfo';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Box, Card } from '@mui/material';



const DataCard: React.FC = () => {

  return (
    <Grid container spacing={0}>
      <Card className="card-container" style={{ boxShadow: "13px 10px black" }} sx={{
      }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Title 1
              <div className="title">
                Price
              </div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Track Progress
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card><Card className="card-container" style={{ boxShadow: "13px 10px black" }} sx={{
        root: {
          maxWidth: 310,
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
      }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Title 1
              <div className="title">
                Price
              </div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Track Progress
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card><Card className="card-container" style={{ boxShadow: "13px 10px black" }} sx={{
        root: {
          maxWidth: 310,
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
      }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Title 1
              <div className="title">
                Price
              </div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Track Progress
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card><Card className="card-container" style={{ boxShadow: "13px 10px black" }} sx={{
        root: {
          maxWidth: 310,
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
      }}>
        <CardContent>
          <Grid container>
            <Grid item xs>
              Title 1
              <div className="title">
                Price
              </div>
            </Grid>

            <Grid item>
              <div style={{ fontSize: "17px" }}>
                Track Progress
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card></Grid>

  )
}

export default DataCard;
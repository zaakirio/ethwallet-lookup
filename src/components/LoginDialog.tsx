import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { GoogleLogin } from "@react-oauth/google";
import { Tooltip, IconButton } from "@mui/material";
import RadarIcon from "@mui/icons-material/Radar";
import "./LoginDialog.css";
export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);
  const [logged, setLogged] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogged = () => {
    setOpen(false);
    setLogged(true);
  }


  const walletList = () => {

  }



  return (
    <>
   {/* Only open log in dialogue if not signed in, otherwise open wallet bookmark list*/}
      <Tooltip title="Add wallet to watchlist">
        <IconButton onClick={!logged ? handleClickOpen : handleClose}>
          <RadarIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#d6dbe4",
          },
        }}
      >
        <DialogTitle>Sign in</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please sign in to view wallet watchlist
          </DialogContentText>
      </DialogContent>
        <DialogActions>
          <GoogleLogin
            onSuccess={handleLogged}
            useOneTap
          />
        </DialogActions>
      </Dialog>
    </>
    
  );
}

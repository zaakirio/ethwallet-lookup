import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Add wallet to watchlist">
        <IconButton onClick={handleClickOpen}>
          <RadarIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#d6dbe4',
          },
        }}
      >
        <DialogTitle>Sign in</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please sign in to view wallet watchlist
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          {/* <GoogleLogin
onSuccess={credentialResponse => {
  console.log(credentialResponse);
}}
onError={() => {
  console.log('Login Failed');
}}
useOneTap
/>; */}
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

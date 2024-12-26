/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function DialogAccept({
  // eslint-disable-next-line react/prop-types
  open,
  handleClose,
  title,
  handleAccept,
}) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {title}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={handleAccept}>Đồng ý</Button>
      </DialogActions>
    </Dialog>
  );
}

import { Dialog, DialogTitle } from "@mui/material";
import { FC } from "react";

interface IInfoDialog {
  open: boolean;
  handleClose: () => void;
}

const InfoDialog: FC<IInfoDialog> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Price info</DialogTitle>
    </Dialog>
  );
};

export default InfoDialog;

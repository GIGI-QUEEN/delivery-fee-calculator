import { Dialog, DialogTitle, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { formatDeliveryPriceKey } from "../utils/formatting";
import { euroSign } from "../constants/constants";

interface IInfoDialog {
  open: boolean;
  handleClose: () => void;
  deliveryPrice: DeliveryPrice;
}

const InfoDialog: FC<IInfoDialog> = ({ open, handleClose, deliveryPrice }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Total price: {deliveryPrice.totalPrice}
        {euroSign}
      </DialogTitle>
      <List>
        {Object.entries(deliveryPrice).map(([key, value]) => {
          if (key === "totalPrice") return;
          const formattedKey = formatDeliveryPriceKey(key);
          return (
            <ListItem key={key}>
              <Typography>{`${formattedKey}: ${value}${euroSign}`}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
};

export default InfoDialog;

import {
  Box,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Typography,
} from "@mui/material";
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
      {deliveryPrice.isDeliveryFree ? (
        <FreeDeliveryMessage />
      ) : (
        <PriceInfoList deliveryPrice={deliveryPrice} />
      )}
    </Dialog>
  );
};

interface IPriceInfoList {
  deliveryPrice: DeliveryPrice;
}

const PriceInfoList: FC<IPriceInfoList> = ({ deliveryPrice }) => {
  return (
    <List>
      {Object.entries(deliveryPrice).map(([key, value]) => {
        if (key === "totalPrice") return;
        if (key === "fridayRush" && deliveryPrice.fridayRush === false) return;
        const formattedKey = formatDeliveryPriceKey(key);
        const price =
          deliveryPrice.surcharge +
          deliveryPrice.itemsFee +
          deliveryPrice.distanceFee;
        return (
          <ListItem key={key}>
            {key === "fridayRush" ? (
              <Typography>{`${formattedKey}: ${price}${euroSign}*1.2`}</Typography>
            ) : (
              <Typography>{`${formattedKey}: ${value}${euroSign}`}</Typography>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

const FreeDeliveryMessage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography>
        For orders with value of 200{euroSign} and bigger delivery is free!
      </Typography>
    </Box>
  );
};

export default InfoDialog;

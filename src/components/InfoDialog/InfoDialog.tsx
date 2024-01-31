import { Dialog, DialogTitle } from "@mui/material";
import { FC } from "react";
import { euroSign } from "../../constants/constants";
import { FreeDeliveryMessage } from "./FreeDeliveryMessage";
import { PriceInfoList } from "./PriceInfoList";

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

export default InfoDialog;

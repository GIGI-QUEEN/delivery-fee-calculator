import { Box, Typography, IconButton } from "@mui/material";
import { FC } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { euroSign } from "../constants/constants";

interface IPrice {
  deliveryPrice: DeliveryPrice;
  handleOpen: () => void;
}

export const Price: FC<IPrice> = ({ deliveryPrice, handleOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>
        Delivery price:
        <span data-test-id="fee">{deliveryPrice.totalPrice}</span>
        {euroSign}
      </Typography>

      <IconButton onClick={handleOpen}>
        <InfoIcon color="primary" />
      </IconButton>
    </Box>
  );
};

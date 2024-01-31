import { Box, Typography } from "@mui/material";
import { euroSign } from "../../constants/constants";

export const FreeDeliveryMessage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography>
        For orders with value of 200{euroSign} and bigger delivery is free!
      </Typography>
    </Box>
  );
};

import {
  Box,
  Container,
  Dialog,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import CustomButton from "./CustomButton";
import CustomInputField from "./CustomInputField";
import { CustomDateTimePicker } from "./CustomDatePicker";
import { useCalculator } from "../hooks/useCalculator";
import InfoIcon from "@mui/icons-material/Info";
import { useDialog } from "../hooks/useDialog";
import InfoDialog from "./InfoDialog";
const euro = "\u20ac";

const DeliveryFeeCalculator = () => {
  const {
    cartValue,
    setCartValue,
    amountOfItems,
    setAmountOfItems,
    distance,
    setDistance,
    surcharge,
    setSurcharge,
    extraItemsFee,
    setExtraItemsFee,
    time,
    setTime,
    deliveryPrice,
    handleClick,
  } = useCalculator();
  const { open, handleOpen, handleClose } = useDialog();

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: "25px",
          width: "500px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          //backgroundColor: "rgb(255,255,255, 0.5)",
          borderRadius: "15px",
        }}
      >
        <CustomInputField
          placeholder="cart value"
          inputAdornment={euro}
          setStateValue={setCartValue}
        />
        <CustomInputField
          placeholder="delivery distance"
          inputAdornment="m"
          setStateValue={setDistance}
        />
        <CustomInputField
          placeholder="amount of items"
          setStateValue={setAmountOfItems}
        />
        <CustomDateTimePicker time={time} setTime={setTime} />
        <CustomButton title={"confirm"} handleClick={handleClick} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid grey",
              borderRadius: "5px",
              width: "200px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Delivery price: {deliveryPrice}
            </Typography>
          </Box>
          <IconButton onClick={handleOpen}>
            <InfoIcon color="primary" />
          </IconButton>
        </Box>
      </Paper>
      <InfoDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default DeliveryFeeCalculator;

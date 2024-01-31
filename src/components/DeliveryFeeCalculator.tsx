import { Paper, Typography } from "@mui/material";
import CustomButton from "./shared/CustomButton";
import CustomInputField from "./shared/CustomInputField";
import { CustomDateTimePicker } from "./shared/CustomDatePicker";
import { useCalculator } from "../hooks/useCalculator";
import { useDialog } from "../hooks/useDialog";
import InfoDialog from "./InfoDialog/InfoDialog";
import { Price } from "./Price";
import { euroSign } from "../constants/constants";

const DeliveryFeeCalculator = () => {
  const {
    setCartValue,
    setNumberOfItems,
    setDistance,
    time,
    setTime,
    deliveryPrice,
    handleClick,
    error,
    disabled,
  } = useCalculator();
  const { open, handleOpen, handleClose } = useDialog();

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: "25px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Delivery fee calculator
        </Typography>
        <CustomInputField
          dataTestId="cartValue"
          placeholder="cart value"
          inputAdornment={euroSign}
          setStateValue={setCartValue}
          error={error}
        />
        <CustomInputField
          dataTestId="deliveryDistance"
          placeholder="delivery distance"
          inputAdornment="m"
          setStateValue={setDistance}
          error={error}
        />
        <CustomInputField
          dataTestId="numberOfItems"
          placeholder="number of items"
          setStateValue={setNumberOfItems}
          error={error}
        />
        <CustomDateTimePicker
          time={time}
          setTime={setTime}
          dataTestId={"orderTime"}
        />
        <CustomButton
          title={"calculate"}
          handleClick={handleClick}
          disabled={disabled}
          dataTestId={"calculateButton"}
        />
        <Price deliveryPrice={deliveryPrice} handleOpen={handleOpen} />
      </Paper>
      <InfoDialog
        open={open}
        handleClose={handleClose}
        deliveryPrice={deliveryPrice}
      />
    </>
  );
};

export default DeliveryFeeCalculator;

import { Paper, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import CustomInputField from "./CustomInputField";
import { CustomDateTimePicker } from "./CustomDatePicker";
import { useCalculator } from "../hooks/useCalculator";
import { useDialog } from "../hooks/useDialog";
import InfoDialog from "./InfoDialog";
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
          required={true}
          error={error}
        />
        <CustomInputField
          dataTestId="deliveryDistance"
          placeholder="delivery distance"
          inputAdornment="m"
          setStateValue={setDistance}
          required={true}
          error={error}
        />
        <CustomInputField
          dataTestId="numberOfItems"
          placeholder="number of items"
          setStateValue={setNumberOfItems}
          required={true}
          error={error}
        />
        <CustomDateTimePicker time={time} setTime={setTime} />
        <CustomButton
          title={"calculate"}
          handleClick={handleClick}
          disabled={disabled}
        />
        <Price deliveryPrice={deliveryPrice} handleOpen={handleOpen} />

        {/*  {deliveryPrice.totalPrice !== 0 || cartValue >= 200 ? (
          <Price deliveryPrice={deliveryPrice} handleOpen={handleOpen} />
        ) : null} */}
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

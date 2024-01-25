import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { FC } from "react";

interface ICustomTextInputField {
  placeholder: string;
  inputAdornment?: string;
  setStateValue: React.Dispatch<React.SetStateAction<number>>;
  dataTestId?: string;
}

const CustomInputField: FC<ICustomTextInputField> = ({
  placeholder,
  inputAdornment,
  setStateValue,
  dataTestId: testId,
}) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        {placeholder}
      </InputLabel>
      <OutlinedInput
        type="number"
        inputProps={{
          "data-test-id": testId, //adding custom attribute to the input field inside OutlinedInput
        }}
        onChange={(e) => setStateValue(Number(e.target.value))}
        endAdornment={
          <InputAdornment position="end">{inputAdornment}</InputAdornment>
        }
        label={placeholder}
      />
    </FormControl>
  );
};

export default CustomInputField;

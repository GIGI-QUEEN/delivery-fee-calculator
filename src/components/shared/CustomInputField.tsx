import {
  FormControl,
  FormHelperText,
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
  error: boolean;
}

const CustomInputField: FC<ICustomTextInputField> = ({
  placeholder,
  inputAdornment,
  setStateValue,
  dataTestId: testId,
  error,
}) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        {placeholder}
      </InputLabel>
      <OutlinedInput
        error={error}
        type="number"
        inputProps={{
          "data-test-id": testId, //adding custom attribute with test-id to the input field inside OutlinedInput
        }}
        onChange={(e) => setStateValue(Number(e.target.value))}
        endAdornment={
          <InputAdornment position="end">{inputAdornment}</InputAdornment>
        }
        label={placeholder}
      />
      {error ? <FormHelperText>Please enter value</FormHelperText> : null}
    </FormControl>
  );
};

export default CustomInputField;

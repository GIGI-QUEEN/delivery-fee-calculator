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
}

const CustomInputField: FC<ICustomTextInputField> = ({
  placeholder,
  inputAdornment,
  setStateValue,
}) => {
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        {placeholder}
      </InputLabel>
      <OutlinedInput
        type="number"
        id="outlined-adornment-password"
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

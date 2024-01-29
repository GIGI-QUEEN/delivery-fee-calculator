import { FormControl } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { FC } from "react";

interface ICustomDateTimePicker {
  time: dayjs.Dayjs;
  setTime: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export const CustomDateTimePicker: FC<ICustomDateTimePicker> = ({
  time,
  setTime,
}) => {
  return (
    <FormControl
      sx={{
        width: "100%",
      }}
    >
      <DateTimePicker
        slotProps={{
          textField: {
            inputProps: {
              "data-test-id": "orderTime",
            },
          },
        }}
        label="time"
        value={dayjs(time)}
        onChange={(value) => setTime(dayjs(value))}
        defaultValue={dayjs(time)}
      />
    </FormControl>
  );
};

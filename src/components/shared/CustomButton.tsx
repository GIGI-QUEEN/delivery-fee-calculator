import { Button } from "@mui/material";
import { FC } from "react";

interface ICustomButtonProps {
  title: string;
  handleClick: () => void;
  disabled: boolean;
  dataTestId?: string;
}

const CustomButton: FC<ICustomButtonProps> = ({
  title,
  handleClick,
  disabled,
  dataTestId,
}) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={disabled}
      data-test-id={dataTestId}
      sx={{
        fontWeight: "bold",
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

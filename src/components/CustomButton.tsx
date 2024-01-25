import { Button } from "@mui/material";
import { FC } from "react";

interface ICustomButtonProps {
  title: string;
  // handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  handleClick: () => void;
}

const CustomButton: FC<ICustomButtonProps> = ({ title, handleClick }) => {
  return (
    <Button variant="contained" onClick={handleClick}>
      {title}
    </Button>
  );
};

export default CustomButton;

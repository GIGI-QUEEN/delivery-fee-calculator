import { Button } from "@mui/material";
import { FC } from "react";

interface ICustomButtonProps {
  title: string;
  // handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  handleClick: () => void;
  disabled: boolean;
}

const CustomButton: FC<ICustomButtonProps> = ({
  title,
  handleClick,
  disabled,
}) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={disabled}
      //color="primary"
      sx={{
        fontWeight: "bold",
        // width: "200px",
        //backgroundColor: "#22c3e4",
        // background: "linear-gradient(#22c3e4,#81DEFA)",
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

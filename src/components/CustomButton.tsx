import { Button } from "@mui/material";
import { FC } from "react";

interface ICustomButtonProps {
  title: string;
  // handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  handleClick: () => void;
}

const CustomButton: FC<ICustomButtonProps> = ({ title, handleClick }) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
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

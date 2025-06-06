import React from "react";
import { Button, ButtonProps } from "@mui/material";

export interface PrimaryButtonProps
  extends Omit<ButtonProps, "variant" | "color"> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button variant="contained" color="primary" fullWidth {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;

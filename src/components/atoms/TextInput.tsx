import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

export interface TextInputProps extends Omit<TextFieldProps, "variant"> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      fullWidth
      margin="normal"
      {...props}
    />
  );
};

export default TextInput;

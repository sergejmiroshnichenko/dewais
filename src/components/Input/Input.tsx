import { TextField } from "@mui/material";
import React, { FC } from "react";

interface InputProps {
  name: string;
  label: string;
  variant: "outlined";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  size: "small" | "medium";
}

const Input: FC<InputProps> = ({
  name,
  label,
  variant = "outlined",
  onChange,
  className,
  size,
  ...props
}) => {
  return (
    <TextField
      {...props}
      label={label}
      variant={variant}
      name={name}
      fullWidth
      onChange={onChange}
      className={className}
      size={size}
      sx={{
        "& .MuiFormLabel-root-MuiInputLabel-root": { fontSize: "1rem" },
        "& .MuiFormHelperText-root.Mui-error": {
          fontSize: "0.8rem",
          position: "absolute",
          marginTop: "55px",
        },
        "& .MuiInputBase-root": {
          backgroundColor: "white",
          letterSpacing: "0.7px",
        },
        "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
        "& .MuiInputBase-input.MuiOutlinedInput-input": {
          letterSpacing: "1.25px",
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderLeftWidth: 6,
            padding: "4px !important",
            borderColor: "gray",
          },
        },
      }}
    />
  );
};

export default Input;

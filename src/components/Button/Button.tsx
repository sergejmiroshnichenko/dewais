import { Button } from "@mui/material";
import { FC, ReactNode } from "react";

interface PrimaryButtonProps {
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children: ReactNode;
  className: string;
  onClick: () => void;
  size: "small" | "medium" | "large";
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  className,
  color,
  onClick,
  size,
  ...props
}) => {
  return (
    <Button
      variant="outlined"
      type="submit"
      size={size}
      disableElevation
      color={color}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

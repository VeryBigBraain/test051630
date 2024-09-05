import { forwardRef, ReactNode } from "react";
import MaterialButton from "@mui/material/Button";

export type TButton = {
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ size, variant, color, children }, ref) => {
    return (
      <MaterialButton ref={ref} size={size} variant={variant} color={color}>
        {children}
      </MaterialButton>
    );
  }
);

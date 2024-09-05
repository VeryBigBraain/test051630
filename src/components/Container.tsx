import Paper from "@mui/material/Paper";
import { forwardRef, ReactNode } from "react";

export type TContainer = {
  background?: string;
  padding?: number | string;
};

export const Container = forwardRef<
  HTMLDivElement,
  TContainer & { children?: ReactNode }
>(({ background, padding = 0, children }, ref) => {
  return (
    <Paper
      ref={ref}
      style={{ margin: "5px 0", background, padding: padding + "px" }}
    >
      {children}
    </Paper>
  );
});

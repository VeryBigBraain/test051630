import { FC } from "react";

export type TText = {
  text?: string;
  fontSize?: number | number[] | string;
  textAlign?: "left" | "right" | "center" | "justify";
  size?: string;
};

export const Text: FC<TText> = ({ text, fontSize, textAlign }) => {
  return <p style={{ fontSize: fontSize + "px", textAlign }}>{text}</p>;
};

import { forwardRef, ReactNode } from "react";
import { Button } from "./Button";
import { Text } from "./Text";
import { Container } from "./Container";

// Define props for the CardTop and CardBottom components
type TCardSection = {
  id?: string;
  children?: ReactNode;
};

// CardTop component with forwardRef
export const CardTop = forwardRef<HTMLDivElement, TCardSection>(
  ({ id, children }, ref) => {
    return (
      <div id={id} ref={ref} className="text-only">
        {children}
      </div>
    );
  }
);

// CardBottom component with forwardRef
export const CardBottom = forwardRef<HTMLDivElement, TCardSection>(
  ({ id, children }, ref) => {
    return (
      <div id={id} ref={ref}>
        {children}
      </div>
    );
  }
);

// Define props for the Card component
export type TCard = {
  background?: string;
  padding?: number | string;
  children?: ReactNode;
};

// Card component
export const Card: React.FC<TCard> = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <CardTop id="text">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </CardTop>
      <CardBottom id="buttons">
        <Button size="small" children="Learn more" />
      </CardBottom>
    </Container>
  );
};

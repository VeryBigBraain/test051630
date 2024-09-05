import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { Card, CardTop, CardBottom } from "./components/Card";

export function PageComponent() {
  return (
      <Container background="#f1f6ed" padding="29">
        <Container background="#ffffff" padding="20">
          <Button size="small" variant="contained" color="primary">Click me</Button>
          <Button size="small" variant="contained" color="primary">Click me</Button>
          <Button size="small" variant="contained" color="primary">Click me</Button>
          <Button size="small" variant="contained" color="primary">Click me</Button>
          <Text text="Hi world" fontSize="20"></Text>
        </Container>
        <Text text="Hi world" fontSize="20"></Text>
        <Text text="Hi world йохохохо" fontSize="20"></Text>
        <Container background="#dee8ff" padding="100">
          <Text text="THE TEXT" fontSize="50"></Text>
        </Container>
        <Card background="#f7dada" padding="45">
          <CardTop>
            <Text text="Title" fontSize="29"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom></CardBottom>
        </Card>
      </Container>
  );
}
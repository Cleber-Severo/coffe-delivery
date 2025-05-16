import { ReactNode } from "react";
import { Container, TextContainer } from "./style";

interface DescriptionProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Description = ({ description, icon, title }: DescriptionProps) => {
  return (
    <Container>
      {icon}
      <TextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextContainer>
    </Container>
  );
};

export default Description;

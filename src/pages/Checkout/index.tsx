import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  Card,
  CardTitle,
  FormContainer,
  FormGrid,
  FormLayout,
  Input,
  InputWrapper,
  OrderContainer,
  SelectedCoffeContainer,
} from "./styles";
import Description from "../../components/Description";
import { CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <FormContainer>
      <OrderContainer>
        <CardTitle>Complete seu pedido</CardTitle>

        <Card>
          <Description
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={24} color={defaultTheme["yellow-dark"]} />}
          />

          <FormGrid>
            <InputWrapper colSpan={5}>
              <Input placeholder="CEP" />
            </InputWrapper>
          </FormGrid>

          <FormGrid>
            <InputWrapper colSpan={12}>
              <Input placeholder="Rua" />
            </InputWrapper>
          </FormGrid>

          <FormGrid>
            <InputWrapper colSpan={5}>
              <Input placeholder="Número" />
            </InputWrapper>
            <InputWrapper colSpan={7}>
              <Input placeholder="Complemento" />
            </InputWrapper>
          </FormGrid>

          <FormGrid>
            <InputWrapper colSpan={5}>
              <Input placeholder="Bairro" />
            </InputWrapper>
            <InputWrapper colSpan={5}>
              <Input placeholder="Cidade" />
            </InputWrapper>
            <InputWrapper colSpan={2}>
              <Input placeholder="UF" />
            </InputWrapper>
          </FormGrid>
        </Card>
        <Card>
          <Description
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            icon={<CurrencyDollarSimple size={24} color={defaultTheme["purple"]} />}
          />
        </Card>
      </OrderContainer>

      <SelectedCoffeContainer>
        <CardTitle>Carfés Selecionados</CardTitle>
        <Card roundedCorner>Confirmar pedido</Card>
      </SelectedCoffeContainer>
    </FormContainer>
  );
};

export default Checkout;

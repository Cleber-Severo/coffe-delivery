import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Card, Container, IconWrapper, Item, SubTitle, Title } from "./styles";
import CarImgSrc from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

type PaymentMethod = 'credito' | 'debito' | 'dinheiro';

const paymentsMap: Record<PaymentMethod, string> = {
  credito: 'Cartão de crédito',
  debito: 'Cartão de débito',
  dinheiro: 'dinheiro',
};

const Success = () => {
  const { orderDetails } = useContext(CartContext)
  console.log(" Success ~ orderDetails:", orderDetails)

  return <Container>
    <div>
      <Title>Uhuu! Pedido Confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
      <Card>
        <div>
          <Item>
            <IconWrapper style={{ backgroundColor: defaultTheme.purple }}>
              <MapPin size={16} weight="fill" color="#FFF" />
            </IconWrapper>
            <div>
              <span>Entrega em: <strong>{orderDetails.rua}, {orderDetails.numero}</strong></span>
              <span>{orderDetails.bairro} - {orderDetails.cidade}, {orderDetails.uf}</span>
            </div>
          </Item>
          <Item>
            <IconWrapper style={{ backgroundColor: defaultTheme["yellow"] }}>
              <Timer size={16} weight="fill" color="#FFF" />
            </IconWrapper>
            <div>
              <span>Pagamento de entrega</span>
              <span><strong>20min - 30 min</strong></span>
            </div>
          </Item>
          <Item>
            <IconWrapper style={{ backgroundColor: defaultTheme["yellow-dark"] }}>
              <CurrencyDollar  size={16} color="#FFF" />
            </IconWrapper>
            <div>
              <span>Previsão na entrega</span>
              <span>
                <strong>
                  {paymentsMap[orderDetails.paymentMethod as PaymentMethod]}
                </strong>
              </span>
            </div>
          </Item>
        </div>
      </Card>

    </div>
    <img src={CarImgSrc} alt="" />
  </Container>;
};

export default Success;

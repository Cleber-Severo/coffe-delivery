import { useContext, useState } from "react";
import { ICoffe } from "../../../../@types/coffe";
import CartButton from "../CartButton";
import { AmountActions, BuyContainer, ItemContainer, Price, Tags } from "./styles";
import { Minus, Plus } from "phosphor-react";
import { CartContext } from "../../../../contexts/CartContext";
import { parseCurrency } from "../../../../utils/parseCurrency";
import { v4 as uuidv4 } from 'uuid';

const CoffeItem = ({ title, description, url, price, tags }: ICoffe) => {
  const [coffeAmount, setCoffeAmount] = useState(1);

  const { setCartList } = useContext(CartContext);

  const updateCart = () => {
    setCartList({ title, description, url, price, tags, amount: coffeAmount, id: uuidv4()});
    setCoffeAmount(1);
  };

  return (
    <ItemContainer>
      <img src={url} alt="" />

      {!!tags.length && (
        <Tags>
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </Tags>
      )}

      <h4>{title}</h4>
      <p>{description}</p>

      <BuyContainer>
        <Price>
          <strong>{parseCurrency(price) || ""}</strong>
        </Price>
        <AmountActions>
          <button onClick={() => setCoffeAmount((prev) => prev - 1)}>
            <Minus size={18} />
          </button>
          <span>{coffeAmount}</span>
          <button onClick={() => setCoffeAmount((prev) => prev + 1)}>
            <Plus size={18} />
          </button>
        </AmountActions>
        <CartButton onClick={updateCart} />
      </BuyContainer>
    </ItemContainer>
  );
};

export default CoffeItem;

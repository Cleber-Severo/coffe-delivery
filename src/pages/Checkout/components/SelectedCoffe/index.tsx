import { AmountActionsItem, BaseBtnContainer, CoffeItem, ItemContainer, ItemDescription, RemoveBtn, SelectedCoffeContainer, Separator } from './styles'
import { Card, CardTitle } from '../../styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { ICoffe } from '../../../../@types/coffe'
import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { parseCurrency } from '../../../../utils/parseCurrency'

const SelectedCoffe = () => {
  const { cartItems, increaseItemAmount, decreaseItemAmount } = useContext(CartContext)

  return (
    <SelectedCoffeContainer>
      <CardTitle>Cafés Selecionados</CardTitle>
      <Card roundedCorner>
        {!!cartItems.length && cartItems.map((cart: ICoffe) => (
          <>
            <CoffeItem style={{ padding: '8px 4px' }}>
              <img src={cart.url} alt="" />

              <ItemContainer>
                <ItemDescription>
                  <span>{cart.title}</span>
                  <span>{parseCurrency(String(Number(cart.price) * Number(cart.amount)))}</span>
                </ItemDescription>
                <CoffeItem>
                  <BaseBtnContainer>
                    <AmountActionsItem>
                      <button type='button' onClick={() => decreaseItemAmount(cart.id)}>
                        <Minus size={18} />
                      </button>
                      <span>{cart.amount}</span>
                      <button type='button' onClick={() => increaseItemAmount(cart.id)}>
                        <Plus size={18} />
                      </button>
                    </AmountActionsItem>
                  </BaseBtnContainer>
                  <BaseBtnContainer>
                    <RemoveBtn>
                      <Trash size={18} color={defaultTheme['purple']} /> <span>Remover</span>
                    </RemoveBtn>
                  </BaseBtnContainer>
                </CoffeItem>
              </ItemContainer>
            </CoffeItem>
            <Separator />
          </>
        ))}
        <button type="submit">submit</button>
      </Card>
    </SelectedCoffeContainer>
  )
}

export default SelectedCoffe

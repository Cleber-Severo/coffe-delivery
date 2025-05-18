import { AmountActionsItem, BaseBtnContainer, CoffeItem, ConfirmOrderButton, ItemContainer, ItemDescription, ListWrapper, RemoveBtn, ResumeText, ResumeTextContainer, ResumeTitle, SelectedCoffeContainer, Separator } from './styles'
import { Card, CardTitle } from '../../styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { ICoffe } from '../../../../@types/coffe'
import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { parseCurrency } from '../../../../utils/parseCurrency'

const SelectedCoffe = () => {
  const { 
    cartItems, 
    increaseItemAmount, 
    decreaseItemAmount, 
    cartItemsTotalValue, 
    removeCoffe,    
  } = useContext(CartContext)

  const totalOrderValue = parseCurrency(String(cartItemsTotalValue + 3.30))

  return (
    <SelectedCoffeContainer>
      <CardTitle>Cafés Selecionados</CardTitle>
      <Card roundedCorner>
        <ListWrapper>
          {!!cartItems.length && cartItems.map((cart: ICoffe, index) => (
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
                      <RemoveBtn onClick={() => removeCoffe(cart.id)} >
                        <Trash size={18} color={defaultTheme['purple']} /> <span>Remover</span>
                      </RemoveBtn>
                    </BaseBtnContainer>
                  </CoffeItem>
                </ItemContainer>
              </CoffeItem>
              {index < cartItems.length - 1 && <Separator />}
            </>
          ))}
        </ListWrapper>
        <Separator style={{ margin: '24px 0' }} />
        <ResumeTextContainer>
          <ResumeText>Total de itens</ResumeText>
          <ResumeText>{parseCurrency(String(cartItemsTotalValue))}</ResumeText>
        </ResumeTextContainer>
        <ResumeTextContainer>
          <ResumeText>Entrega</ResumeText>
          <ResumeText>{parseCurrency('3.5')}</ResumeText>
        </ResumeTextContainer>
        <ResumeTextContainer>
          <ResumeTitle>Total</ResumeTitle>
          <ResumeTitle>{totalOrderValue}</ResumeTitle>
        </ResumeTextContainer>
        
        <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
      </Card>
    </SelectedCoffeContainer>
  )
}

export default SelectedCoffe

import { Container, PaymentBtn } from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

const Payment = () => {
  const { setValue, watch } = useFormContext()

  const selectedPayment = watch('paymentMethod')

  const handleSelect = (method: string) => {
    setValue("paymentMethod", method)
  }

  return (
    <Container>
      <PaymentBtn
        type='button'
        onClick={() => handleSelect('credito')}
        selected={selectedPayment === 'credito'}
      >
        <CreditCard size={18} /> <span>Cartão de Crédito</span>
      </PaymentBtn>
      <PaymentBtn
        type='button'
        onClick={() => handleSelect('debito')}
        selected={selectedPayment === 'debito'}
      >
        <Bank size={18} /> <span>Cartão de Débito</span>
      </PaymentBtn>
      <PaymentBtn
        type='button'
        onClick={() => handleSelect('dinheiro')}
        selected={selectedPayment === 'dinheiro'}
      >
        <Money size={18} /> <span>Dinheiro</span>
      </PaymentBtn>
    </Container>
  )
}

export default Payment

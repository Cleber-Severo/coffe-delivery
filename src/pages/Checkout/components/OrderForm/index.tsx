import { FormGrid, Input, InputWrapper, OrderContainer } from './styles'
import { Card, CardTitle } from '../../styles'
import Description from '../Description'
import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { useFormContext } from 'react-hook-form'
import Payment from '../Payment'
import { useEffect } from 'react'

const OrderForm = () => {
  const { register, setValue, watch, } = useFormContext()



  // Watch the raw CEP value
  const rawCep = watch("cep")

  // Apply the mask on change
  useEffect(() => {
    const onlyDigits = rawCep?.replace(/\D/g, "")
    const masked = onlyDigits?.replace(/^(\d{5})(\d{0,3})/, "$1-$2")
    if (masked !== rawCep) {
      setValue("cep", masked)
    }
  }, [rawCep, setValue])

  return (
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
            <Input id='cep' placeholder="CEP" {...register('cep')} />
          </InputWrapper>
        </FormGrid>

        <FormGrid>
          <InputWrapper colSpan={12}>
            <Input id='rua' placeholder="Rua" {...register('rua')} />
          </InputWrapper>
        </FormGrid>

        <FormGrid>
          <InputWrapper colSpan={5}>
            <Input id='numero' placeholder="Número" {...register('numero')} />
          </InputWrapper>
          <InputWrapper colSpan={7}>
            <Input id='complemento' placeholder="Complemento" {...register('complemento')} />
          </InputWrapper>
        </FormGrid>

        <FormGrid>
          <InputWrapper colSpan={5}>
            <Input id='bairro' placeholder="Bairro" {...register('bairro')} />
          </InputWrapper>
          <InputWrapper colSpan={5}>
            <Input id='cidade' placeholder="Cidade" {...register('cidade')} />
          </InputWrapper>
          <InputWrapper colSpan={2}>
            <Input id='uf' placeholder="UF" {...register('uf')} />
          </InputWrapper>
        </FormGrid>
      </Card>
      <Card>
        <Description
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar."
          icon={<CurrencyDollarSimple size={24} color={defaultTheme["purple"]} />}
        />
        <Payment />
      </Card>
    </OrderContainer>
  )
}

export default OrderForm

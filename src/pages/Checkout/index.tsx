import * as zod from 'zod';
import {
  Card,
  CardTitle,
  FormContainer,
  FormGrid, Input,
  InputWrapper,
  OrderContainer,
  SelectedCoffeContainer
} from "./styles";
import Description from "../../components/Description";
import { CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import Payment from "../../components/Payment";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const checkoutFormSchema = zod.object({
  cep: zod.string().min(1, 'Campo Obrigatório'),
  rua: zod.string().min(1, 'Campo Obrigatório'),
  numero: zod.string().min(1, 'Campo Obrigatório'),
  complemento: zod.string().min(1, 'Campo Obrigatório'),
  bairro: zod.string().min(1, 'Campo Obrigatório'),
  cidade: zod.string().min(1, 'Campo Obrigatório'),
  uf: zod.string().min(1, 'Campo Obrigatório'),
  paymentMethod: zod.string().min(1, 'Selecione ao menos um método de pagamento')
})

type CheckoutFormData = zod.infer<typeof checkoutFormSchema>

const Checkout = () => {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentMethod: 'credito'
    }
  })

  const { handleSubmit, register } = checkoutForm

  const handleCheckoutSubmit = (payment: CheckoutFormData) => {
    console.log(" handleCheckoutSubmit ~ payment:", payment)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCheckoutSubmit)}>
      <FormProvider {...checkoutForm}>
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
      </FormProvider>

      <SelectedCoffeContainer>
        <CardTitle>Carfés Selecionados</CardTitle>
        <Card roundedCorner>
          Confirmar pedido

          <button type="submit">submit</button>
        </Card>
      </SelectedCoffeContainer>
    </FormContainer>
  );
};

export default Checkout;

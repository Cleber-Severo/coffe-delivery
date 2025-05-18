import * as zod from 'zod';
import {
  FormContainer
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import OrderForm from './components/OrderForm';
import SelectedCoffe from './components/SelectedCoffe';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const checkoutFormSchema = zod.object({
  cep: zod.string().min(1, 'Campo Obrigatório'),
  rua: zod.string().min(1, 'Campo Obrigatório'),
  numero: zod.coerce.number().min(1, 'Campo Obrigatório'),
  complemento: zod.string().min(1, 'Campo Obrigatório'),
  bairro: zod.string().min(1, 'Campo Obrigatório'),
  cidade: zod.string().min(1, 'Campo Obrigatório'),
  uf: zod.string().min(1, 'Campo Obrigatório'),
  paymentMethod: zod.string().min(1, 'Selecione ao menos um método de pagamento')
})

export type CheckoutFormData = zod.infer<typeof checkoutFormSchema>

const Checkout = () => {
  const navigate = useNavigate()

  const { setOrder } = useContext(CartContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: 0,
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentMethod: 'credito'
    }
  })

  const { handleSubmit } = checkoutForm

  const handleCheckoutSubmit = (payment: CheckoutFormData) => {
    setOrder(payment)
    navigate('/success')
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCheckoutSubmit)}>
      <FormProvider {...checkoutForm}>
        <OrderForm />
      </FormProvider>

      <SelectedCoffe />
    </FormContainer>
  );
};

export default Checkout;

import * as zod from 'zod';
import {
  FormContainer
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import OrderForm from './components/OrderForm';
import SelectedCoffe from './components/SelectedCoffe';

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

type CheckoutFormData = zod.infer<typeof checkoutFormSchema>

const Checkout = () => {
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
    console.log(" handleCheckoutSubmit ~ payment:", payment)
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

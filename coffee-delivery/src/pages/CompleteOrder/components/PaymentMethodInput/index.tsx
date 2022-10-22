import { CreditCard } from "phosphor-react";
import { InputHTMLAttributes, ReactNode } from "react";
import { PaymentMethodContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElements> & {
  icon: ReactNode;
  label: string;
}

export function PaymentMethodInput({id, icon, label, ...props}: PaymentMethodInputProps) {
  return(
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethods"/>
      <CreditCard size={16}/>
      Cartão de crédito
    </PaymentMethodContainer>
  )
}
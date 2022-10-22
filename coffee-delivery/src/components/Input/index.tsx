import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typography";
import { InputStyleContainer, InputStyled, InputWrapper, RigthText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};



export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({error, rightText, className,...props}, ref) => {
    return(
      <InputWrapper className={className}>
        <InputStyleContainer>
          <InputStyled {...props} ref={ref}/> 
          {rightText && <RigthText>{rightText}</RigthText>}
        </InputStyleContainer>       
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>      
    );
  });
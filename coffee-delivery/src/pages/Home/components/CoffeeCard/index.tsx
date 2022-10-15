import { ShoppingCart } from "phosphor-react";
import { RegularText, TitleText } from "../../../../components/Typography";
import { formatMoney } from "../../../../utils/formatMoney";
import { QuantityInput } from "../QuantityInput";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}
interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price);

  return(
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`}/>

      <Tags>
        {coffee.tags.map((tag)=> (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
        </div>

       <AddCartWrapper>
        <QuantityInput/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>       
       </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
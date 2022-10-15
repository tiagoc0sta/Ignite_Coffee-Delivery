import { ShoppingCart } from "phosphor-react";
import { RegularText, TitleText } from "../../../../components/Typography";
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
  return(
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1666569600&Signature=NUgPNDu-210vgLAekY86HMKADP1I0wtpMrWoOFuVJEQL5iGXd6ATOD~udJnpGxvWNHoFHIDgK0roE2PkAHkPsVqnltrJo8xfpnZjvMxXEIgd3KHIh4crV0LSETQR61moiow8JTGdYR7i~8aF-2K-oSZv~4PjDdgtMZKC6e0scTSebxirOec20NjFMMDWKUlRgd7x3~fme6MR4~09FiJRQTZC9IavlGUyIENntKENxU1AnnH3Myky87y8btjIDLGiYcZqekblmxuqEr393uTnPecxta-dFWI-KzAeYyZAkdNypJS9~Lvwcbk9LaKeKpuv6EKHJ0ZVMoTDxyibQXQWRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
      <Tags>
        {coffee.tags.map((tag)=> (
          <span key={`${coffee.id} ${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
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
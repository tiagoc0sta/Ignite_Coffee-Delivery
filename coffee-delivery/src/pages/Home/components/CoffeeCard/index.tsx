import { CoffeeCardContainer, Name, Tags } from "./styles";

export function CoffeeCard() {
  return(
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1666569600&Signature=NUgPNDu-210vgLAekY86HMKADP1I0wtpMrWoOFuVJEQL5iGXd6ATOD~udJnpGxvWNHoFHIDgK0roE2PkAHkPsVqnltrJo8xfpnZjvMxXEIgd3KHIh4crV0LSETQR61moiow8JTGdYR7i~8aF-2K-oSZv~4PjDdgtMZKC6e0scTSebxirOec20NjFMMDWKUlRgd7x3~fme6MR4~09FiJRQTZC9IavlGUyIENntKENxU1AnnH3Myky87y8btjIDLGiYcZqekblmxuqEr393uTnPecxta-dFWI-KzAeYyZAkdNypJS9~Lvwcbk9LaKeKpuv6EKHJ0ZVMoTDxyibQXQWRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
      <Tags>
        <span>Tradicional</span>
        <span>Com Leite</span>
      </Tags>

      <Name> Expresso Tradicional</Name>
    </CoffeeCardContainer>
  )
}
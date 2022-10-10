import { ReactNode } from "react";
import { IconContainer, InfoWithIconcontainer } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}


export function InfoWithIcon( {icon, text, iconBg }: InfoWithIconProps) {
  return(
    <InfoWithIconcontainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> :text}
    </InfoWithIconcontainer>
  );
}
import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { SctionTitleContainer } from "./styles";

interface SectionTitleProps{
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({title, subtitle, icon}: SectionTitleProps) {
  return (
    <SctionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SctionTitleContainer>
  )
}
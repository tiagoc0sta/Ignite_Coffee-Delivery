import styled from "styled-components";

export const InfoWithIconcontainer = styled.div `
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  iconBg: string;
}

export const IconContainer = styled.div<IconContainerProps> `
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({iconBg}) => iconBg};
`;
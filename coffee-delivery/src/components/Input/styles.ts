import styled from "styled-components";

export const InputStyledContainer = styled.input `
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors["base-button"]};
  background-color: ${({theme}) => theme.colors["base-input"]};
  

`;
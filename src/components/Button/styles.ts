import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: ${props => props.theme.COLORS.BLUE};
  color: ${props => props.theme.COLORS.LIGHT};
  border: none;
  cursor: pointer; /* Adicione um cursor ao botão para indicar que é clicável */

  :hover {
    background-color: #385c7f;
    color: #ffffff;
  }

  :active {
    background-color: ${props => props.theme.COLORS.DARK_BLUE}; /* Cor quando o botão é clicado */
    color: #ffffff;
  }
`;

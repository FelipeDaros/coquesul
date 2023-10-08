import styled from "styled-components";


export const Select = styled.select`
  width: 450px;
  height: 40px;

  @media (max-width: 768px) {
    width: 350px;
    height: 40px;
  }

  color: ${props => props.theme.COLORS.GRAY_500};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;

`;
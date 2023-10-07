import styled from "styled-components";


export const Input = styled.input`
  width: 350px;
  height: 40px;

  color: ${props => props.theme.COLORS.GRAY_500};
  border-radius: 6px;
  border: 0.5px solid ${props => props.theme.COLORS.GRAY_500};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
`;
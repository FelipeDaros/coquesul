import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;


export const ContainerFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Image = styled.img`
  width: 300px;
  align-self: center;
`;

export const TitleRegister = styled.a`
  text-decoration: none;
  font-size: 12px;
  margin-top: 30px;
  color: ${props => props.theme.COLORS.BLUE};
  cursor: pointer;
`;
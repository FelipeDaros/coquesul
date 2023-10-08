import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh; /* Defina a altura do Container como 100% da altura da janela (viewport height) */
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;


export const Image = styled.img`
  width: 150px;
  align-self: center;
`;
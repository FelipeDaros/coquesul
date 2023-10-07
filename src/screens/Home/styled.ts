import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh; /* Defina a altura do Container como 100% da altura da janela (viewport height) */
`;

export const ContainerPedidos = styled.div`
  max-height: 420px;
  height: 420px;
  max-width: 400px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 15px;
     height: 15px;
     border: none;
  }
`;

export const Image = styled.img`
  width: 150px;
  align-self: center;
`;
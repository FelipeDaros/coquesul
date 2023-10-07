import styled from "styled-components";

export const Container = styled.div`
  position: absolute; /* Certifica-se de que o posicionamento absoluto funcione corretamente */
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px); /* Adiciona o efeito de desfoque ao fundo */
  background-color: rgba(255, 255, 255, 0.5); /* Cor de fundo com transparência */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: ${props => props.theme.COLORS.BLUE};
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8); /* Cor de fundo transparente */
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #385c7f;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

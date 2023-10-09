import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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

export const ListProductsSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  max-height: 200px;
  width: 70%;
  max-width: 70%;
  margin-top: 20px;
  border-radius: 6px;
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

export const ResumeProduct = styled.p`
  color: ${props => props.theme.COLORS.BLUE};
  font-size: 12px;
`
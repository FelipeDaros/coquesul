import { EnvelopeSimple } from "@phosphor-icons/react";
import styled from "styled-components";

export type PropsStatus = {
  status: string;
}

export const Container = styled.div`
  width: 350px;
  max-width: 350px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

export const BollStatus = styled.div<PropsStatus>`
  border-radius: 50%;
  width: 26px;
  height: 26px;
  background-color: ${props => props.status === 'SUCCESS' ? props.theme.COLORS.GREEN : props.status === 'WAITING' ? props.theme.COLORS.WARNING : props.theme.COLORS.RED};
`;

export const TitleCard = styled.p`
  font-size: 14px;
  font-weight: bold;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Icon = styled(EnvelopeSimple)`
  font-size: 18px; // Ajuste o tamanho conforme necessário
  color: #262523; // Defina a cor do ícone conforme necessário
`;

export const Email = styled.p`
  font-size: 10px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
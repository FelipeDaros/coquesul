import { BollStatus, Container, Email, Icon, PropsStatus, TitleCard } from "./styles";

type Props = {
  title: string;
  status: string;
  email: string;
}

export function CardPedido({ email, status = 'WAITING', title }: Props){
  return(
    <Container>
      <BollStatus status={status}/>
      <TitleCard>{title}</TitleCard>
      <Icon />
      <Email>{email}</Email>
    </Container>
  );
}
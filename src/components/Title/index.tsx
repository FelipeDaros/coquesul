import { Title } from "./styles"

type Props = {
  title: string;
}

export function CustomTitle({ title }: Props) {

  return (<Title>{title}</Title>)
}
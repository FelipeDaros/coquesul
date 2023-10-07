import { Label } from "./styles";

type Props = {
  title: string;
}

export function CustomLabel({ title }: Props) {
  return (<Label>{title}</Label>)
}
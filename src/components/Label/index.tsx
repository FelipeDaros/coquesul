import { Label } from "./styles";

type Props = React.HtmlHTMLAttributes<HTMLLabelElement> & {};

export function CustomLabel({ ...rest }: Props) {
  return (<Label {...rest} />)
}
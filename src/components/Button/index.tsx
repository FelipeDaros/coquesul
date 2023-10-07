import React from "react";
import { Button } from "./styles";


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &{
  title: string;
}

export function CustomButtom({ title, ...rest }: Props) {
  return <Button {...rest}>{title}</Button>;
}
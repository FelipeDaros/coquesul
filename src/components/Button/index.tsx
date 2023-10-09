import React from "react";
import { Button } from "./styles";


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &{
  title: string;
  disabled?: boolean;
}

export function CustomButtom({ title, disabled = false, ...rest }: Props) {
  return <Button disabled={disabled} {...rest}>{title}</Button>;
}
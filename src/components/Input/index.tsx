import React from "react";
import { Input } from "./styles";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function CustomInput({ ...rest }: Props) {
  return <Input {...rest} />;
}
import React from "react";
import { Select } from "./styles";

type Props = React.HTMLProps<HTMLSelectElement> & {}

export function CustomSelect({ ...rest }: Props) {
  return (<Select {...rest} />)
}
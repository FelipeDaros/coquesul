import { api } from "../config";

type Props = {
  consultarResultado: Clientes[];
}

export type Clientes = {
  codlojaCliente: string;
  nomeCliente: string;
  cgcCliente: string;
  bancoCliente: string;
}

export async function clientes(): Promise<Props> {
  try {
    const { data } = await api.get<Props>('/PDVCLIE/v1');

    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}
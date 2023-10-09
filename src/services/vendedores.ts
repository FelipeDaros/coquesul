import { api } from "../config";

type Props = {
  consultarResultado: Vendedores[];
}

export type Vendedores = {
  codigoVendedor: string;
  nomeVendedor: string;
}

export async function vendedores(): Promise<Props> {
  try {
    const { data } = await api.get<Props>('/PDVVEND/v1');

    return data;
  } catch (error) {
    throw error;
  }
}
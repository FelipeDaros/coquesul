import { api } from "../config";

type Props = {
  consultarResultado: Produtos[];
}

export type Produtos = {
  codigoProduto: string;
  descricaoProduto: string;
}

export async function produtos(): Promise<Props> {
  try {
    const { data } = await api.get<Props>('/PDVPROD/v1');

    return data;
  } catch (error) {
    throw error;
  }
}
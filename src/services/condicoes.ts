import { api } from "../config";

type Props = {
  consultarResultado: Condicoes[];
}

export type Condicoes = {
  codigoCondicao: string;
  descricaoCondicao: string;
}

export async function condicoes(): Promise<Props> {
  try {
    const { data } = await api.get<Props>('/PDVCOND/v1');

    return data;
  } catch (error) {
    throw error;
  }
}
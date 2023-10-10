import { Controller, useForm } from "react-hook-form";
import { CustomLabel } from "../../components/Label";
import { CustomSelect } from "../../components/Select";
import { Container, ContainerButtons, Image, ListProductsSelect, ResumeProduct } from "./styles";
import { CustomButtom } from "../../components/Button";

import logo from '../../assets/logo.png'

import { useNavigate } from "react-router-dom";
import { Clientes, clientes } from "../../services/clietes";
import { useEffect, useState } from "react";
import { Condicoes, condicoes } from "../../services/condicoes";
import { Vendedores, vendedores } from "../../services/vendedores";
import { Produtos, produtos } from "../../services/produtos";
import { LoadingSpinner } from "../../components/Loading";
import { api } from "../../config";
import { CustomInput } from "../../components/Input";
import moment from "moment";


type Props = {
  cliente: string;
  condicao_pagamento: string;
  vendedor: string;
  produto: string;
  quantidade: number;
  preco: number;
  precounit: number;
  cgc: string;
}

export function NewPedido() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [dataClientes, setDataClientes] = useState<Clientes[]>([]);
  const [dataCondicoes, setDataCondicoes] = useState<Condicoes[]>([] as Condicoes[]);
  const [dataVendedores, setDataVendedores] = useState<Vendedores[]>([] as Vendedores[]);
  const [dataProdutos, setDataProdutos] = useState([]);

  const [productsSelected, setProductsSelected] = useState([]);

  const {
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm<Props>();

  function handleGoBack() {
    navigate('/');
  }

  async function fechtDataClientes() {
    try {
      const { consultarResultado } = await clientes();
      setDataClientes(consultarResultado);
    } catch (error) {
      throw error;
    }
  }

  async function fetchDataCondicao() {
    try {
      const { consultarResultado } = await condicoes();
      setDataCondicoes(consultarResultado);
    } catch (error) {
      throw error;
    }
  }

  async function fetchDataVendedores() {
    try {
      const { consultarResultado } = await vendedores();
      setDataVendedores(consultarResultado);
    } catch (error) {
      throw error
    }
  }

  async function fetchDataProdutos() {
    try {
      const { consultarResultado } = await produtos();
      setDataProdutos(consultarResultado);
    } catch (error) {
      throw error;
    }
  }

  async function fetchAllDatas() {
    try {
      setLoading(true);
      await fechtDataClientes();
      await fetchDataCondicao();
      await fetchDataVendedores();
      await fetchDataProdutos();

    } catch (error) {
      window.alert('Ocorreu um erro ao buscar as informações');
    } finally {
      setLoading(false);
    }
  }

  async function fetchPost({ cliente, condicao_pagamento, vendedor, cgc }: Props) {
    try {
      setLoading(true);
      const data = moment().format('YYYYMMDD');
      const loja = cliente.slice(-2);

      await api.post('/PDVPEDI/v1', {
        FILIAL: "01",
        TIPO: "N",
        CLIENTE: cliente,
        LOJACLIENTE: loja,
        LOJAENTREGA: loja,
        EMISSAO: data,
        TIPOCLIENTE: cgc.length > 11 ? "J" : "F",
        CONDICAOPAG: condicao_pagamento,
        VENDEDOR1: vendedor,
        BANCO: " ",
        COMISSAO2: 0,
        TRANSPORTADORA: " ",
        PLACA: " ",
        DATA1: " ",
        PARCELA1: 0,
        DATA2: " ",
        PARCELA2: 0,
        TIPOFRETE: " ",
        PESOLIQUIDO: " ",
        PESOBRUTO: " ",
        VOLUME: 0,
        ESPECIE: " ",
        MENCAO: " ",
        OBSERVACAO: " ",
        ITENS: productsSelected
      });
    } catch (error) {

      if (!!error.response) {
        return window.alert(error.response.data.message);
      }

      return window.alert('Ocorreu um erro ao buscar as informações');
    } finally {
      setLoading(false);
    }
  }

  function handleAddProduct() {
    if (!getValues('produto')) return window.alert("Informe o produto");

    if (getValues('produto') === " ") return window.alert("Produto adicionado, altere o produto");

    if (!getValues('quantidade')) return window.alert("Informe o quantidade");

    if (!getValues('preco')) return window.alert("Informe o preço");

    if (!getValues('precounit')) return window.alert("Informe o precounit");

    const produto = {
      PRODUTO: getValues('produto'),
      QUANTIDADE: getValues('quantidade'),
      PRECO: getValues('preco'),
      PRECOUNIT: getValues('precounit'),
      VALOR: Number(getValues('quantidade')) * Number(getValues('preco')),
      TES: " "
    }

    setProductsSelected(prevState => [...prevState, produto]);
    setValue('produto', ' ');
    setValue('quantidade', 0);
    setValue('preco', 0);
    setValue('precounit', 0);
  }

  useEffect(() => {
    fetchAllDatas();
  }, [])

  return (
    <Container>
      {loading && <LoadingSpinner />}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Cliente" />
            <CustomSelect value={value} onChange={(e: any) => setValue("cliente", e.target.value)}>
              <option value=" ">Selecione um cliente</option>
              {dataClientes.map(cliente => (
                <option key={cliente.codlojaCliente} value={cliente.codlojaCliente}>{cliente.nomeCliente}</option>
              ))}
            </CustomSelect>
          </>
        )}
        name="cliente"
      />
      {errors.cliente && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Condição Pagamento" />
            <CustomSelect value={value} onChange={(e: any) => setValue("condicao_pagamento", e.target.value)}>
              <option value="">Selecione a condição</option>
              {dataCondicoes.map(condicao => (
                <option key={condicao.codigoCondicao} value={condicao.codigoCondicao}>{condicao.descricaoCondicao}</option>
              ))}
            </CustomSelect>
          </>
        )}
        name="condicao_pagamento"
      />
      {errors.condicao_pagamento && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Vendedor" />
            <CustomSelect value={value} onChange={(e: any) => setValue("vendedor", e.target.value)}>
              <option value="">Selecione o vendedor</option>
              {dataVendedores.map(vendedor => (
                <option key={vendedor.codigoVendedor} value={vendedor.codigoVendedor}>{vendedor.nomeVendedor}</option>
              ))}
            </CustomSelect>
          </>
        )}
        name="vendedor"
      />
      {errors.vendedor && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Documento" />
            <CustomInput placeholder="Sómente números" value={value} onChange={(e: any) => setValue("cgc", e.target.value)} />
          </>
        )}
        name="cgc"
      />
      {errors.cgc && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Produto" />
            <CustomSelect onChange={(e: any) => setValue("produto", String(e.target.value).trim())}>
              <option value=" ">Selecione o produto</option>
              {dataProdutos.map(produto => (
                <option key={produto.codigoProduto} value={produto.codigoProduto}>{produto.descricaoProduto}</option>
              ))}
            </CustomSelect>
          </>
        )}
        name="produto"
      />
      {errors.produto && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Quantidade" />
            <CustomInput defaultValue={0} value={value} onChange={(e: any) => setValue("quantidade", e.target.value)} />
          </>
        )}
        name="quantidade"
      />
      {errors.quantidade && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Preço" />
            <CustomInput defaultValue={0} value={value} onChange={(e: any) => setValue("preco", e.target.value)} />
          </>
        )}
        name="preco"
      />
      {errors.preco && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}


      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Preço unit" />
            <CustomInput defaultValue={0} value={value} onChange={(e: any) => setValue("precounit", e.target.value)} />
          </>
        )}
        name="precounit"
      />
      {errors.precounit && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

      <CustomButtom onClick={handleAddProduct} title="AdicionarProduto" />

      <ListProductsSelect>
        <CustomLabel title="Produtos selecionados" />
        {productsSelected.map(product => (
          <ResumeProduct>{product.PRODUTO}</ResumeProduct>
        ))}
      </ListProductsSelect>

      <ContainerButtons>
        <CustomButtom onClick={handleGoBack} style={{ marginRight: 10 }} title="Voltar" />
        <CustomButtom onClick={handleSubmit(fetchPost)} style={{ marginLeft: 10 }} title="Incluir" />
      </ContainerButtons>

      <Image src={logo} alt="logo" />
    </Container>
  )
}
import { Controller, useForm } from "react-hook-form";
import { CustomLabel } from "../../components/Label";
import { CustomSelect } from "../../components/Select";
import { Container, ContainerButtons, Image } from "./styles";
import { CustomButtom } from "../../components/Button";

import logo from '../../assets/logo.png'

import { useNavigate } from "react-router-dom";


type Props = {
  cliente: string;
  condicao_pagamento: string;
  forma_pagamento: string;
  produto: string;
  quantidade: string;
}

export function NewPedido() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Props>();

  function handleGoBack(){
    navigate('/');
  }

  return (
    <Container>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Cliente" />
            <CustomSelect value={value} onChange={(e: any) => setValue("cliente", e.target.value)} />
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
            <CustomSelect value={value} onChange={(e: any) => setValue("condicao_pagamento", e.target.value)} />
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
            <CustomLabel title="Forma Pagamento" />
            <CustomSelect value={value} onChange={(e: any) => setValue("forma_pagamento", e.target.value)} />
          </>
        )}
        name="forma_pagamento"
      />
      {errors.forma_pagamento && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}


      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CustomLabel title="Produto" />
            <CustomSelect value={value} onChange={(e: any) => setValue("produto", e.target.value)} />
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
            <CustomSelect value={value} onChange={(e: any) => setValue("quantidade", e.target.value)}><option>TESTE</option></CustomSelect>
          </>
        )}
        name="quantidade"
      />
      {errors.quantidade && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}
      <ContainerButtons>
          <CustomButtom onClick={handleGoBack} style={{marginRight: 10}} title="Voltar"/>
          <CustomButtom style={{marginLeft: 10}} title="Incluir"/>
      </ContainerButtons>

      <Image src={logo} alt="logo" />
    </Container>
  )
}
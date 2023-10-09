import { Container, ContainerFields, Image } from "./styles";
import { CustomInput } from "../../components/Input";
import { CustomButtom } from "../../components/Button";
import { CustomLabel } from "../../components/Label";
import { LoadingSpinner } from "../../components/Loading";

import logo from "../../assets/logo.png";

import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { api } from "../../config";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  codigo: string;
  senha: string;
};

export function Register() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm<Props>();

  const [loading, setLoading] = useState(false);
  const [isNotValid, setIsNotvalid] = useState(true);

  async function handleRegister({ codigo, senha }: Props) {
    try {
      setLoading(true);

      await api.post<AxiosResponse>(`/PDVUSER/v1`, {
        PEDIDO: {
          CODIGO: codigo,
          SENHA: senha,
        }
      });
      navigate('/');
    } catch (error: AxiosError | any) {
      if (!!error.response) {
        window.alert(error.response.data.messsage);
        return;
      }

      window.alert(error.message);
      return;
    } finally {
      setLoading(false);
    }
  }

  async function handleValidateCodigo(){
    
    if(!getValues('codigo')) return;

    const {data} = await api.get(`/PDVVLUSER/v1/?busca=${getValues('codigo')}`);
    
    if(!!data.ValidSenha){
      setIsNotvalid(true);
      return window.alert('Usuário já possuí senha na plataforma');
    }else{
      setIsNotvalid(false);
    }
   
  }

  function handleBack(){
    navigate('/');
  }

  return (
    <Container>
      <Image alt="logo" src={logo} />
      {loading && <LoadingSpinner />}
      <ContainerFields>
        <CustomLabel title="Código"/>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder="Insira seu código"
              onBlur={handleValidateCodigo}
              onChange={(e) => setValue("codigo", e.target.value)}
              value={value}
            />
          )}
          name="codigo"
        />
        {errors.codigo && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

        <CustomLabel title="Senha"/>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder="Insira sua senha"
              onBlur={onBlur}
              onChange={(e) => setValue("senha", e.target.value)}
              value={value}
              disabled={isNotValid}
              style={{ opacity: isNotValid ? 0.4 : 1}}
            />
          )}
          name="senha"
        />
        {errors.senha && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}
        <CustomButtom disabled={isNotValid} onClick={handleSubmit(handleRegister)} title="Registrar" />
        <CustomButtom onClick={handleBack} title="Voltar" />
      </ContainerFields>
    </Container>
  );
}

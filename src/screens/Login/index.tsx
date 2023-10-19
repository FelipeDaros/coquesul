import { Container, ContainerFields, Image, TitleRegister } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { CustomInput } from "../../components/Input";
import { CustomButtom } from "../../components/Button";
import logo from "../../assets/logo.png";
import { CustomLabel } from "../../components/Label";
import { LoadingSpinner } from "../../components/Loading";
import { useState } from "react";
import { api } from "../../config";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../contexts/AuthContext';



type Props = {
  login: string;
  senha: string;
};

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Props>();

  const [loading, setLoading] = useState(false);

  async function handleLogin({ login, senha }: Props): Promise<void> {
    try {
      setLoading(true);

      await signIn(login, senha);

    } catch (error: AxiosError | any) {
      if (!!error.response) {
        if (error.response.status === 401) return window.alert('Código ou senha incorretos!');
      }

      return;
    } finally {
      setLoading(false);
    }
  }

  function handleNavigateRegister() {
    navigate('register');
  }

  return (
    <Container>
      <Image alt="logo" src={logo} />
      {loading && <LoadingSpinner />}
      <ContainerFields>
        <CustomLabel title="Código" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder="Insira seu código"
              onBlur={onBlur}
              onChange={(e) => setValue("login", e.target.value)}
              value={value}
            />
          )}
          name="login"
        />
        {errors.login && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

        <CustomLabel title="Senha" />
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
              type="password"
            />
          )}
          name="senha"
        />
        {errors.senha && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}
        <CustomButtom onClick={handleSubmit(handleLogin)} title="Acessar" />
        <TitleRegister onClick={handleNavigateRegister}>Não possui uma conta ? Registre-se aqui!</TitleRegister>
      </ContainerFields>
    </Container>
  );
}

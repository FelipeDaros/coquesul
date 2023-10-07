import { Container, ContainerFields } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { CustomInput } from "../../components/Input";
import { CustomButtom } from "../../components/Button";
import logo from "../../assets/logo.png";
import { CustomLabel } from "../../components/Label";
import { LoadingSpinner } from "../../components/Loading";
import { useState } from "react";
import { api } from "../../config";
import { AxiosError, AxiosResponse } from "axios";

type Props = {
  login: string;
  senha: string;
};

export function Login() {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Props>();

  const [loading, setLoading] = useState(false);

  async function handleLogin({ login, senha }: Props) {
    try {
      setLoading(true);
      await api.post<AxiosResponse>(`www.google.com`, { login, senha });

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

  return (
    <Container>
      <img alt="logo" src={logo} />
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
              onBlur={onBlur}
              onChange={(e) => setValue("login", e.target.value)}
              value={value}
            />
          )}
          name="login"
        />
        {errors.login && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}

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
            />
          )}
          name="senha"
        />
        {errors.senha && <span style={{ color: '#FF5F56' }}>Campo obrigatório</span>}
        <CustomButtom onClick={handleSubmit(handleLogin)} title="Acessar" />
      </ContainerFields>
    </Container>
  );
}

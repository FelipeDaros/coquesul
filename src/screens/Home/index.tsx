import { useState } from "react";

import { Container, ContainerPedidos, Image } from "./styled";
import { CustomTitle } from "../../components/Title";
import { CardPedido } from "../../components/CardPedido";
import { CustomButtom } from "../../components/Button";

import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  
  const [pedidos, setPedidos] = useState([]);

  async function handleNavigate() {
    navigate('new');
  }

  return (
    <Container>
      <CustomTitle title="Listagem de pedidos" />
      <ContainerPedidos>
        {pedidos.map((pedido) => (
          <CardPedido
            key={pedido.id}
            title={pedido.titulo}
            status={pedido.status}
            email={pedido.email}
          />
        ))}
        {!pedidos.length && <p>Não há pedidos</p>}
      </ContainerPedidos>
      <CustomButtom onClick={handleNavigate} title="Incluir Pedido" />
      <Image src={logo} alt="logo" />
    </Container>
  )
}
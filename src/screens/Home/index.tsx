import { useState } from "react";

import { Container, ContainerPedidos, Image } from "./styled";
import { CustomTitle } from "../../components/Title";
import { CardPedido } from "../../components/CardPedido";
import { CustomButtom } from "../../components/Button";

import logo from '../../assets/logo.png'

export function Home() {
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      titulo: 'PEDIDO TRANSPORTE CARNE',
      email: 'felipe-daros@hotmail.com',
      status: 'ERROR'
    },
    {
      id: 2,
      titulo: 'PEDIDO TRANSPORTE BIFE',
      email: 'felipe-daros2@hotmail.com',
      status: 'SUCCESS'
    },
    {
      id: 3,
      titulo: 'FEFEFEFEFFE TRANSPORTE BIFE',
      email: 'felipe-daros2@hotmail.com',
      status: 'SUCCESS'
    },
    {
      id: 4,
      titulo: 'FEFEFEFEFFE TRANSPORTE BIFE',
      email: 'felipe-daros2@hotmail.com',
      status: 'SUCCESS'
    },
    {
      id: 5,
      titulo: 'FEFEFEFEFFE TRANSPORTE BIFE',
      email: 'felipe-daros2@hotmail.com',
      status: 'SUCCESS'
    },
    {
      id: 6,
      titulo: 'FEFEFEFEFFE TRANSPORTE BIFE',
      email: 'felipe-daros2@hotmail.com',
      status: 'SUCCESS'
    },
    {
      id: 7,
      titulo: 'FEFEFEFEFFE TRANSPORTE BIFE',
      email: 'felipe-daros2@hotmail.com',
      status: 'SUCCESS'
    }
  ]);

  async function handleNavigate() {

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
      </ContainerPedidos>
      <CustomButtom title="Incluir Pedido" />
      <Image src={logo} alt="logo" />
    </Container>
  )
}
import { Route, Routes } from "react-router-dom";
import { NewPedido } from "../screens/NewPedido";
import { Home } from "../screens/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="new" element={<NewPedido />} />
    </Routes>
  )
}
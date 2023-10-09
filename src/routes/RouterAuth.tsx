import { Route, Routes } from "react-router-dom";
import { NewPedido } from "../screens/NewPedido";
import { Home } from "../screens/Home";
import { useAuth } from "../contexts/AuthContext";

export function RouterAuth() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="new" element={<NewPedido />} />
    </Routes>
  )
}
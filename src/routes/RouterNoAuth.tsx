import { Route, Routes } from "react-router-dom";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { useAuth } from "../contexts/AuthContext";


export function RouterNoAuth() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

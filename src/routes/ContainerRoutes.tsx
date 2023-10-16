import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { RouterAuth } from "./RouterAuth";
import { RouterNoAuth } from "./RouterNoAuth";


export function ContainerRoutes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <RouterAuth />
    </BrowserRouter>
  )
}
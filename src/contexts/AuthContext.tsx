import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../config";


type AuthContextDataProps = {
  user: any;
  signIn(nome: string, senha: string): Promise<any>;
  signOut(): Promise<any>;
};

const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);


const AuthContextProvider: React.FC = ({ children }: any) => { 
  const [user, setUser] = useState<undefined>(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem("@COQUESUL:user");

      if (storagedUser) {
        const userParsed = JSON.parse(storagedUser);
        api.defaults.headers["Authorization"] = `Bearer ${userParsed.token}`;
        setUser(userParsed);
      }
    }

    loadStoragedData();
  }, []);

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  async function signIn(nome: string, senha: string) {
    try {
      const { data } = await api.post("/auth", {
        nome,
        senha,
      });

      api.defaults.headers["Authorization"] = `Bearer ${data.token}`;

      if (data) {
        const user = {
          ...data
        };

        localStorage.setItem("@COQUESUL:user", JSON.stringify(user));
        setUser(data);
      }

      return;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}


function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthContextProvider };
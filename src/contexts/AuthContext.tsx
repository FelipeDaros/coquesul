import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../config";


type AuthContextDataProps = {
  user: any;
  signIn(nome: string, senha: string): void;
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
        
        setUser(userParsed);
      }
    }

    loadStoragedData();
  }, []);

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  async function signIn(nome: string, senha: string): Promise<void> {
    try {
      // const { data } = await api.get(`/PDVUSER/v1?busca=${nome}&senha=${senha}`);
      const {body} = await fetch(`http://187.108.193.148:8085/REST/CYSYPV01/PDVUSER/v1?busca=${nome}&senha=${senha}`, {
        headers: {
          'Origin': 'https://coquesul.vercel.app/'
        }
      });

      if (body) {
        localStorage.setItem("@COQUESUL:user", JSON.stringify(body));
        //@ts-ignore
        setUser(body);
      }

      //@ts-ignore
      return body;
    } catch (error: any) {
      throw error;
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
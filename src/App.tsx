import { ThemeProvider } from 'styled-components'
import { AuthContextProvider, useAuth } from './contexts/AuthContext'
import { ContainerRoutes } from './routes/ContainerRoutes'

import theme from './theme'

function App() {
  return (
    //@ts-ignore
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <ContainerRoutes />
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default App

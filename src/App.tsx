import { RouterAuth } from './routes/RouterAuth'
import { RouterNoAuth } from './routes/RouterNoAuth'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { useAuth } from './contexts/AuthContext'

function App() {
  const {user} = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {!!user ? <RouterNoAuth /> : <RouterAuth />}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

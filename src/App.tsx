import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Home } from './screens/Home'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Home } from './screens/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  )
}

export default App

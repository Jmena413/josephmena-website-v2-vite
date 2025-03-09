import './App.css'
import theme from './Theme'
import { ThemeProvider, Typography } from '@mui/material'
import GlobalSelectionStyles from './GlobalSelectionStyles'
import Layout from './components/Layout'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalSelectionStyles/>
      <Layout/>
    </ThemeProvider>
  )
}

export default App;

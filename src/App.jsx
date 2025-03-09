import './App.css'
import theme from './Theme'
import { ThemeProvider, Typography } from '@mui/material'
import GlobalSelectionStyles from './GlobalSelectionStyles'
import Layout from './components/Layout'
import SpotlightEffect from './components/SpotlightEffect'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalSelectionStyles/>
      <SpotlightEffect/>
      <Layout/>
    </ThemeProvider>
  )
}

export default App;

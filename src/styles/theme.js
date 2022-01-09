import { ThemeProvider } from 'styled-components'
import Styles from './styles'
import theme from '../themes/default'

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Styles />
    {children}
  </ThemeProvider>
)
export default Theme
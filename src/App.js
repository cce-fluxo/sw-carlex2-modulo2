import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import GlobalStyle from './styles/global';
import Routes from './routes';
import {AuthProvider} from './contexts/AuthContext';
import Provider from './contexts/';
//import AddIncome from './pages/AddIncome';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Routes/>
      </Provider>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

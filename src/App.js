import './App.css';
import Routes from './Routes/routes';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme'
import GlobalStyle from './Styles/global';
import { AuthContextProvider } from './Storage/auth-context';

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Routes/>
        <GlobalStyle/>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;

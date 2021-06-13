import './App.css';
import Routes from './Routes/routes';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme'
import GlobalStyle from './Styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

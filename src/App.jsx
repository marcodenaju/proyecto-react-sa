import MaterialUi from "./materialUi/MaterialUi";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./themeConfig";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <MaterialUi />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

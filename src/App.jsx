import MaterialUi from "./materialUi/MaterialUi";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./themeConfig";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
    <CartContextComponent>
      <ThemeProvider theme={customTheme}>
        <MaterialUi />
        <AppRouter />
      </ThemeProvider>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;

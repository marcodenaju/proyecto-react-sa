import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./components/layout/navbar/Navbar";
import MaterialUi from "./materialUi/MaterialUi";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./components/themeconfig";
function App() {
  let saludo = "Juan";

  return (
    
    <div>
      <ThemeProvider theme={customTheme}>
      <Navbar />
      {/* <Home />
      <Login /> */}
      <ItemListContainer saludo={saludo} x={true} />
      <MaterialUi/>
      </ThemeProvider>
    </div>
  );
}

export default App;

import { Home } from "./components/pages/home/Home";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./components/layout/navbar/Navbar";
import MaterialUi from "./materialUi/MaterialUi";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import CounterContainer from "./components/common/counter/CounterContainer";
import { useState } from "react";
import FetchingData from "./components/pages/fetchingData/FetchingData";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
// import { FetchDos } from "./components/fetching/FetchDos";
// import { FetchUno } from "./components/fetching/FetchUno";
// import CustomModal from "./components/common/customModal/CustomModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";


function App() {
  let saludo = "Juan";

  const [montar, setMontar] = useState (false);

  return (
     <div>
{/* <ItemListContainer saludo={saludo} x={true} /> */}
      
      <BrowserRouter>
      <ThemeProvider theme={customTheme}>
      <Routes>
      <Route element={<Navbar/>}>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route 
        path="/category/:categoryName" 
        element={ <ItemListContainer /> } 
        />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/itemDetail/:id" element ={ <ItemDetailContainer /> } />

        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      <MaterialUi/>
      </ThemeProvider>
      </BrowserRouter>
      {/* <FetchUno />
      <FetchDos /> */}
   
      {/* <CounterContainer stock={5} />
      <CounterContainer stock={6}/> */}
      <FetchingData />
      {/* <CustomModal> 
        <CounterContainer />
      </CustomModal>

      <CustomModal>
        <ItemListContainer />
      </CustomModal> */}
    </div>
  );
};

export default App;

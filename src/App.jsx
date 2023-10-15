import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
  let saludo = "Juan";

  return (
    <div>
      <Navbar />
      {/* <Home />
      <Login /> */}
      <ItemListContainer saludo={saludo} x={true} />
    </div>
  );
}

export default App;

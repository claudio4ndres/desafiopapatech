import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header/header";
import Home from "./components/home";
import Producto from "./components/producto/producto";
import MenuCarro from "./components/header/menuCarro";
import Checkout from "./components/checkout/checkout";
import Exito from "./components/exito/exito";
import RootContenedor from "./styled";

function App() {
  const itemsCarro = useSelector((store) => store.items.carro);
  const menuEstado = useSelector((store) => store.items.abrirMenu);
  console.log("itemsCarro app", itemsCarro);
  return (
    <RootContenedor>
      <BrowserRouter>
        <MenuCarro items={itemsCarro} estado={menuEstado} />
        <div className="margin-container">
          <div className="row">
            <Header items={itemsCarro} />
          </div>
          <div className="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/producto" element={<Producto />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/exito" element={<Exito />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </RootContenedor>
  );
}

export default App;

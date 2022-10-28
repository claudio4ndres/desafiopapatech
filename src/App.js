import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home";
import Producto from "./components/producto/producto";
import MenuCarro from "./components/header/menuCarro";
import RootContenedor from "./styled";

function App() {
  return (
    <RootContenedor>
      <MenuCarro/>
      <div className="margin-container">
        <BrowserRouter>
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/producto" element={<Producto />} />
              <Route path="/checkout" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </RootContenedor>
  );
}

export default App;

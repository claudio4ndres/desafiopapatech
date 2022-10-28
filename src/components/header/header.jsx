import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import agregarformatoPesos from "../../utils";
import banner from "../../assets/Nintendo-amiibo-Lineup.jpg"
import { HeaderContenedor } from "./styled";

const Header = () => {
    //obtenemos el producto en redux selecionado
  const itemsCarro = useSelector((store) => store.items.carro);

  const [precioTotal, setPrecioTotal] = useState("");
  const [productoState, setProductoState] = useState("");
  
   const carroDeCompras = () =>{
    let productos = [];
    let preciototal = [];
    let total = 0;
    for(let x = 0; x < itemsCarro.length; x++){
      if(x % 2 === 0){
       productos.push(itemsCarro[x])
       setProductoState(productos);
      }else{
        total = total+itemsCarro[x].valor*itemsCarro[x].cantidad;
        preciototal.push(total);
        setPrecioTotal(total);
      }
    }
   }

  useEffect(() => {
      carroDeCompras()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsCarro])

  return (
    <HeaderContenedor>
      <nav className="navbar">
        <div className="menu-top">
          <ul>
            <li>
              <a href="/cart">
                <span className="carrito-contador">{productoState.length}</span>
                <span className="carrito-monto">
                  <span className="monto">{agregarformatoPesos(precioTotal)}</span>
                </span>
              </a>
            </li>
            <li>
              <a href="/cart">
                <span className="buscador">buscar</span>
              </a>
            </li>
          </ul>
        </div>
        <img src={banner} alt="banner-imagen" className="banner-imagen"/>
        <div className="menu-bottom">
          <span>Categorias</span>
          <ul className="nav-links">
           <li><a href="#">Figure</a></li>
           <li><a href="#">Card</a></li>
           <li><a href="#">Yarn</a></li>
          </ul>
        </div>
      </nav>
    </HeaderContenedor>
  );
};

export default Header;

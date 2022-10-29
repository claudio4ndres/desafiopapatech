import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { abrirMenuAction } from "../../redux/amiibo";
import agregarformatoPesos from "../../utils";
import banner from "../../assets/Nintendo-amiibo-Lineup.jpg"
import { HeaderContenedor } from "./styled";

const Header = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const [precioTotal, setPrecioTotal] = useState("");
  const [productoState, setProductoState] = useState("");
  
   const carroDeCompras = () =>{
    let productos = [];
    let preciototal = [];
    let total = 0;
    if(items.length === 0){
      setPrecioTotal(0)
      setProductoState([])
    }else{
      for(let x = 0; x < items.length; x++){
        if(x % 2 === 0){
        productos.push(items[x])
        setProductoState(productos);
        }else{
          total = total+items[x].valor*items[x].cantidad;
          preciototal.push(total);
          setPrecioTotal(total);
        }
      }
    }
   }
   
   //Abrimos menu
   const handlderMenu = () =>{
    dispatch(abrirMenuAction(true));
   }

  useEffect(() => {
      carroDeCompras();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <HeaderContenedor>
      <nav className="navbar">
        <div className="menu-top">
          <ul>
            <li>
              <button onClick={()=>handlderMenu(true)}>
                <span className="carrito-contador">{productoState.length}</span>
                <span className="carrito-monto">
                  <span className="monto">{agregarformatoPesos(precioTotal)}</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
        <img src={banner} alt="banner-imagen" className="banner-imagen"/>
      </nav>
    </HeaderContenedor>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actualizarProductoAction, abrirMenuAction, checkoutEstadoAction } from "../../redux/amiibo";
import agregarformatoPesos from "../../utils";
import { MenuCarroContenedor } from "./styled";

const MenuCarro = (props) => {
  const { items, estado, checkoutEstados } = props;
  console.log("checkoutEstado",checkoutEstados)
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const itemsCarro = items;
  const [menu, setMenu] = useState(false);
  const [precioTotal, setPrecioTotal] = useState("");
  const [productoState, setProductoState] = useState([]);
  const [datosExtras, setDatosExtras] = useState([]);

  //Carro de Compras
  const carroDeCompras = () => {
    let productos = [];
    let preciototal = [];
    let datosExtras = [];
    let total = 0;
    for (let x = 0; x < itemsCarro.length; x++) {
      if (x % 2 === 0) {
        productos.push(itemsCarro[x]);
        setProductoState(productos);
      } else {
        total = total + itemsCarro[x].valor * itemsCarro[x].cantidad;
        preciototal.push(total);
        datosExtras.push(itemsCarro[x]);
        setPrecioTotal(total);
        setDatosExtras(datosExtras);
      }
    }
  };

  //Actualizamos Carro
  const contadorProducto = (opcion, id) => {
    let filtro = itemsCarro.filter((itemsTail) => itemsTail.tail === id);
    let nuevoCarro = itemsCarro;

    let cantidad = filtro[1].cantidad;
    if (opcion === "menos") {
      if (filtro[1].cantidad === 1) {
        cantidad = 1;
      } else {
        cantidad = cantidad - 1;
      }
    } else {
      cantidad = cantidad + 1;
    }

    nuevoCarro.map(function (dato) {
      if (dato.tail === id) {
        dato.cantidad = cantidad;
      }
      return dato;
    });

    dispatch(actualizarProductoAction(nuevoCarro));
    carroDeCompras();
  };

  //obtenemos cantidad del producto
  const cantidad = (tail) => {
    const filtroDatosExtras = datosExtras.filter(
      (itemsTail) => itemsTail.tail === tail
    );
    return filtroDatosExtras[0].cantidad;
  };

  //obtenemos precio del producto
  const precio = (tail) => {
    const filtroDatosExtras = datosExtras.filter(
      (itemsTail) => itemsTail.tail === tail
    );
    const total = filtroDatosExtras[0].valor * filtroDatosExtras[0].cantidad;
    return agregarformatoPesos(total);
  };

  //Checkout
  const handlerCheckout = () => {
    dispatch(checkoutEstadoAction(true));
    navigate("/checkout");
  };

  //Abrimos menu
  const handlerAbrirMenu = () => {
    setMenu(true);
  };

  //Cerramos Menu
  const handlerCerrarCArrito = () => {
    setMenu(false);
    dispatch(abrirMenuAction(false));
  };

  //borrar producto del carro
  const hanlderBorrar = (id) => {
    const eliminarProductos = itemsCarro.filter(
      (producto) => producto.tail !== id
    );
    dispatch(actualizarProductoAction(eliminarProductos));
    carroDeCompras();
  };

  useEffect(() => {
    if (itemsCarro.length !== 0) {
      handlerAbrirMenu();
    }
    carroDeCompras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsCarro]);

  useEffect(() => {
    if (estado) {
      handlerAbrirMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estado]);

  return (
    <MenuCarroContenedor>
      <div className={menu ? "menu dentro" : "menu fuera"}>
        <div className="header-menu">
          <div className="row">
            <h2>Mi Carrito</h2>
          </div>
          <div className="row">
            <button
              className="btn-cerrar-carrito"
              onClick={() => handlerCerrarCArrito()}
            >
              X
            </button>
          </div>
        </div>

        {itemsCarro.length === 0 ? (
          <div>
            <p>Tu bolsa está vacía</p>
          </div>
        ) : (
          <>
            <div className="menu-listado">
              {productoState.map((item, index) => (
                <article key={index} className="card-menu">
                  <div className="imagen-card-menu">
                    <img src={item.image} alt={item.amiiboSeries} />
                  </div>
                  <div className="text">
                    <h3>{item.amiiboSeries}</h3>
                    <p>{precio(item.tail)}</p>
                    
                    <div className={checkoutEstados ? "contenedor-contador ocultar": "contenedor-contador"}>
                      <button
                        onClick={() => contadorProducto("menos", item.tail)}
                      >
                        -
                      </button>
                      <div className="contador-producto">
                        {cantidad(item.tail)}
                      </div>
                      <button
                        onClick={() => contadorProducto("mas", item.tail)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={checkoutEstados? "btn-borrar ocultar": "btn-borrar"}
                      onClick={(e) => hanlderBorrar(item.tail)}
                    >
                      Borrar
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p className="total">Total: {agregarformatoPesos(precioTotal)}</p>
            
               <div className={checkoutEstados ? "checkout ocultar": "checkout"}>
               <button onClick={(e) => handlerCheckout()}>Checkout</button>
             </div>
            
           
          </>
        )}
      </div>
    </MenuCarroContenedor>
  );
};

export default MenuCarro;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutAction, limpiarCarroAction } from "../../redux/amiibo";
import agregarformatoPesos from "../../utils";
import CheckoutContenedor from "./styled";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [precioTotal, setPrecioTotal] = useState("");
  const [productoState, setProductoState] = useState([]);
  const [datosExtras, setDatosExtras] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [casoBorde, setCasoBorde] = useState("");
  const carro = useSelector((store) => store.items.carro);

  //Carro de Compras
  const carroDeCompras = () => {
    let productos = [];
    let preciototal = [];
    let datosExtras = [];
    let total = 0;
    for (let x = 0; x < carro.length; x++) {
      if (x % 2 === 0) {
        productos.push(carro[x]);
        setProductoState(productos);
      } else {
        total = total + carro[x].valor * carro[x].cantidad;
        preciototal.push(total);
        datosExtras.push(carro[x]);
        setPrecioTotal(total);
        setDatosExtras(datosExtras);
      }
    }
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

  //Volver atras
  const handlerVolver = () => {
    navigate("/");
  };

  //Final flujo
  const handlerFinalizar = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      apellido === "" ||
      telefono === "" ||
      direccion === ""
    ) {
      setCasoBorde(true);
    } else {
       setCasoBorde(false);
      const datosCliente = {
        nombre,
        apellido,
        telefono,
        direccion,
      };
      dispatch(checkoutAction(datosCliente));
      dispatch(limpiarCarroAction([]))
      navigate("/exito");
    }
  };

  const handlerControladorInput = (e, tipo) => {
    switch (tipo) {
      case "nombre":
        setNombre(e);
        break;
      case "apellido":
        setApellido(e);
        break;
      case "direccion":
        setDireccion(e);
        break;
      case "telefono":
        setTelefono(e);
        break;
      default:
    }
  };

  useEffect(() => {
    carroDeCompras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CheckoutContenedor>
      <section>
        <h2>Checkout</h2>
        <form className="checkout-form">
          <div className="container">
            <label>
              <p>Nombre</p>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                required
                onChange={(e) =>
                  handlerControladorInput(e.target.value, "nombre")
                }
                value={nombre}
              />
            </label>
            <label>
              <p>Apellido</p>
              <input
                type="text"
                placeholder="Ingrese apellido"
                name="apellido"
                required
                onChange={(e) =>
                  handlerControladorInput(e.target.value, "apellido")
                }
                value={apellido}
              />
            </label>
            <label>
              <p>Direccion</p>
              <input
                type="text"
                placeholder="Ingrese Direccion"
                name="direccion"
                required
                onChange={(e) =>
                  handlerControladorInput(e.target.value, "direccion")
                }
                value={direccion}
              />
            </label>
            <label>
              <p>Telefono</p>
              <input
                type="text"
                placeholder="Ingrese numero de telefono"
                name="telefono"
                required
                onChange={(e) =>
                  handlerControladorInput(e.target.value, "telefono")
                }
                value={telefono}
              />
            </label>
          </div>
         <p className="caso-borde">{casoBorde?"Todos los campos son obligatorios": ""}</p>
          <div className="btn-acciones">
            <button className="volver" onClick={() => handlerVolver()}>
              Volver
            </button>
            <button className="finalizar" onClick={(e) => handlerFinalizar(e)}>
              Finalizar
            </button>
          </div>
        </form>
      </section>
      <section>
        <div className="menu-listado-checkout">
          {productoState.map((item, index) => (
            <article key={index} className="card-menu-checkout">
              <div className="imagen-card-menu-checkout">
                <img src={item.image} alt={item.amiiboSeries} />
              </div>
              <div className="text-checkout">
                <h3>{item.amiiboSeries}</h3>
                <p className="precio">Precio: {precio(item.tail)}</p>
                <p className="cantidad">Cantidad: {cantidad(item.tail)}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="total">Total: {agregarformatoPesos(precioTotal)}</p>
      </section>
    </CheckoutContenedor>
  );
};

export default Checkout;

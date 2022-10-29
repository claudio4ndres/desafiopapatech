import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { agregarProductoAction } from "../../redux/amiibo";
import agregarformatoPesos from "../../utils";
import ProductoContenedor from "./styled";

const Producto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contador, setContador] = useState(1);
  const [precioState, setPrecioState] = useState("");
  const [, setProductoAgregado] = useState(true);
  const [volverAgregar, setVolverAgregar] = useState(true);
  //obtenemos el producto en redux selecionado
  const producto = useSelector((store) => store.items.producto);
  //data del carro
  const carro = useSelector((store) => store.items.carro);
  //numero random
  let precio = Math.floor(Math.random() * 23323);

  //Si no tenemos productos volvemos al home
  useEffect(() => {
    if (producto.length === 0) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [producto]);

  const pre = () => {
    if (precio !== precioState) {
      setPrecioState(precio);
    }
  };

  useEffect(() => {
    pre(precio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  //Contador de productos
  const contadorProducto = (opcion) => {
    if (opcion === "menos") {
      if (contador === 1) {
        setContador(1);
      } else {
        setContador(contador - 1);
      }
    } else {
      setContador(contador + 1);
    }
  };

  //Agregamos al carrito
  const handlderAgregarAlCarrito = () => {
    //Flag para volver agregar al carrito
    if (volverAgregar) {
      let valoresExtra = {
        cantidad: contador,
        valor: precioState,
        tail: producto[0].tail,
      };
      producto.push(valoresExtra);
    }

    //Array carro le concatenamos producto
    let carritoArray = carro.concat(producto);

    //consultamos si el producto esta repetido
    const productoRepetido = carritoArray.filter(
      (itemsTail) => itemsTail.tail === producto[0].tail
    );
  
    if (productoRepetido.length === 2) {
      if (producto[1] === undefined) {
        setProductoAgregado(false);
        dispatch(agregarProductoAction(carritoArray));
      } else {
        producto[1].cantidad = contador;
        producto[1].valor = precioState;
        dispatch(agregarProductoAction(carritoArray));
        setProductoAgregado(false);
      }
    }
    setVolverAgregar(false);
  };

  const handlerVolver = () => {
    navigate("/");
  };

  //Volvemos al Home si no tenemos datos
  if(producto[0] === undefined){
    return handlerVolver();
  }

  return (
    <ProductoContenedor>
      <div className="volver">
        <button onClick={() => handlerVolver()}>volver</button>
      </div>
      <div className="row-imagen">
        <img
          className="producto-imagen"
          src={producto[0].image}
          alt={producto[0].amiiboSeries}
        />
      </div>
      <div className="row info">
        <section className="producto-cabecera">
          <h1>{producto[0].name}</h1>
          <p className="sku-contenedor">
            <span className="sku-label">SKU:</span>
            <span>{producto[0].tail}</span>
          </p>
          <p className="descripcion-producto">
            <span className="sku-label">AmiiboSeries:</span>
            <span>{producto[0].amiiboSeries}</span>
          </p>
          <p className="descripcion-producto">
            <span className="descripcion-label">Character:</span>
            <span>{producto[0].character}</span>
          </p>
          <p className="descripcion-producto">
            <span className="descripcion-label">GameSeries:</span>
            <span>{producto[0].gameSeries}</span>
          </p>
          <p className="descripcion-producto">
            <span className="descripcion-label">type:</span>
            <span>{producto[0].type}</span>
          </p>
          <p className="precio">Precio: {agregarformatoPesos(precioState)}</p>
          <div className="agregar-al-carrito">
            <div className="row contador">
              <button onClick={(e) => contadorProducto("menos")}>-</button>
              <div className="contador-producto">{contador}</div>
              <button onClick={(e) => contadorProducto("mas")}>+</button>
            </div>
            <div className="row">
              <button
                className="boton-carrito"
                onClick={() => handlderAgregarAlCarrito()}
              >
                Agregar al carro
              </button>
            </div>
          </div>
        </section>
      </div>
    </ProductoContenedor>
  );
};

export default Producto;

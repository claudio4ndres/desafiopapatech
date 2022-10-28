import React, { useEffect, useState } from "react";
import { obtenerAmiiboAction, guardarProductoAction } from "../redux/amiibo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import cargando from "../assets/switch_console_cartridge.gif";

import { ContainerHome } from "./styled";

const Home = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate()

  const [items, setItemsCarrito] = useState([]);
  const [paginaSeleccionada, setPaginaSeleccionada] = useState(1);
  const [itemsPorPaginas] = useState(28);
  const itemsCarrito = useSelector((store) => store.items.amiibos);

  useEffect(() => {
    dispatch(obtenerAmiiboAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setItemsState = (itemsCarrito) => {
    setItemsCarrito(itemsCarrito);
  };

  useEffect(() => {
    if (itemsCarrito) {
      setItemsState(itemsCarrito);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsCarrito]);

  //Paginador
  const handlerPaginas = (e) => {
    setPaginaSeleccionada(Number(e.target.id));
  };

  const indexOfDespuesItems = paginaSeleccionada * itemsPorPaginas;
  const indexOfAntesItems = indexOfDespuesItems - itemsPorPaginas;
  const currentTodos = items.slice(indexOfAntesItems, indexOfDespuesItems);

  const numeroDePaginas = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPorPaginas); i++) {
    numeroDePaginas.push(i);
  }

  const CantidadDePaginas = numeroDePaginas.map((numero) => {
    return (
      <li
        key={numero}
        id={numero}
        className={paginaSeleccionada === numero? "active" : "" }
        onClick={(e) => handlerPaginas(e)}
      >
        {numero}
      </li>
    );
  });

//Fin paginador


 const handlerVerProducto = (tailProducto) =>{
   const filtroDeProducto = items.filter(itemsTail => itemsTail.tail === tailProducto);
   dispatch(guardarProductoAction(filtroDeProducto));
   navigate("/producto");
 }


  return (
    <ContainerHome>
      <div className="contenedor-items">
        {items.length === 0 ? (
          <div className="loader-home">
            <img src={cargando} alt="cargando-amiibo" />
          </div>
        ) : (
          <section className="cards">
            {currentTodos.map((item, index) => (
              <article key={index} className="card">
                <div className="imagen-card">
                  <img src={item.image} alt={item.amiiboSeries} />
                </div>
                <div className="text">
                  <h3>{item.amiiboSeries}</h3>
                  <p>name: {item.name}</p>
                  <p>character: {item.character}</p>
                  <p>gameSeries: {item.gameSeries}</p>
                  <button onClick={() => handlerVerProducto(item.tail)}>ver producto</button>
                </div>
              </article>
            ))}
          </section>
        )}
        <div className="contenedor-paginador">
          <ul>{CantidadDePaginas}</ul>
        </div>
      </div>
    </ContainerHome>
  );
};

export default Home;

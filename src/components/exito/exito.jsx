import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import exitoImagen from "../../assets/exito.gif";
import ExitoContenedor from "./styled";

const Exito = () => {
  const navigate  = useNavigate();
  
  const checkout = useSelector((store) => store.items.checkout);
  let nombreCompleto = checkout.nombre+' '+checkout.apellido;

  const handlerVolver = () =>{
    navigate("/")
  }

  return (
    <ExitoContenedor>
      <div className="contenedor-exito">
         <h2>¡Felicitaciones {nombreCompleto} tu compra fue exitosa!</h2>
         <img src={exitoImagen} alt="exito-imagen" />
         <button className="btn-volver" onClick={()=>handlerVolver()}>Volver al home</button>
      </div>
    </ExitoContenedor>
  )
};
export default Exito;

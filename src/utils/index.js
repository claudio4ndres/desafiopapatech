/**
*  Este método recibe una cadena numerica, retorna la 
*  cadena con formato de moneda local CLP.
*/
const agregarformatoPesos = (numero) => {
    const formatter = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP"
    });
    return formatter.format(numero);
  }

  export default agregarformatoPesos;
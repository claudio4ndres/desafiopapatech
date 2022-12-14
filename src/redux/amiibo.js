import axios from "axios";

//constantes
const dataInicial = {
  amiibos: [],
  producto: [],
  carro: [],
  abrirMenu: false,
  checkout: {},
  checkoutEstado: false,
};

//tipos

const OBTENER_AMIIBO = "OBTENER_AMIIBO";
const GUARDAR_PRODUCTO_SELECCIONADO = "GUARDAR_PRODUCTO_SELECCIONADO";
const AGREGAR_PRODUCTO_CARRO = "AGREGAR_PRODUCTO_CARRO";
const ACTUALIZAR_CARR0 = "ACTUALIZAR_CARR0";
const ABRIR_MENU = "ABRIR_MENU";
const CHECKOUT = "CHECKOUT";
const CHECKOUT_ESTADO = "CHECKOUT_ESTADO";
const LIMPIAR_CARRO = "LIMPIAR_CARRO";

//reducer

export default function amiiboReducer(state = dataInicial, action) {
  switch (action.type) {
    case "OBTENER_AMIIBO":
      return { ...state, amiibos: action.payload };
    case "GUARDAR_PRODUCTO_SELECCIONADO":
      return { ...state, producto: action.payload };
    case "AGREGAR_PRODUCTO_CARRO":
      return { ...state, carro: action.payload };
    case "ACTUALIZAR_CARR0":
      return { ...state, carro: action.payload };
    case "ABRIR_MENU":
      return { ...state, abrirMenu: action.payload };
    case "CHECKOUT":
      return { ...state, checkout: action.payload };
    case "LIMPIAR_CARRO":
      return { ...state, carro: action.payload };
    case "CHECKOUT_ESTADO":
      return { ...state, checkoutEstado: action.payload };
    default:
      return state;
  }
}

//acciones

export const obtenerAmiiboAction = () => async (dispach, getState) => {
  try {
    const res = await axios.get("https://www.amiiboapi.com/api/amiibo");
    dispach({
      type: OBTENER_AMIIBO,
      payload: res.data.amiibo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const guardarProductoAction =
  (producto) => async (dispach, getState) => {
    dispach({
      type: GUARDAR_PRODUCTO_SELECCIONADO,
      payload: producto,
    });
  };

export const agregarProductoAction =
  (producto) => async (dispach, getState) => {
    dispach({
      type: AGREGAR_PRODUCTO_CARRO,
      payload: producto,
    });
  };

export const actualizarProductoAction =
  (actualizar) => async (dispach, getState) => {
    dispach({
      type: ACTUALIZAR_CARR0,
      payload: actualizar,
    });
  };

export const abrirMenuAction = (menu) => async (dispach, getState) => {
  dispach({
    type: ABRIR_MENU,
    payload: menu,
  });
};

export const checkoutAction = (checkout) => async (dispach, getState) => {
  dispach({
    type: CHECKOUT,
    payload: checkout,
  });
};

export const limpiarCarroAction = (limpiar) => async (dispach, getState) => {
  dispach({
    type: LIMPIAR_CARRO,
    payload: limpiar,
  });
};

export const checkoutEstadoAction =
  (checkoutEstado) => async (dispach, getState) => {
    dispach({
      type: CHECKOUT_ESTADO,
      payload: checkoutEstado,
    });
  };

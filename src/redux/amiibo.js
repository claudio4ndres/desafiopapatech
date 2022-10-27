import axios from 'axios';

//constantes
 const dataInicial = {
     array: []
 }

//tipos

const OBTENER_AMIIBO = "OBTENER_AMIIBO";

//reducer

export default function amiiboReducer (state = dataInicial, action){
     switch(action.type){
        case 'OBTENER_AMIIBO':
            return { ...state, array: action.payload}
        default:
        return state
     }
}

//acciones

export const obtenerAmiiboAction = () => async (dispach, getState) => {
    try{
    const res = await axios.get(process.env.REACT_APP_URL_API);
    dispach({
        type: OBTENER_AMIIBO,
        payload: res.data.amiibo
    })
    } catch (error){
       console.log(error) 
    }

}
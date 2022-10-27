import React, { useEffect } from 'react';
import { obtenerAmiiboAction } from '../redux/amiibo';
import { useDispatch , useSelector} from 'react-redux';

const Home = () => {
 const dispatch = useDispatch();

  return (
     <section>
         soy el home
         <button onClick={() => dispatch(obtenerAmiiboAction()) }>obtener amiiboo</button>
     </section>
  )
}

export default Home;
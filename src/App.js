import './App.css';
import Home from './components/home';
import { Provider } from 'react-redux';
import generateStore from './redux/store';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;

import './App.css';
import NavbarComponent from './components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer.jsx';
import ItemDetailContainer from './container/ItemDetailContainer';
import Carrito from './container/Carrito';
import Contactos from './container/Contactos';
import {CartProvider} from './context/CartContexto';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <CartProvider>
      <NavbarComponent/>
      <Switch>
          <Route exact path="/">
          <ItemListContainer greeting={'Bienvenidos'}/>
          </Route>
          <Route exact path="/category/:idCategoria">
          <ItemListContainer greeting={'Bienvenidos'}/>
          </Route>
          <Route exact path="/producto/:idProducto">
          <ItemDetailContainer/>
          </Route>
          <Route path="/contactos">
          <Contactos/>
          </Route>

          <Route path="/carrito">
          <Carrito/>
          </Route>
        </Switch>
    </CartProvider>
    </Router>
  );
}


export default App;

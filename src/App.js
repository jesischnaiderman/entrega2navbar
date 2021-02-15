import './App.css';
import NavbarComponent from './components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer.jsx';
import ItemDetailContainer from './container/ItemDetailContainer';
import Carrito from './container/Carrito';
import Contactos from './container/Contactos';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>

      <NavbarComponent/>
      <Switch>
          <Route exact path="/">
          <ItemListContainer greeting={'Bienvenidos'}/>
          </Route>
          <Route exact path="/category/:idCategoria">
          <ItemListContainer greeting={'Bienvenidos'}/>
          </Route>
          <Route exact path="/category/producto/:idProducto">
          <ItemDetailContainer/>
          </Route>
          <Route path="/contactos">
          <Contactos/>
          </Route>

          <Route path="/carrito">
          <Carrito/>
          </Route>
        </Switch>
      
    </Router>
  );
}


export default App;

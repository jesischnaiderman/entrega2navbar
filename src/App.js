import './App.css';
import NavbarComponent from './components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer.jsx';
import ItemDetailContainer from './container/ItemDetailContainer';
function App() {
  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;

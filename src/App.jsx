import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/ejemplos/Contador';
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer greeting= {"Bienvenidos a Mi sitio E-commerce"} />

      <Contador />
    </div>
  )
}

export default App

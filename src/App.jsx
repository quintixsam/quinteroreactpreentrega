import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import contador from './components/contador';
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer greeting= {"Bienvenidos a Mi sitio E-commerce"} />

      <contador />
    </div>
  )
}
export default App

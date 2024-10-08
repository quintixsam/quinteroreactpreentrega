import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer greeting= {"Bienvenidos a Mi sitio E-commerce"} />
    </div>
  )
}
export default App

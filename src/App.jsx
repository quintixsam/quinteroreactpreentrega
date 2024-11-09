import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
      <NavBar />

      <Routes>
      <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a Mi sitio E-commerce"} /> } />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={"Bienvenidos a Mi sitio E-commerce"} />}/>
      <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

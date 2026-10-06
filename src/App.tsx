

import { Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header";
import Navbar from "./components/organisms/Navbar";
import Inicio from "./assets/pages/Inicio";
import Productos from "./assets/pages/Productos";
import Footer from "./components/organisms/Footer";
import Contactos from "./assets/pages/Contactos";
import DetalleProducto from "./assets/pages/DetalleProducto";




function App(){
  return(
    <>
      <Navbar/>

      <Routes>

        <Route 
        path="/"
        element={<Inicio/>}

        />
        <Route
        path="/productos"
        element={<Productos/>}
        />

        <Route
        path="/contactos"
        element={<Contactos/>}
        />
        
        <Route
        path="/producto/:id"
        element = {<DetalleProducto/>}
        />

      </Routes>

      <Footer/>

    </>
  )
  
}



export default App;
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-white py-3 mt-auto">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="mb-0">
          © {new Date().getFullYear()} Mitienda. Todos los derechos reservados.
        </span>
        
        <p> Contactos +56 930722838</p>
    
        </div>
     
    </footer>
  );
}

export default Footer;
import React from "react";
import './styles/main.scss'

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Contacto from "./pages/Contacto/Contacto";
import Nosotros from "./pages/Equipo/Nosotros";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Catalogo from "./pages/Catalogo/Catalogo";

import { ThemeProvider } from './context/ThemeProvider';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";






function App() {
  return (
    <div className="App">
     <ThemeProvider>
        <Router>
          <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalogo" element={<Catalogo />} />
                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
            <Footer />
        </Router>
     </ThemeProvider>
    </div>
  );
}
export default App;
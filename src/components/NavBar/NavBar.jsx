import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cadastrar">Cadastrar Séries</Link></li>
        <li><Link to="/lista">Lista de Séries</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
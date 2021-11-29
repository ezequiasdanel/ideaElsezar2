import { Fragment } from 'react';
import './index.css';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Fragment>
      <header className="header" >
      <Link to="/" className="header-logo">Control+Alt+Suprimir Informatica</Link>
        <nav className="header-nav">
          <Link to="/"className="header-link">Home</Link>
          <Link to="/Productos"className="header-link">Productos</Link>
          <Link to="/Soporte"className="header-link">Soporte</Link>
        </nav>
        <Link to ="/Cart"><CardWidget/></Link>
      </header>
    </Fragment>
  );
}

export default Header;

import { Fragment } from 'react';
import './index.css';
import CardWidget from '../CardWidget/CardWidget';

function Header() {
  return (
    <Fragment>
      <header className="header" >
      <a herf="" className="header-logo">Control+Alt+Suprimir Informatica</a>
        <nav className="header-nav">
          <a herf=" "className="header-link">Home</a>
          <a herf=" "className="header-link">Componentes</a>
          <a herf=" "className="header-link">Quienes Somos</a>
          <a herf=" "className="header-link">Soporte</a>
        </nav>
        <CardWidget/>
      </header>
    </Fragment>
  );
}

export default Header;

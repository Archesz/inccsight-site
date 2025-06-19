import './Header.scss';
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"><img src={logo} className='logo'/></div>
        <nav>
          <a href="#about">Sobre</a>
          <a href="#features">Funcionalidades</a>
          <a href="#download">Download</a>
        </nav>
      </div>
    </header>
  );
}

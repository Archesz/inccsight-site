import './Header.scss';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"><img src={logo} className='logo' alt="InCCsight Logo" /></div>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
        </nav>
      </div>
    </header>
  );
}

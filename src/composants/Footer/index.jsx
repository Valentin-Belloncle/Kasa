import './index.module.scss';
import logo from '../../assets/logo_white.png';

function Footer() {
    return (
      <footer>
        <img src={logo} alt="Logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
  export default Footer
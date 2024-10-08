import "./index.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div>
				<img src={logo} alt="Logo Kasa" />
			</div>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/about">A Propos</Link>
			</nav>
		</header>
	);
}

export default Header;

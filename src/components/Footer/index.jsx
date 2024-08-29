import styles from "./index.module.scss";
import logo from "../../assets/logo_white.png";

function Footer() {
	return (
		<footer>
			<img src={logo} alt="Logo de Kasa" />
			<p className={styles.copyright}>
				<span>© 2020 Kasa. All</span>
				<span> rights reserved</span>
			</p>
		</footer>
	);
}

export default Footer;

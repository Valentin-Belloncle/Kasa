import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Error() {
	return (
		<main className={styles.errorCode}>
			<h1>404</h1>
			<h2>
				<span>Oups! La page que</span>
				<span> vous demandez n'existe pas.</span>
			</h2>
			<Link to="/">Retourner sur la page d’accueil</Link>
		</main>
	);
}

export default Error;

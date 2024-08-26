import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Card({ id, cover, title, description }) {
	return (
		<Link to={`/property/${id}`} className={styles.card}>
			<article className={styles.gallery__card} key={id}>
				<img src={cover} alt={description} />
				<p>{title}</p>
			</article>
		</Link>
	);
}

export default Card;

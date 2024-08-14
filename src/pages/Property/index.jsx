import { useParams } from "react-router-dom";
import Slideshow from "../../composants/Slideshow";
import styles from "./index.module.scss";

function Property() {
	const { id } = useParams();
  
	return (
		<div className={styles.about}>
			<Slideshow id={id} />
		</div>
	);
}

export default Property;

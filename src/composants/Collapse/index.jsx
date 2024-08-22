import { useState } from "react";
import styles from "./index.module.scss";

function Collapse({ title, content, property }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<article className={styles.collapse}>
			<div className={`${styles.collapse__topbar} ${styles[property]}`}>
				<h3 className={styles[property]}>{title}</h3>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={styles[isOpen ? "open" : ""]}
				>
					<i class="fa-solid fa-chevron-up"></i>
				</button>
			</div>
			<div
				className={`${styles.collapse__content} ${
					styles[isOpen ? "open" : ""]
				}`}
			>
				{content}
			</div>
		</article>
	);
}

export default Collapse;

import { useState } from "react";
import styles from "./index.module.scss";

function Collapse({ title, content, titleSyze }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<article className={styles.collapse}>
			<div className={styles.collapse__topbar}>
				<h3 className={styles[titleSyze]}>{title}</h3>
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

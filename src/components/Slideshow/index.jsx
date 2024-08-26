import styles from "./index.module.scss";
import { useState } from "react";

function Slideshow({ imagesSource }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	function handlePrev() {
		setCurrentIndex(
			currentIndex === 0 ? imagesSource.length - 1 : currentIndex - 1
		);
	}
	function handleNext() {
		setCurrentIndex(
			currentIndex === imagesSource.length - 1 ? 0 : currentIndex + 1
		);
	}

	return (
		<section className={styles.slideshow}>
			<button
				className={`${styles.slideshow__button} ${styles.prev}`}
				onClick={handlePrev}
			>
				<i className="fa-solid fa-chevron-left"></i>
			</button>
			<div className={styles.slideshow__imageContener}>
				{imagesSource.map((source, index) => (
					<img
						key={index}
						src={source}
						alt=""
						className={`${styles.slideshow__image} ${
							styles[index === currentIndex ? "active" : ""]
						}`}
					/>
				))}
			</div>
			<div className={styles.slideshow__counter}>
				{currentIndex + 1}/{imagesSource.length}
			</div>
			<button
				className={`${styles.slideshow__button} ${styles.next}`}
				onClick={handleNext}
			>
				<i className="fa-solid fa-chevron-right"></i>
			</button>
		</section>
	);
}

export default Slideshow;

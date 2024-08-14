import styles from "./index.module.scss";
import logements from "../../datas/logements.json";
import { useEffect, useState } from "react";

function Slideshow({ id }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	console.log("index départ : ", currentIndex);

	useEffect(() => {
		console.log("index : ", currentIndex);
	}, [currentIndex]);

	const imagesSource = logements.find((item) => item.id === id).pictures;

	function handlePrev() {
		setCurrentIndex(
			currentIndex === 0
				? imagesSource.length - 1
				: currentIndex - 1
		);
	}
	function handleNext() {
		setCurrentIndex(
			currentIndex === imagesSource.length - 1
				? 0
				: currentIndex + 1
		);
	}

	return (
		<div className={styles.slideshow}>
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
			<button
				className={`${styles.slideshow__button} ${styles.next}`}
				onClick={handleNext}
			>
				<i className="fa-solid fa-chevron-right"></i>
			</button>
		</div>
	);
}

export default Slideshow;

import styles from "./index.module.scss";

function Rating({ rating }) {
	return (
		<div className={styles.rating}>
			{Array.from({ length: 5 }, (_, index) => (
				<i
					key={index}
					className={`fa-sm fa-solid fa-star ${
						index < rating ? "" : styles.neutralStar
					}`}
					aria-hidden="true"
				></i>
			))}
		</div>
	);
}

export default Rating;

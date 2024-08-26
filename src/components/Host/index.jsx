import styles from "./index.module.scss";

function Host({ hostData }) {
	return (
		<div className={styles.host}>
			<p className={styles.host__name}>{hostData.name}</p>
			<img src={hostData.picture} alt="Propriétaire du logement" />
		</div>
	);
}

export default Host;

import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Host from "../../components/Host";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import logements from "../../datas/logements.json";
import styles from "./index.module.scss";

function Property() {
	const { id } = useParams();

	const logement = logements.find((item) => item.id === id);
	if (logement === undefined) {
		window.location.href = "/404";
		return false;
	}

	const pictures = logement.pictures;
	const title = logement.title;
	const host = logement.host;
	const rating = logement.rating;
	const location = logement.location;
	const tags = logement.tags;
	const description = logement.description;
	const equipments = logement.equipments;

	return (
		<main className={styles.property}>
			<Slideshow imagesSource={pictures} />
			<section className={styles.property__content}>
				<div className={styles.property__content__group1}>
					<div className={styles.property__content__group1__title}>
						<h2>{title}</h2>
						<p>{location}</p>
					</div>
					<ul>
						{tags.map((tag) => (
							<Tag key={tag} tag={tag}></Tag>
						))}
					</ul>
				</div>
				<div className={styles.property__content__group2}>
					<Host className={styles.host} hostData={host} />
					<Rating className={styles.rating} rating={rating} />
				</div>
				<div className={styles.property__content__collapses}>
					<Collapse
						title="Description"
						content={description}
						titleSyze="sm"
						property="property"
					/>
					<Collapse
						title="Équipements"
						content={equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
						property="property"
					/>
				</div>
			</section>
		</main>
	);
}

export default Property;

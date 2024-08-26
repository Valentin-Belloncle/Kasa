import Banner from "../../components/Banner";
import Card from "../../components/Card";
import styles from "./index.module.scss";
import logements from "../../datas/logements.json";

function Home() {
	return (
		<main className={styles.home}>
			<Banner
				image="landscape1"
				content="Chez vous, partout et ailleurs"
			/>
			<section>
				<div className={styles.home__gallery}>
					{logements.map(({ id, cover, title, description }) => (
						<Card
							key={id}
							id={id}
							cover={cover}
							title={title}
							description={description}
						/>
					))}
				</div>
			</section>
		</main>
	);
}

export default Home;

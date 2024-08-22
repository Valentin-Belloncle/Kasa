import { Link } from "react-router-dom"
import logements from "../../datas/logements.json"
import styles from "./index.module.scss"

function Card() {
  return (
    <section>
      <ul className={styles.gallery}>
        {logements.map(({ id, cover, title, description }) =>
          <Link key={id} to={`/property/${id}`}>
            <article className={styles.card} key={id}>
              <img src={cover} alt={description} />
              <p>{title}</p>
            </article>
          </Link>
        )}
      </ul>
    </section>
  )
}

export default Card
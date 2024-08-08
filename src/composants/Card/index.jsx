import { Link } from "react-router-dom"
import logements from "../../datas/logements.json"
import styles from "./index.module.scss"

function Card() {

    return (
      <section>
        <ul className={styles.gallery}>
          {logements.map(({ id, cover, title, description }) =>
            <Link to={`/property/${id}`}>
              <article className={styles.card} key={id}>
                <img src={cover} alt={description} />
                <h3 class="card-title">{title}</h3>
              </article>
            </Link>
          )}
        </ul>
      </section>
    )
  }
  
  export default Card
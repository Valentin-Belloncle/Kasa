import Banner from "../../composants/Banner"
import Collapse from "../../composants/Collapse"
import about from "../../datas/about.json"
import styles from "./index.module.scss"

function About() {
  return (
    <main className={styles.about}>
      <Banner image="landscape2"/>
      <ul className={styles.about__list}>
        {about.map(({title, content }) =>
          <Collapse key={title} title={title} content={content}/>
        )}
      </ul>
    </main>
  )
}

export default About
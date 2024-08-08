import Banner from "../../composants/Banner"
import Card from "../../composants/Card"
import styles from "./index.module.scss"

function Home() {
    return (
      <main className={styles.home}>
        <Banner image="landscape1"/>
        <Card />
      </main>
     
    )
  }
  
  export default Home
import Banner from "../../composants/Banner"
import Card from "../../composants/Card"
import styles from "./index.module.scss"

function Home() {
    return (
      <div className={styles.home}>
        <Banner />
        <Card />
      </div>
     
    )
  }
  
  export default Home
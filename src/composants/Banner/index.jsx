import styles from "./index.module.scss"

function Banner() {
    return (
      <div className={styles.banner}>
        <div className={styles.content}>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
    )
  }
  
  export default Banner
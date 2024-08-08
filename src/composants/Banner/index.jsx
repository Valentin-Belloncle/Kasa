import styles from "./index.module.scss"

function Banner({image}) {
    return (
      <section className={`${styles.banner} ${styles[image]}`}>
        <div className={styles.content}>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
    )
  }
  
  export default Banner
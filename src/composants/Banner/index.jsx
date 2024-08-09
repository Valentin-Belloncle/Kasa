import styles from "./index.module.scss"

function Banner({image, content}) {
    return (
      <section className={`${styles.banner} ${styles[image]}`}>
        <div className={styles.content}>
          <h1>{content}</h1>
        </div>
      </section>
    )
  }
  
  export default Banner
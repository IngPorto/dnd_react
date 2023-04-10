import styles from "./title.module.css";

const Title = () => {
  return (
    <div className={styles.title_container}>
      <h1 className={styles.title}>Drag and Drop Testing</h1>
      <span className={styles.mono}>(Sin librerías adicionales)</span>
    </div>
  );
};

export default Title;

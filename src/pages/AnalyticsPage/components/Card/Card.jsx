import styles from "./Card.module.scss";

function Card({ rank, name, addr, point, url }) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h4>{rank}</h4>
        <div className={styles.avatar}>
          <img src={url} alt="avatar" width="100%" />
        </div>
        <div className={styles.detail}>
          <h1>{name}</h1>
          <h2>{addr}</h2>
        </div>
      </div>
      <div className={styles.right}>{point}</div>
    </div>
  );
}

export default Card;

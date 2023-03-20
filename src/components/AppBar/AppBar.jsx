import styles from "./AppBar.module.scss";

function AppBar({ title = "Hack Rajasthan" }) {
  return (
    <div className={styles.appbar}>
      <h1>
        <i>{title}</i>
      </h1>
    </div>
  );
}

export default AppBar;

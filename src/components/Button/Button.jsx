import styles from "./Button.module.scss";
import Spinner from "../Spinner/Spinner";

function Button({ children, loading, className, textButton = false, ...rest }) {
  return (
    <button className={styles.button + " " + className} {...rest}>
      {" "}
      {loading ? <Spinner /> : children}
    </button>
  );
}

export default Button;

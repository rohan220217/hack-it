import { NavLink } from "react-router-dom";
import styles from "./BottomBar.module.scss";

function BottomBar() {
  return (
    <div className={styles.bottombar}>
      <h1>
        <NavLink to={"/"}>Home</NavLink>
      </h1>
      <h1>Analytics</h1>
      <h1>
        <NavLink to={"/camera"}>Camera</NavLink>{" "}
      </h1>
      <h1>Notification</h1>
      <h1>
        <NavLink to={"/profile"}>Profile</NavLink>
      </h1>
    </div>
  );
}

export default BottomBar;

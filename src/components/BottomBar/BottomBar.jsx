import { NavLink } from "react-router-dom";
import styles from "./BottomBar.module.scss";
import { ReactComponent as HomeIcon } from "../../assets/svg/Home.svg";
import { ReactComponent as DiscoverIcon } from "../../assets/svg/Discover.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/Notification.svg";
import { ReactComponent as CameraIcon } from "../../assets/svg/Camera.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/Profile.svg";
import { ReactComponent as DiscoverFillIcon } from "../../assets/svg/DiscoverFill.svg";
import { ReactComponent as ProfileFillIcon } from "../../assets/svg/ProfileFill.svg";
import { ReactComponent as NotificationFillIcon } from "../../assets/svg/NotificationFill.svg";
import { ReactComponent as HomeFillIcon } from "../../assets/svg/HomeFill.svg";

function BottomBar() {
  return (
    <div className={styles.bottombar}>
      <h1>
        <NavLink to={"/"}>
          {({ isActive }) => (isActive ? <HomeFillIcon /> : <HomeIcon />)}
        </NavLink>
      </h1>
      <h1>
        <NavLink to={"/analytics"}>
          {({ isActive }) =>
            isActive ? <DiscoverFillIcon /> : <DiscoverIcon />
          }
        </NavLink>{" "}
      </h1>
      <h1 className={styles.camera}>
        <NavLink to={"/camera"}>
          <CameraIcon />
        </NavLink>
      </h1>
      <h1>
        <NavLink to={"/notification"}>
          {({ isActive }) =>
            isActive ? <NotificationFillIcon /> : <NotificationIcon />
          }
        </NavLink>{" "}
      </h1>
      <h1>
        <NavLink to={"/profile"}>
          {({ isActive }) => (isActive ? <ProfileFillIcon /> : <ProfileIcon />)}
        </NavLink>
      </h1>
    </div>
  );
}

export default BottomBar;

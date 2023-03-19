import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import styles from "./kaRoutes.module.scss";
import { useSelector } from "react-redux";
import BottomBar from "../components/BottomBar/BottomBar";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CameraPage from "../pages/CameraPage/CameraPage";

function KaRoutes() {
  const loginState = useSelector((state) => state.profileReducer);
  const checkAuthentication = () => {
    if (loginState.token) return true;
    return false;
  };

  return checkAuthentication() ? (
    <div className={styles.body}>
      <div className={styles.appBar}>
        <AppBar />
      </div>
      <div className={styles.routeContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/camera" element={<CameraPage />} />

          {/* <Routes path="*" element={<PageNotFound />} /> */}
        </Routes>
      </div>
      <BottomBar />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default KaRoutes;

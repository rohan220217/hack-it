import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import styles from "./kaRoutes.module.scss";
import { useSelector } from "react-redux";

function KaRoutes() {
  const loginState = useSelector((state) => state.loginReducer);
  const checkAuthentication = () => {
    if (loginState.token) return true;
    return false;
  };

  return checkAuthentication() ? (
    <>
      <div className={styles.appBar}>
        <AppBar />
      </div>
      <div className={styles.routeContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Routes path="*" element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default KaRoutes;

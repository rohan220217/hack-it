import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import styles from "./kaRoutes.module.scss";
import { useSelector } from "react-redux";
import BottomBar from "../components/BottomBar/BottomBar";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CameraPage from "../pages/CameraPage/CameraPage";
import ComplainForm from "../pages/ComplainForm/ComplainForm";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import AnalyticsPage from "../pages/AnalyticsPage/AnalyticsPage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import UpdateComplain from "../pages/UpdateComplain/UpdateComplain";

function KaRoutes() {
  const loginState = useSelector((state) => state.profileReducer);
  const checkAuthentication = () => {
    if (loginState.token) return true;
    return false;
  };

  return checkAuthentication() ? (
    <div className={styles.body}>
      {/* <div className={styles.appBar}>
        <AppBar />
      </div> */}
      <div
        className={
          loginState.token ? styles.routeContainer : styles.routeContainerFull
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/complain/:groupId/:id" element={<ComplainForm />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/update-complain/:id" element={<UpdateComplain />} />

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

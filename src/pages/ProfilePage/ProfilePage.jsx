import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AppBar from "../../components/AppBar/AppBar";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import { logoutUser } from "../../store/Actions/loginAction";
import { getLoggedUser } from "../../store/Actions/userAction";
import EditProfile from "./components/EditProfile/EditProfile";
import styles from "./ProfilePage.module.scss";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);

  const userState = useSelector((state) => state.profileReducer);

  const handleCloseModal = () => {
    setShowEditModal(false);
  };
  const handleOpenModal = () => {
    setShowEditModal(true);
  };

  const onLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);
  console.log(userState.loggedUserDetails);
  return (
    <>
      <AppBar title="Profile page" />
      {userState.loggedUserDetailsLoading ? (
        <div className={styles.loaderContainer}>
          <Spinner className={styles.loader} />
        </div>
      ) : (
        <div className={styles.body}>
          <div className={styles.avatar}>
            <img
              src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
              alt="avatar"
            />
          </div>
          <h2>
            <b>Name: </b> {userState.loggedUserDetails.name}
          </h2>
          <h2>
            <b>Mobile: </b> {userState.loggedUserDetails.mobile}
          </h2>
          <div className={styles.buttons}>
            <Button onClick={handleOpenModal}>Edit</Button>
            <Button onClick={onLogout} className={styles.logout}>
              Logout
            </Button>
          </div>
          <br />
          <div className={styles.container}>
            <Tabs className={styles.tabs}>
              <TabList className={styles.tabList}>
                <Tab>My Complain</Tab>
                <Tab>Saved</Tab>
              </TabList>

              <TabPanel>
                <div className={styles.content}>
                  <img
                    src="https://www.w3schools.com/w3images/wedding.jpg"
                    width={"100%"}
                  />
                  <img
                    src="https://www.w3schools.com/w3images/wedding.jpg"
                    width={"100%"}
                  />
                  <img
                    src="https://www.w3schools.com/w3images/wedding.jpg"
                    width={"100%"}
                  />
                  <img
                    src="https://www.w3schools.com/w3images/wedding.jpg"
                    width={"100%"}
                  />
                </div>
              </TabPanel>

              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      )}
      {/* Edit modal */}
      <EditProfile
        showEditModal={showEditModal}
        handleCloseModal={handleCloseModal}
        userDetail={userState.loggedUserDetails}
      />
    </>
  );
}

export default ProfilePage;

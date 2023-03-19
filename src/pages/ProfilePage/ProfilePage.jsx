import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLoggedUser } from "../../store/Actions/userAction";
import styles from "./ProfilePage.module.scss";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.profileReducer);

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  return userState.loggedUserDetailsLoading ? (
    <p>loading...</p>
  ) : (
    <>
      <h2>Profile page</h2>
      <br />
      <br />
      <br />
      <div className={styles.container}>
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabList}>
            <Tab>My Complain</Tab>
            <Tab>Area Wise</Tab>
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
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default ProfilePage;

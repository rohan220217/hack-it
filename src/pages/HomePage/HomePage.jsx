import { useDispatch } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import styles from "./HomePage.module.scss";
import BackgroundImage from "../../assets/background.png";
import { useState } from "react";
import Carousel from "react-simply-carousel";

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      {" "}
      <AppBar title="Home Page" />
      <div className={styles.background}>
        <img src={BackgroundImage} alt="background image" />
        <h2>Welcome back,</h2>
        <h1>Rohan Kumar</h1>

        <div className={styles.carousel}>
          <Carousel
            containerProps={{
              style: {
                width: "100%",
                userSelect: "none",
              },
            }}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                background: "blue",
              },
            }}
            onRequestChange={setActiveSlide}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: 8,
                  width: 8,
                  borderRadius: "50%",
                  border: 0,
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 8,
                  width: 8,
                  borderRadius: "50%",
                  border: 0,
                  background: "black",
                },
              },
            }}
            itemsToShow={1}
            speed={400}
          >
            {[
              "https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/DepartmentMaster/951/2023/Feb/31406/174015.jpeg",
              "https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/DepartmentMaster/951/2023/Feb/31406/174015.jpeg",
              "https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/DepartmentMaster/951/2023/Feb/31406/174505.jpeg",
            ].map((link, index) => (
              <img src={link} alt="gov 1" width="100%" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

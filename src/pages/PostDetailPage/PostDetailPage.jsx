import { useNavigate, useParams } from "react-router-dom";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/Actions/loginAction";
import AppBar from "../../components/AppBar/AppBar";
import { getGroupSinglePost } from "../../store/Actions/postAction";
import Spinner from "../../components/Spinner/Spinner";
import styles from "./PostDetailPage.module.scss";
import ComplainCard from "./components/ComplainCard/ComplainCard";
import Carousel from "react-simply-carousel";

function PostDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postState = useSelector((state) => state.postReducer);
  const [activeSlide, setActiveSlide] = useState(0);

  console.log(postState, id);
  const onLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(getGroupSinglePost({ id }));
  }, []);

  return (
    <>
      <AppBar title="Complain detail" />
      {postState.getGroupPostLoading ? (
        <div className={styles.loaderContainer}>
          <Spinner className={styles.loader} />
        </div>
      ) : (
        // JSON.stringify(postState.groupComplain[0][0])
        <div>
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
            autoplay={true}
            
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
            {postState.groupComplain.map((complain, index) => (
              <ComplainCard
                key={index}
                caption={complain?.[0].caption}
                createdAt={complain?.[0].createdAt}
                tags={complain?.[0].tags}
                postStatus={complain?.[0].post_status}
                image={complain?.[0].contents?.[0]}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default PostDetailPage;

import { useDispatch, useSelector } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import styles from "./HomePage.module.scss";
import BackgroundImage from "../../assets/background.png";
import { useEffect, useState } from "react";
import Carousel from "react-simply-carousel";
import Sheet from "react-modal-sheet";
import { getAllComplain } from "../../store/Actions/postAction";
import ComplainCard from "../../components/ComplainCard/ComplainCard";
import BottomSheetItems from "./components/BottomSheet/BottomSheet";

function HomePage() {
  const dispatch = useDispatch();
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentGroupPostId, setCurrentGroupPostId] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const { complains, getAllPostsLoading } = useSelector(
    (state) => state.postReducer
  );
  const { name } = useSelector((state) => state.profileReducer);

  useEffect(() => {
    dispatch(getAllComplain());
  }, []);

  return (
    <div>
      <AppBar title="Home Page" />
      <div className={styles.background}>
        <img src={BackgroundImage} alt="background image" />
        <h2>Welcome back,</h2>
        <h1>{name}</h1>
        <div className={styles.content}>
          {!getAllPostsLoading
            ? complains.map((m, mi) => {
                return (
                  <div key={m._id}>
                    {m.map((complain, index) => (
                      <>
                        <ComplainCard
                          key={index}
                          caption={complain.caption}
                          createdAt={complain.createdAt}
                          tags={complain.tags}
                          postStatus={complain.post_group.current_status}
                          image={complain.contents}
                          upvotes={complain.post_group.upvotes}
                          downvotes={complain.post_group.downvotes}
                          post_group_id={complain.post_group._id}
                          index={mi}
                          userName={complain.user.name}
                          onMoreClick={() => {
                            setOpen(true);
                            setCurrentGroupPostId(complain.post_group._id);
                          }}
                          lat={complain.post_group.latitude}
                          long={complain.post_group.longitude}
                        />
                      </>
                    ))}
                    {/* <Carousel
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
                      {m.map((complain, index) => (
                        <>
                          <ComplainCard
                            key={index}
                            caption={complain.caption}
                            createdAt={complain.createdAt}
                            tags={complain.tags}
                            postStatus={complain.post_group.current_status}
                            image={complain.contents}
                            upvotes={complain.post_group.upvotes}
                            downvotes={complain.post_group.downvotes}
                            post_group_id={complain.post_group._id}
                            index={mi}
                            userName={complain.user.name}
                            onMoreClick={() => {
                              setOpen(true);
                              setCurrentGroupPostId(complain.post_group._id);
                            }}
                            lat={complain.post_group.latitude}
                            long={complain.post_group.longitude}
                          />
                        </>
                      ))}
                    </Carousel> */}
                  </div>
                );
              })
            : null}
        </div>
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
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <BottomSheetItems currentGroupPostId={currentGroupPostId} />{" "}
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
}

export default HomePage;

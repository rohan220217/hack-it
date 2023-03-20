import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import { uploadFile } from "../../services/upload.services";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import styles from "./CameraPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { postComplain } from "../../store/Actions/postAction";

function CameraPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postReducer);

  const [data, setData] = useState({
    photo: null,
    longitude: "",
    latitude: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const printCurrentPosition = async () => {
    // await Geolocation.requestPermissions();
    const coordinates = await Geolocation.getCurrentPosition();

    setData((prev) => ({
      ...prev,
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude,
    }));
    console.log(
      "Cordinates:",
      coordinates.coords.latitude,
      coordinates.coords.longitude
    );
  };

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    setIsLoading(true);
    uploadFile({ file: image.dataUrl })
      .then((data) => {
        setData((prev) => ({
          ...prev,
          photo: data.filePath,
        }));
      })
      .catch((err) => {
        // fileInputRef.current[index].value = null;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleConfirm = () => {
    const payload = {
      longitude: data.longitude,
      latitude: data.latitude,
      contents: [data.photo],
      ip_address: "192.168.1.1",
    };
    dispatch(postComplain({ payload, navigate }));
    // navigate("/complain");
  };

  const runInitially = () => {
    printCurrentPosition();
    takePhoto();
  };

  useEffect(() => {
    runInitially();
  }, []);

  return (
    <>
      <AppBar title="Upload complain image" />
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Spinner className={styles.loader} />
        </div>
      ) : (
        <div className={styles.container}>
          {data.photo ? (
            <>
              <img
                src={`http://172.99.249.65:3200/${data.photo}`}
                alt="captured by camera"
                width="100%"
              />
              <div className={styles.buttons}>
                <Button
                  onClick={() => navigate(-1)}
                  className={styles.backButton}
                >
                  Back
                </Button>
                <Button
                  onClick={() => handleConfirm()}
                  loading={postState.postLoading}
                >
                  Confirm
                </Button>
              </div>
            </>
          ) : (
            <>
              <p>There is no picture yet.</p>
              <Button onClick={() => runInitially()}>Retake</Button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default CameraPage;

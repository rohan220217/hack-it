import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import { uploadFile } from "../../services/upload.services";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import styles from "./CameraPage.module.scss";

function CameraPage() {
  const navigate = useNavigate();
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
      resultType: CameraResultType.Base64,
    });
    setIsLoading(true);
    uploadFile({ file: image.base64String })
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

  useEffect(() => {
    printCurrentPosition();
    takePhoto();
  }, []);
  console.log(data);
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
            <div>
              <img
                src={`http://172.99.249.65:3200/${data.photo}`}
                alt="captured by camera"
                width="100%"
              />
              <Button onClick={() => navigate("/complain")}>Confirm</Button>
            </div>
          ) : (
            <span>There is no picture yet.</span>
          )}
        </div>
      )}
    </>
  );
}

export default CameraPage;

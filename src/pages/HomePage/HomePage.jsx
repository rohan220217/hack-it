import { useNavigate } from "react-router-dom";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();

  const onLogout = () => {
    navigate("/");
  };

  const printCurrentPosition = async () => {
    await Geolocation.requestPermissions();
    const coordinates = await Geolocation.getCurrentPosition();

    console.log("Current position:", coordinates);
  };

  const takePhoto = async () => {
    console.log("Launch function");
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });
    console.log(image, image.base64String);
    setPhoto(image.webPath);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     printCurrentPosition();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <h2>Dashboard</h2>
      {photo ? (
        <img src={photo} alt="test camera" />
      ) : (
        <span>There is no picture yet.</span>
      )}

      <button onClick={printCurrentPosition}>Location</button>
      <button onClick={takePhoto}>Camera</button>
      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default HomePage;

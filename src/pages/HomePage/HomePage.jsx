import { useNavigate } from "react-router-dom";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/Actions/loginAction";
import AppBar from "../../components/AppBar/AppBar";

function HomePage() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <AppBar  title="Home Page"/>

      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default HomePage;

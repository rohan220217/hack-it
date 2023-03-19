import { useNavigate } from "react-router-dom";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";

function HomePage() {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Dashboard</h2>

      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default HomePage;

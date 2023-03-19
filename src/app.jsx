import { Toaster } from "react-hot-toast";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import KaRoutes from "./routes/KaRoutes";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{
          position: "sticky",
        }}
        toastOptions={{
          // Define default options
          className: "toaster-style",
          duration: 5000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/*" element={<KaRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

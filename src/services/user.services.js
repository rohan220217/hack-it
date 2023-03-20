import axios from "axios";
import authHeader from "./auth-header";

export const getLoggedUserApi = async () => {
  try {
    const res = await axios.get("/user/me", {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const changePasswordApi = async (data) => {
  try {
    const res = await axios.post("/user/changepassword", data, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const changeUserDataApi = async (data) => {
  try {
    const res = await axios.put("/user/profile", data, {
      headers: { ...authHeader() },
    });

    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

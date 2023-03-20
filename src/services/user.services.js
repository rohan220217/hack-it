import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = "http://172.99.249.65:3200/api";

export const getLoggedUserApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "/user/me", {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const changePasswordApi = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/user/changepassword", data, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const changeUserDataApi = async (data) => {
  try {
    const res = await axios.put(BASE_URL + "/user/profile", data, {
      headers: { ...authHeader() },
    });
    
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};
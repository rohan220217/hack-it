import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.REACT_APP_URL;

export const loginRequestApi = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/auth", data, {
      headers: { ...authHeader() },
    });

    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

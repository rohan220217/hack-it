import axios from "axios";
import { toast } from "react-hot-toast";
import authHeader from "./auth-header";

const BASE_URL = "http://172.99.249.65:3200/api";

export const loginRequestApi = async ({ mobile }) => {
  try {
    const res = await axios.post(
      BASE_URL + "/auth",
      { mobile },
      {
        headers: { ...authHeader() },
      }
    );
    toast.success(res.data.msg);
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const otpVerifyRequestApi = async ({ mobile, otp }) => {
  try {
    const res = await axios.post(
      BASE_URL + "/auth/verify-otp",
      { mobile, otp },
      {
        headers: { ...authHeader() },
      }
    );

    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

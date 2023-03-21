import axios from "axios";
import { toast } from "react-hot-toast";
import authHeader from "./auth-header";

export const loginRequestApi = async ({ mobile }) => {
  try {
    const res = await axios.post(
       "/auth",
      { mobile },
      {
        headers: { ...authHeader() },
      }
    );
    toast.success(res.data.msg);
    return res.data;
  } catch (e) {
    console.log(e);
    console.log(e?.response);
    console.log(e?.response?.data);
    console.log(e?.response?.data?.msg);
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const otpVerifyRequestApi = async ({ mobile, otp }) => {
  try {
    const res = await axios.post(
       "/auth/verify-otp",
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

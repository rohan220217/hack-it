import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.REACT_APP_URL;

export const loginRequestApi = async ({ mobile }) => {
  try {
    // const res = await axios.post(BASE_URL + "/auth", mobile, {
    //   headers: { ...authHeader() },
    // });

    // return res.data.data;
    return {
      success: true,
      msg: "OTP Sent to your mobile number",
    };
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const otpVerifyRequestApi = async ({ mobile, otp }) => {
  try {
    // const res = await axios.post(BASE_URL + "/auth", mobile, {
    //   headers: { ...authHeader() },
    // });

    // return res.data.data;
    return {
      success: true,
      data: {
        name: "Kushal Poddar",
        type: "U",
        mobile: "9007287210",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQxNzRlNzBjY2VjMjQwNGM3MmEwNzllIiwidHlwZSI6IlUiLCJuYW1lIjoiS3VzaGFsIFBvZGRhciIsIm1vYmlsZSI6IjkwMDcyODcyMTAiLCJpYXQiOjE2NzkyNTIxNDksImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpc3MiOiJJRFlMTCIsInN1YiI6IjkwMDcyODcyMTAifQ.bqLT7Y_BymMeJfPVWsE_8kKn0IgXP_DQBQaReGmw3bF1ifsljV4VP-38zV2ZW0sBpRVQsUDc9W3UAAuTon75suCJw53etqt1bMXFZiS16aauuX2Nb9-8twg5GitOUSsWhWz-GsXsdKUE1ed7hdIlJ-WOtFw5HQZkNebBVf-rIRQ",
      },
    };
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

import axios from "axios";
import authHeader from "./auth-header";

export const uploadFile = (data) => {
  console.log("data", data);
  return new Promise((resolve, reject) => {
    console.log("reader", data.file);
    axios
      .post(
        `file-upload/base-64`,
        {
          file: data.file,
        },
        {
          headers: {
            ...authHeader(),
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        resolve(res.data);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
};

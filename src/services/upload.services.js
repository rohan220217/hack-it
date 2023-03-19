import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.REACT_APP_URL;

export const getFileName = async (file, data) => {
  try {
    if (!file) return null;
    const ext = `.${file.type.split("/")[1]}`;
    // Sending a request to generate a signed url
    const res = await axios.post(
      `${BASE_URL}/upload/put-signed-url`,
      { ...data, ext },
      {
        headers: { ...authHeader() },
      }
    );

    const img_upload_res = await axios.put(res.data.url, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    if (img_upload_res.status === 200) {
      return res.data.file_name;
    }
    return Error("Unable to upload");
  } catch (e) {
    throw Error(e.response?.data ?? "Something went wrong");
  }
};

export const viewFile = async function (file_name, type) {
  // Sending a request to generate a signed url
  try {
    const res = await axios.post(
      `${BASE_URL}/upload/get-signed-url`,
      { file_name, type },
      {
        headers: { ...authHeader() },
      }
    );

    return res.data.url;
  } catch (e) {
    throw Error(e.response?.data ?? "Something went wrong");
  }
};

export const uploadFormFile = async function (file) {
  let data = new FormData();
  data.append("file", file);

  return await axios.post(BASE_URL + "/upload", data, {
    headers: { ...authHeader(), "Content-Type": "multipart/form-data" },
  });
};

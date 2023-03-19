import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.REACT_APP_URL;

export const getAllCommentsApi = async ({ lectureId, courseId }) => {
  try {
    let url = `${BASE_URL + "/comment?"}`;
    if (courseId) url = url + "course=" + courseId;
    if (lectureId) url = url + "lecture=" + lectureId;

    const res = await axios.get(url, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const createCommentApi = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/comment", data, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const deleteCommentApi = async (commentId) => {
  try {
    const res = await axios.delete(BASE_URL + "/comment/" + commentId, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

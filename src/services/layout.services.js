import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.REACT_APP_URL;

export const addLayoutApi = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(BASE_URL + "/layout", data, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const getAllLayoutsApi = async (id) => {
  try {
    const res = await axios.get(BASE_URL + "/layout?course=" + `${id}`, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const updateLayoutApi = async (data) => {
  try {
    const res = await axios.put(
      BASE_URL + "/layout/" + `${data.id}`,
      data.value,
      {
        headers: authHeader(),
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const deleteLayoutApi = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + "/layout/" + `${id}`, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const getAllLecturesApi = async ({ courseId, layoutId }) => {
  try {
    let url = `${BASE_URL + "/lecture?"}`;
    if (courseId) url = url + "course=" + courseId;
    if (layoutId) url = url + "layout=" + layoutId;

    const res = await axios.get(url, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const getSingleLectureApi = async (id) => {
  try {
    const res = await axios.get(BASE_URL + "/lecture/" + `${id}`, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const addLectureApi = async ({ layoutId, courseId, sequenceIndex }) => {
  try {
    const res = await axios.post(
      BASE_URL + "/lecture",
      { layout: layoutId, course: courseId, sequenceIndex },
      {
        headers: authHeader(),
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const updateLectureApi = async (data) => {
  try {
    const res = await axios.put(
      BASE_URL + "/lecture/" + `${data.lectureId}`,
      data.lectureValue,
      {
        headers: authHeader(),
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const deleteLectureApi = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + "/lecture/" + `${id}`, {
      headers: authHeader(),
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const getVideoProgressApi = async ({ courseId, isFormatted }) => {
  try {
    let url = `${BASE_URL}/progress`;
    if (courseId) url = url + `?course=${courseId}`;
    if (isFormatted) url = url + `?isFormatted=true`;
    const res = await axios.get(url, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const createVideoProgressApi = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/progress", data, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const getDayWiseVideoProgressApi = async ({ date }) => {
  try {
    let url = `${BASE_URL}/progress`;
    if (date) url = url + `?isFormatted=true&year=${date}`;
    const res = await axios.get(url, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

import axios from "axios";
import { PENDING_TYPE_SUCCESS } from "../constants/PendingConstants";
import authHeader from "./auth-header";

const BASE_URL = process.env.REACT_APP_URL;

export const fetchCoursesApi = async (data) => {
  try {
    const res = await axios.get(BASE_URL + `/course`, {
      headers: { ...authHeader() },
      params: { ...data },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const fetchCourseApi = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/course/${id}`, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const fetchCourseAccessApi = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/course_request?course=${id}`, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};
export const candidateAccessApprovedApi = async (id) => {
  try {
    const res = await axios.get(
      BASE_URL + `/course_request?course=${id}&status=${PENDING_TYPE_SUCCESS}`,
      {
        headers: { ...authHeader() },
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const candidateAccessUpdateApi = async ({ status, courseRequestId }) => {
  try {
    const res = await axios.put(
      BASE_URL + `/course_request/${courseRequestId}`,
      { status },
      {
        headers: { ...authHeader() },
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};
export const fetchCandidateAccessApi = async (id) => {
  try {
    const res = await axios.post(
      BASE_URL + `/course_request`,
      { course: id },
      {
        headers: { ...authHeader() },
      }
    );
    return res.data;
  } catch (e) {
    throw Error(e.response?.data.msg ?? "Something went wrong");
  }
};

//delete request API
export const deleteCandidateRequestApi = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + `/course_request/${id}`, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const addCourseApi = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/course", data, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const updateCourseApi = async (data) => {
  try {
    const res = await axios.put(
      BASE_URL + "/course/" + `${data.id}`,
      data.value,
      {
        headers: { ...authHeader() },
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const deleteCourseApi = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + "/course/" + id, {
      headers: { ...authHeader() },
    });
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.message ?? "Something went wrong");
  }
};

export const addUserApi = async (details) => {
  try {
    const res = await axios.post(BASE_URL + "/course_request", details, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const fetchAllTAOfCourseApi = async (id) => {
  try {
    const res = await axios.get(BASE_URL + "/teaching_assistant?course=" + id, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data ?? "Something went wrong");
  }
};

export const assignTAOfCourseApi = async (data) => {
  try {
    const res = await axios.post(
      BASE_URL + "/teaching_assistant/assign",
      data,
      {
        headers: { ...authHeader() },
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const deleteTAOfCourseApi = async (data) => {
  try {
    const res = await axios.post(
      BASE_URL + "/teaching_assistant/unassign",
      data,
      {
        headers: { ...authHeader() },
      }
    );
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const addLikeCourseApi = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/course/add-like", data, {
      headers: { ...authHeader() },
    });
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const removeLikeCourseApi = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/course/remove-like", data, {
      headers: { ...authHeader() },
    });
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const getAllAnalyticsApi = async (id) => {
  try {
    const res = await axios.get(BASE_URL + "/course_request/analytics/" + id, {
      headers: { ...authHeader() },
    });
    return res.data.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

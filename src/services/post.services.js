import axios from "axios";
import { toast } from "react-hot-toast";
import authHeader from "./auth-header";

export const addPostRequestApi = async (data) => {
  try {
    const res = await axios.post("/post", data, {
      headers: { ...authHeader() },
    });
    toast.success(res.data.msg);
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};
export const getSinglePostRequestApi = async ({ id }) => {
  try {
    const res = await axios.get("/post/" + id, {
      headers: { ...authHeader() },
    });
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const getAllPostsRequestApi = async (data) => {
  try {
    let query_arr = [];
    for (let key in data) {
      let value = data[key];
      if (value !== undefined && value !== null) {
        query_arr.push(`${key}=${encodeURIComponent(value)}`);
      }
    }

    const queryString = query_arr.join("&");
    console.log(queryString);
    const res = await axios.get(`/post?${queryString}`, {
      headers: { ...authHeader() },
    });
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};
export const updateSinglePostRequestApi = async ({ value, id }) => {
  try {
    const res = await axios.put(
      `/post/${id}`,
      { ...value },
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

export const voteSinglePostRequestApi = async ({ value, id }) => {
  try {
    const res = await axios.put(
      `/post/${id}/vote`,
      { ...value },
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
export const getGroupPostRequestApi = async ({ id }) => {
  try {
    const res = await axios.get(`/post?pg=${id}`, {
      headers: { ...authHeader() },
    });
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
};

export const updateComplainRequestApi = async ({ value, id }) => {
  try {
    const res = await axios.put(
      `/post/${id}/updatestatus`,
      { ...value },
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

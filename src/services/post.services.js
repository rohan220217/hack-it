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

export const getAllPostsRequestApi = async() => {
  try {
    const res = await axios.get("/post", {
      headers: { ...authHeader() },
    });
    return res.data;
  } catch (e) {
    throw Error(e.response?.data?.msg ?? "Something went wrong");
  }
}
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

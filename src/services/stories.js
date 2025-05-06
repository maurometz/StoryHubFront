import axios from "axios";

export const getStories = async () => {
  try {
    const res = await axios.get("/api/stories");
    return res.data;
  } catch (err) {
    if (err.response) {
      throw {
        message: "Failed to fetch stories",
        status: err.response.status,
      };
    }
    throw { message: err.message || "Unknown error occurred", status: null };
  }
};

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

export const createStory = async (storyData) => {
  try {
    const res = await axios.post("/api/stories", storyData);
    return res.data;
  } catch (err) {
    if (err.response) {
      throw {
        message: "Failed to create story",
        status: err.response.status,
      };
    }
    throw { message: err.message || "Unknown error occurred", status: null };
  }
};

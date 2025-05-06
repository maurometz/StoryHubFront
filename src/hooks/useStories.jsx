import { useState, useEffect } from "react";
import { getStories } from "../services/stories";

export const useGetStories = (url) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStories(url);
        setStories(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [url]);

  return { stories, loading, error };
};

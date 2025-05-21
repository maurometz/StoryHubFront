import { useState, useEffect } from "react";
import { getStories } from "../services/stories";

export const useGetStories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStories();
        setStories(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return { stories, error, loading };
};

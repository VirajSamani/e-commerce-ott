import axios from "axios";
import { useEffect, useState } from "react";

function useGetProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
      setData(res.data);
      setError(null);
    } catch {
      setError("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { data, loading, error };
}

export default useGetProducts;

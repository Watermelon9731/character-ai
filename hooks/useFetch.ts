/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";

interface FetchReturnType<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
  refresh: () => void;
}

const useFetch = <T>(url: string): FetchReturnType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const call = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res) return;
      const resJSON = await res.json();
      setData(resJSON);
      setError(null);
      setInitialized(true);
    } catch (error: any) {
      setData(null);
      setError(error);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    call();
  }, [call]);

  return { data, loading, error, initialized, refresh: call };
};

export default useFetch;

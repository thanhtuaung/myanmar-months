import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    setIsPending(true);
    fetch(url, { signal: abort.signal })
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
        setData(null);
      });

    return () => abort.abort();
  }, []);

  return { data, error, isPending };
};

export default useFetch;

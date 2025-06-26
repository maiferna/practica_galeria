
import { fetchCall } from '../api/fetchCall'
import { useEffect, useState } from 'react'

export const useFetch = (categoria) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCall(categoria)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })

  }, [categoria])

  return {
    data,
    loading,
    error
  }
}

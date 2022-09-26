import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url : string) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        setLoading(true);
        axios
        .get(url)
        .then((res) => {
            setData(res.data);
            console.log(res.data)
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url])

    return { data, loading, error };
}
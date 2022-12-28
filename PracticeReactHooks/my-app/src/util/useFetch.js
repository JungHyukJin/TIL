import React, { useEffect, useState } from 'react'

export function useFetch(baseURL, initialType) {
    const [data, setData] = useState(null);

    const fetchData = (type) => {
        fetch(`${baseURL}/${type}`)
        .then(res=>res.json())
        .then(res=>setData(res))
    }

    useEffect(()=>{
        fetchData(initialType)
    },[]);

  return {
    data,
    fetchData
  };
}

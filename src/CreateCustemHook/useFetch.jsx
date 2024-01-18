import{ useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data , setData] = useState([])
    const [error , setError] = useState()

    useEffect(() => {
        const controller = new AbortController()
        fetch(url , {signal : controller.signal})
        .then(res => res.json())
        .then(d => setData(d))
        .catch(setError)

        return () => controller.abort()
    } , [url])
    return {data , error}
}

export default useFetch
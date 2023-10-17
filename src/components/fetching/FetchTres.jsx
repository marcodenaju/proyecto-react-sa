import axios from "axios"
import { useEffect, useState } from "react"

export const FetchTres = () => {
  let {data, isLoading, errorMessage} = useFetch("https://jsonplaceholder.typicode.com/albums", []);
  console.log(data)

// export const FetchTres = () => {

//     const [comments, setComments] = useState([])
    
//     useEffect(()=>{
//        const data = axios.get("https://jsonplaceholder.typicode.com/comments")
//        data.then(res => setComments(res.data) ).catch(err => console.log(err))
//     },[])
    
//     console.log(comments)

  return (
    <div>FetchTres</div>
  )
}
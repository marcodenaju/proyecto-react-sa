import axios from "axios"
import { useEffect, useState } from "react"

export const FetchTres = () => {
  let {data, isLoading, errorMessage} = useFetch("https://jsonplaceholder.typicode.com/albums", []);
  console.log(data)

  return (
    <div>FetchTres</div>
  )
}
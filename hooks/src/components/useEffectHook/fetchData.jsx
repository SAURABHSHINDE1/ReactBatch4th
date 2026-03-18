import { useEffect, useState } from "react"

const FetchData = () => {

    const [count , setCount] = useState(0)

    useEffect(()=>{

        const fetchApi = async()=>{

        let res = await fetch('https://jsonplaceholder.typicode.com/posts')

        let data = await res.json()

        console.log(data)

    }

    fetchApi()

    } , [])

    return ( <>

    <h1>Count : {count}</h1>

    <button onClick={()=>setCount(count+1)}>Increament</button>

    
    </> );
}
 
export default FetchData;
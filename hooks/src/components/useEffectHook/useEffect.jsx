import { useEffect, useState } from "react";

const GetData = () => {

    // useEffect(()=>{

    //     return ()=>{}

    // } ,[])

    const [count , setCount] =useState(0)


    useEffect(()=>{
        //  console.log(count)

        console.log("hello")

        document.title = count
    } , [])


  
    return ( <>

    <h1>Count :{count}</h1>

    <button onClick={()=>setCount(count + 1)}>Increament</button>


    </> );
}
 
export default GetData;
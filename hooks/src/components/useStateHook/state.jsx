import { useState } from "react";

const State = () => {


    const [abc , setAbc] = useState(10)

  console.log( useState(10))

    return ( <>

    <h1>{abc}</h1>

    <button onClick={()=>setAbc("om")}>click mi</button>


    <button onClick={()=> setAbc("Ishwari")}>change name </button>
   
    
    </> );
}
 
export default State;
import { useRef } from "react";

const Refs = () => {

    // let heading = useRef(null)
    // let heading5 = useRef(null)

    let userName = useRef(null)

    // console.log(heading.current.innerText)
    // console.log(heading5.current.innerText)

    const handleForm = (e)=>{
        e.preventDefault()

        console.log(userName.current.value)

    }

    return ( <>

    {/* <h1 ref={heading}>Hello from my website </h1>

    <h5 ref={heading5}>Hello DreamsGuider</h5> */}


    <form onSubmit={handleForm}> 

        <input type="text" placeholder="Enter name" ref={userName} />

        <button type="submit">submit</button>

    </form>
    
    </> );
}
 
export default Refs;
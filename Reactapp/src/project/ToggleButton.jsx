
import { useState } from 'react';
import './togglebutton.css'

const ToggleButton = () => {

    const [ison , setIson] = useState(false)

   

    return ( <>


        <div className={`toggleButton ${ ison ? "bg" : ""}`} onClick={()=>setIson(!ison)}>

            <div className={`switch ${ison ? "on" :""}`}>

                <h1>{ison ? "ON" : "OFF"}</h1>

            </div>

        </div>
          
    
    </> );
}
 
export default ToggleButton;
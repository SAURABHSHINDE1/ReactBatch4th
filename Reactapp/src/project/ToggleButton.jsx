import { useState } from 'react';
import './togglebutton.css'

const ToggleButton = () => {

    const [ison , setIson] = useState(false)

    console.log(ison)

    return ( <>


            <div className="toggleButton" onClick={()=>{setIson(!ison)}}>

                <div className={`switch ${ison ? "on" : "off"}`}>


                    <h1>{ison ? "ON" : "OFF" }</h1>


                </div>
            </div>

    
    </> );
}
 
export default ToggleButton;
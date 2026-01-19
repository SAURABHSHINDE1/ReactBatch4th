import '../styles/card.css'
import img from '../assets/img.jpg'
import { FaStar } from "react-icons/fa";

const Crad = () => {
    let ratings = 4.9
    return ( <>

    <div className="box">

        <div className="upper">
            <img src={img} alt="" />
        </div>

        <div className="lower">
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, consequuntur?</h4>

            <h3 className={ratings >3 ? "rating" : "badrating"}> {ratings} <FaStar size={15} /></h3>

        </div>

    </div>


    
    </> );
}
 
export default Crad;
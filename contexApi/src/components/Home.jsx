import { useContext } from "react";
import { dataContext } from "./contextApi";

const Home = () => {

    const { name } = useContext(dataContext)

    return ( <>

    <h1>This is Home Page {name}</h1>
    
    </> );
}
 
export default Home;
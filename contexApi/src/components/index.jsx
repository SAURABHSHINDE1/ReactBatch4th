import { useContext } from "react";
import { dataContext } from "./contextApi";

const Index = () => {

    const {name} = useContext(dataContext)


    return ( <>


            <h1>Hello from Index</h1>

            <h1>My name is {name}</h1>

    </> );
}
 
export default Index;
import Index from "./components";
import { DataProvider } from "./components/contextApi";
import Home from "./components/Home";

const App = () => {

  return ( <>

  <DataProvider>

    <Index/>

    <Home/>

  </DataProvider>
  
  </> );
}
 
export default App;
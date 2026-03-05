import Gretting from "./components/greeting";
import Home from "./components/Home";

const App = () => {

  let sname = "saurabh" // props as a string

  let age = 20 // props as number

  let isActive = false // props as boolean value 

  let arr = ["pratik" , "vishal" , "rohit"] //props as array

  let userData = {
    name :"Ishwari",
    course:"Full Stack"
  }  // props as object data


  const greet = ()=>{
    alert("hello user How are you !")
    console.log("greet successfull")
  }
  
  return ( <>
  
    {/* <Home name={sname} age={age} isActive={isActive} arr={arr} userData={userData}/> */}

    <Gretting saygreet={greet}/>


  </> );
}
 
export default App;
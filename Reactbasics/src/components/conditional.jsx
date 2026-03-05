import '../styles/condtional.css'

const Conatiner2 = () => {

    let ison = false 

    let age = 16

    let name = "Ishwari"

    let rating = 3.5
    return ( <>

    <h1>{ison ?   "Switch to Drakmode" :  "Switch to lightmode"}</h1>


    <h1>you are {age >= 18 ? "eligibal for vote" : " Not eligibal for vote"} </h1>

    <h1>Hello {name}</h1>

    <h1 style={{color:rating >= 3 ? "green" : "red"}}>Hello DreamsGuider</h1>

    <h1 className={rating >=3 ? "test" : "heading"}>hello Om And Ishwari</h1>
    
    </> );
}
 
export default Conatiner2;
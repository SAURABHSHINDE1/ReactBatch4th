const Home = () => {

    let name = "Pratik"

    let age = 45

    return ( <>
    
        <h1>My name is {name}</h1>

        <h2>My age is {age}</h2>

        <h3> I am {age >=18 ? "eligibal for vote " : "not eligibal for vote"}</h3>


    </> );
}
 
export default Home;


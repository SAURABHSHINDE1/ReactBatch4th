const Home = ({name , age , isActive, arr , userData}) => {
  

  return (
    <>
      <h1>Welcome {name}</h1>
      <br />
      <h2>Age :{age}</h2>
      <br />
      <h2>{isActive ? "The User is Active" : "The User in Not Active"}</h2>
      <br />

      <h2>my name is :{arr[0]}</h2>
      <h2>my name is :{arr[1]}</h2>
      <h2>my name is :{arr[2]}</h2>
      <br />

      <h2>The name is : {userData.name}</h2>
      <br />
      <h2>Course Name :{userData.course}</h2>
    </>
  );
};

export default Home;
 
import "../styles/loops.css";

const Loops = () => {
  const cars = [
    {
      carName: "BMW",
      Price: 20000000,
    },

    {
      carName: "Audi",
      Price: 30000000,
    },

    {
      carName: "Alto",
      Price: 1200000000,
    },

    {
      carName: "Frari",
      Price: 23000000,
    },

    {
      carName: "Mustang",
      Price: 26000000,
    },

    {
      carName: "Range Rover",
      Price: 23000000,
    },
  ];

  return (
    <>
      <div className="container">

        {cars.map((elem, index) => {
            
          return <div className="carinfo">
              <h1>Car Name:- {elem.carName} </h1>
              <h2>Price:{elem.Price}</h2>
            </div>
        
        })}

      </div>
    </>
  );
};

export default Loops;

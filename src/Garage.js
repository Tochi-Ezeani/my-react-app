import Car from "./Car";

function Garage(props) {
  // const carInfo = {
  //   name: "Ford",
  //   model: "Mustang"
  // };

  // const cars = props.cars;

  // const cars = ['Ford', 'BMW', 'Audi'];
  const cars = [
    { id: 1, brand: 'Ford' }, 
    { id: 2, brand: 'BMW' }, 
    { id: 3, brand: 'Audi' }
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      {/* <h1>Garage</h1> */}
      {/* <Car brand={ carInfo } /> */}
      {/* { cars.length > 0 && 
        <h2>
          You have { cars.length } cars in your garage. 
        </h2>
      } */}
      <ul>
        { cars.map( ( car ) => <Car key={ car.id } brand={ car.brand } /> ) }
      </ul>
    </>
  );
};

export default Garage;
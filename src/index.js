import React from 'react';
import ReactDOM from 'react-dom/client';
// import Car from './Car.js';
// import Garage from './Garage.js';
import Football from './Football';

// const myFirstElement = <h1>Hello React!</h1>;

// The map() method
// const myArray = ['apple', 'banana', 'orange'];
// const myList = myArray.map((item) => <p>{item}</p>);

// Previous myElements
// (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );
/* <h1>I Love JSX!</h1>; */
/* <h1>React is { 5 + 5 } times better with JSX</h1>; */
// (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );
// (
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// );
// (
//   <>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </>
// );
/* <input type="text" />; */

// const x = 5;
// const myElement = <h1>{(x < 10) ? "Hello" : "Goodbye"}</h1>;

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Football />);
import React from 'react';
import ReactDOM from 'react-dom/client';

// const myFirstElement = <h1>Hello React!</h1>;

// The map() method
// const myArray = ['apple', 'banana', 'orange'];
// const myList = myArray.map((item) => <p>{item}</p>);

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(myElement);
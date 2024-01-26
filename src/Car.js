function Car(props) {
  // return <h2>Hi, I am a Car!</h2>;
  // return <h2>I am a { props.brand.model }!</h2>;
  return <li>I am a { props.brand }</li>;
}

export default Car;
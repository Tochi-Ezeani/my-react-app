function Football() {
  // const shoot = () => {
  //   alert('Great Shot!');
  // };

  // 
  
  const shoot = (a, b) => {
    alert(b.type);
  };
  
  return (
    <button onClick={ (event) => shoot('Goal!', event) }>Take the shot</button>
  );
};

export default Football;
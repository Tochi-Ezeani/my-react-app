function Football() {
  // const shoot = () => {
  //   alert('Great Shot!');
  // };

  const shoot = (a) => {
    alert(a);
  };
  
  return (
    <button onClick={ () => shoot('Goal!') }>Take the shot</button>
  );
};

export default Football;
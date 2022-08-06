const Button = (prop) => {
  return (<>
    <button onClick={()=>alert("You clicked on Button " +prop.number)}>Button {prop.number}</button>
    </>)
  
};

export default Button;
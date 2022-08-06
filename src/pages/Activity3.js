import {useState} from "react";

const Activity3 = () => {
  const [count, setCount] = useState(0);
  return (<>
    <p>Button has been clicked: {count} </p>
    <button onClick={()=> setCount (count+1)}>Click Me</button>
    </>);
};



export default Activity3;
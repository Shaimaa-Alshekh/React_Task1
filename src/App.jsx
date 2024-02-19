
import { useState } from 'react';
import './App.css'

function App() {

  let [count,setCount]=useState(0);
 const changeCounter = () =>{
  setCount(count+1);

  }    
  return(
    <div>
      <button onClick={changeCounter}> Shaimaa Alshekh {count}</button>

    </div>
    

  );
}

export default App

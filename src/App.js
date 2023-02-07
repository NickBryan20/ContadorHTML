import './App.css';
import Contador from './components/Contador';
import { useState } from 'react';



function App() {
  const [valor, setValor]=useState(0)

  const incrementarHandLer=()=>{
    setValor(valor+1)
  }
  const decrementarHandLer=()=>{
    setValor(valor-1)
  }

  return (
    <div className="App">
      <Contador valor={valor}/>
      <div>
        <button onClick={incrementarHandLer}>+</button>
        <button onClick={()=>setValor(0)}>Clear</button>
        <button onClick={decrementarHandLer}>-</button>
      </div>
    </div>
  );
}

export default App;

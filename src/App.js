import { useSelector } from 'react-redux';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState();
  const value = useSelector((state)=> state.counterValues.value);
  console.log(value);
  return (
    <div className="App">
      <div className='counter'>
        <div className='value'>0</div>
        <button>Increament</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;

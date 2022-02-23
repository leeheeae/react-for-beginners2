import Button from './Button';
import styled from './App.module.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);

  console.log('call API');
  return (
    <div>
      <h1 className={styled.title}>{counter}</h1>
      <Button text={'Continue'} onClick={onClick} />
    </div>
  );
}

export default App;

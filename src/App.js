import Button from './Button';
import styled from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  //useState
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  //func
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //useEffect
  useEffect(() => {
    console.log('한번만 실행');
  }, []);
  useEffect(() => {
    console.log('counter');
  }, [counter]);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('search for', keyword);
    }
  }, [keyword]);

  //start
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styled.title}>{counter}</h1>
      <Button text={'Continue'} onClick={onClick} />
    </div>
  );
}

export default App;

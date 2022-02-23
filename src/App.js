import { useState, useEffect } from 'react';

function Hello() {
  //func
  function byeFn() {
    console.log('destoryed : (');
  }
  function hiFn() {
    console.log('i`m here!');
    return byeFn;
  }

  //useEffect
  useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

function App() {
  //useState
  const [showing, setShowing] = useState(false);
  //func
  const onClick = () => setShowing((prev) => !prev);

  //useEffect

  //start
  return (
    <div>
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;

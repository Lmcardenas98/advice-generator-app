import './App.css';
import {useState, useEffect} from 'react'
import separator from './images/pattern-divider-desktop.svg';
import btn from './images/icon-dice.svg';

function App() {

  const [random, setRandom] = useState(1)
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${random}}`)
                          .then(resp => resp.json())
                          .then(resp => setApi(resp.slip))
  }, [random])
  console.log(random)
  return (
    <div className="App">
      <h1>ADVICE #{api.id}</h1>
      <p>"{api.advice}"</p>
      <div className='separator'>
        <img src={separator} alt='' />
      </div>
      <div className='container-btn'>
        <div className='btn' onClick={() => setRandom(random+1)}>
          <img src={btn}  alt=''/>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import add from './stringCalculator';

function App() {
  const [string, setString] = useState<string>('');
  const [result, setResult] = useState<number>(0);


  return (
    <>
    <div>
      <input type="text" value={string} onChange={(e) => setString(e.target.value)} />
      <button onClick={() => {
        const res:number = add(string);
        setResult(res);
        }}>Add</button>
      {result && <p>{result}</p>}
    </div>
    </>
  )
}

export default App

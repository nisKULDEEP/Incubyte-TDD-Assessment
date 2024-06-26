import { useState } from 'react'
import './App.css'
import add from './stringCalculator';

function App() {
  const [string, setString] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState('');

  const handleAdd = () => {
    setError(error);
    setResult(0);
    try {
      const res:number = add(string);
      setResult(res);
    } catch (error:any) {
      setError(error.toString());
    }
  
  }

  return (
    <>
    <div>
      {error && <div className='error' style={{color:'red'}}>{error}</div>}
      <input type="text" value={string} onChange={(e) => setString(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      {result !== null ? <p>{result}</p> : ''}
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Button from './components/Buttons'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  const handleClick = ({target}) => {
    setCount()
  }

  return (
    <>
      <div className='bg-slate-900 w-[500px] rounded-lg p-3 flex flex-col justify-center items-center'>
          <h1 className='text-white text-2xl font-bold mb-2'>Calculadora</h1>
          <div className='w-full h-20 bg-slate-700 rounded-lg my-4' id='screen'>
            <span>{count}</span>
          </div>
          <div className='flex gap-4'>
            <div id='div-buttons'>
              <Button value="1" onClick={handleClick}>1</Button>
              <Button value="2" onClick={handleClick}>2</Button>
              <Button value="3" onClick={handleClick}>3</Button>
              <Button value="4" onClick={handleClick}>4</Button>
              <Button value="5" onClick={handleClick}>5</Button>
              <Button value="6" onClick={handleClick}>6</Button>
              <Button value="7" onClick={handleClick}>7</Button>
              <Button value="8" onClick={handleClick}>8</Button>
              <Button value="9" onClick={handleClick}>9</Button>
              <Button value="0" onClick={handleClick}>0</Button>
              <Button value=".">.</Button>
              <Button value="%">%</Button>
            </div>
            <div className='flex flex-col'>
              <Button value="/">÷</Button>
              <Button value="-"> - </Button>
              <Button value="+">+</Button>
              <Button value="*">X</Button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App

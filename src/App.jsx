import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  // const [results, setResults] = useState("")
  const [screen, setScreen] = useState("")


  const handleClick = (e) => {
    const newScreen = screen.concat(e.target.value)
    const newCount = count.concat(e.target.value)
    setScreen(newScreen)
    setCount(newCount)
    console.log(count)
    console.log(typeof(count))
  }

  const result = () => {
    try {
      const answer = eval(count)
      const res = answer.toString()
      setScreen(`${count} = ${res}` )
      setCount(res)
    } catch(err) {
      alert("Hubo un error, intenta nuevamente")
    }
  }

  const deleteScreen = () => {
    setCount("")
    setScreen("")
  }

  const deleteLastElement = () => {
    const newValue = count.pop()
    setCount(newValue)
    setScreen(newValue)
  }

  const styleBtn = "font-semibold outline-none border-none bg-indigo-500 text-white p-4 rounded-md hover:bg-blue-800 transition-all duration-200 m-1"

  return (
    <>
      <div className='bg-slate-900 w-[400px] rounded-lg p-3 flex flex-col justify-center items-center'>
          <h1 className='text-white text-2xl font-bold mb-2'>Calculadora</h1>
          <div className='w-full h-20 bg-slate-700 rounded-lg my-4 text-right p-5 flex items-center' id='screen'>
            <span className='w-full'>{screen}</span>
          </div>
          <div className='board w-full grid grid-cols-4'>
              <button className={styleBtn} onClick={deleteScreen}><i className="fa-solid fa-trash"></i></button>
              <button className={styleBtn} onClick={deleteLastElement}><i className="fa-solid fa-delete-left"></i></button>
              <button value="%" onClick={handleClick} className={styleBtn}><i className="fa-solid fa-percent"></i></button>
              <button value="/" onClick={handleClick} className={styleBtn}><i className="fa-solid fa-divide"></i></button>
              <button value="1" onClick={handleClick} className={styleBtn}>1</button>
              <button value="2" onClick={handleClick} className={styleBtn}>2</button>
              <button value="3" onClick={handleClick} className={styleBtn}>3</button>
              <button value="*" onClick={handleClick} className={styleBtn}><i className="fa-solid fa-xmark"></i></button>
              <button value="4" onClick={handleClick} className={styleBtn}>4</button>
              <button value="5" onClick={handleClick} className={styleBtn}>5</button>
              <button value="6" onClick={handleClick} className={styleBtn}>6</button>
              <button value="+" onClick={handleClick} className={styleBtn}><i className="fa-solid fa-plus"></i></button>
              <button value="7" onClick={handleClick} className={styleBtn}>7</button>
              <button value="8" onClick={handleClick} className={styleBtn}>8</button>
              <button value="9" onClick={handleClick} className={styleBtn}>9</button>
              <button value="-" onClick={handleClick} className={styleBtn}><i className="fa-solid fa-minus"></i></button>
              <button value="0" onClick={handleClick} className={styleBtn}>0</button>
              <button value="." onClick={handleClick} className={styleBtn}>.</button>
              <button className={`${styleBtn}`} onClick={result}>=</button>
          </div>
      </div>
    </>
  )
}

export default App

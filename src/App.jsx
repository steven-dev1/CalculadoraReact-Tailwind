import * as React from 'react';
import { useState } from 'react'
import { evaluate } from 'mathjs'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [count, setCount] = useState("")
  // const [results, setResults] = useState("")
  const [screen, setScreen] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleClick = (e) => {
    const newScreen = screen.concat(e.target.innerText)
    const newCount = count.concat(e.target.innerText)
    setScreen(newScreen)
    setCount(newCount)
    console.log(e.target.innerText)
  }

  const result = () => {
    if (count) {
      try {
        const answer = evaluate(count)
        const res = answer.toString()
        setScreen(`${count} = ${res}` )
        setCount(res)
      } catch(err) {
        console.warn(err)
      }
    } else {
      setOpen(true)
    }
  }

  const deleteScreen = () => {
    setCount("")
    setScreen("")
  }

  const deleteLastElement = () => {
    const newValue = count.slice(0, count.length - 1);
    setCount(newValue)
    setScreen(newValue)
  }

  const styleBtn = "font-semibold outline-none border-none bg-indigo-500 text-white p-4 rounded-md hover:bg-blue-800 transition-all duration-200 m-1"

  return (
    <>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="shadow-xl translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] w-[400px] bg-black text-white rounded-xl p-4">
            <button onClick={handleClose} className='absolute w-10 h-10 bg-red-600 shadow-xl hover:bg-red-800 transition-all duration-200 border-none text-white top-[-10%] right-[-4%]'>X</button>
            <Typography id="modal-modal-description">
              <span className=' text-lg font-semibold'>Por favor, introduce valores para realizar operaciones.</span>
            </Typography>
          </Box>
        </Modal>
      <div className='bg-slate-900 w-[400px] rounded-lg p-3 flex flex-col justify-center items-center'>
          <h1 className='text-white text-2xl font-bold mb-2'>Calculadora</h1>
          <div className='w-full h-20 bg-slate-700 rounded-lg my-4 text-right p-5 flex items-center' id='screen'>
            <input type='text' className='appearance-none w-full bg-transparent text-right outline-none' value={screen} onChange={(e) => {
              const parseValue = e.target.value
              const value = parseValue.toString()
              setScreen(value)
              setCount(value)
            }}/>
          </div>
          <div className='w-full'>
              <div className='board w-full grid grid-cols-4'>
                  <button className={styleBtn} onClick={deleteScreen}><i className="fa-solid fa-trash"></i></button>
                  <button className={styleBtn} id="deleteLastValue-btn" onClick={deleteLastElement}><i className="fa-solid fa-delete-left"></i></button>
                  <button onClick={handleClick} className={styleBtn}>%</button>
                  <button onClick={handleClick} className={styleBtn}>/</button>
                  <button onClick={handleClick} className={styleBtn}>1</button>
                  <button onClick={handleClick} className={styleBtn}>2</button>
                  <button onClick={handleClick} className={styleBtn}>3</button>
                  <button onClick={handleClick} className={styleBtn}>*</button>
                  <button onClick={handleClick} className={styleBtn}>4</button>
                  <button onClick={handleClick} className={styleBtn}>5</button>
                  <button onClick={handleClick} className={styleBtn}>6</button>
                  <button onClick={handleClick} className={styleBtn}>+</button>
                  <button onClick={handleClick} className={styleBtn}>7</button>
                  <button onClick={handleClick} className={styleBtn}>8</button>
                  <button onClick={handleClick} className={styleBtn}>9</button>
                  <button onClick={handleClick} className={styleBtn}>-</button>
                  <button onClick={handleClick} className={styleBtn}>0</button>
                  <button onClick={handleClick} className={styleBtn}>.</button>
                  <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className={`${styleBtn} bg-red-600`} onClick={result}>=</button>
              </div>
              {/* <div className='w-full'>

              </div> */}
          </div>
      </div>
    </>
  )
}

export default App

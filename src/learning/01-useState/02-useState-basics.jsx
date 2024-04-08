import { useState } from 'react'

const UseStateBasics = () => {
  // const [state, setState] = useState(initialState)
  const [number, setNumber] = useState(0)

  // console.log(useState())
  // console.log(useState(10))

  const handleClick = () => {
    // number++
    setNumber(number + 1)
  }

  return (
    <div>
      <p className='text-3xl'>{number}</p>
      <button className='px-2 py-1 bg-slate-400 rounded-md' onClick={handleClick}>
        increment
      </button>
    </div>
  )
}
export default UseStateBasics

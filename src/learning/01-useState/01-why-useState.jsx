const WhyUseState = () => {
  let num = 0

  const handleIncrement = () => {
    num++
    console.log(num)
  }

  return (
    <div>
      <p className='text-3xl'>{num}</p>
      <button className='px-2 py-1 bg-slate-400 rounded-md' onClick={handleIncrement}>
        increment
      </button>
    </div>
  )
}
export default WhyUseState

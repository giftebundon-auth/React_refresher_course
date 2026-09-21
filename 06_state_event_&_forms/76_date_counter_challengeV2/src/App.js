import './style.css'
import { useState } from 'react'

export default function App () {
  return (
    <div className='App'>
      <Counter />
    </div>
  )
}

// first: declare the state variable
// second: use it in the jsx
// third: update it

function Counter () {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleChange (e) {
    setStep(Number(e.target.value))
  }
  function handleCountInc () {
    setCount(prev => prev + step)
  }

  const date = new Date()

  date.setDate(date.getDate() + count)

  function handleCountDesc () {
    setCount(prev => prev - step)
  }

  function handleReset(){
    setCount(0)
    setStep(1)
  }

  return (
    <div>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={handleChange}
        />
        <span> Step: {step} </span>
      </div>
      <div>
        <button onClick={handleCountDesc}>-</button>
        <input
          type='text'
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountInc}>+</button>
      </div>
      <p>
        <span>
          {' '}
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} days ago  was `}
          {date.toDateString()}
        </span>
      </p>
      { (count !== 0 || step !== 1) ? <div>
        <button onClick={handleReset} > Reset</button>
      </div>: null}
    </div>
  )
}

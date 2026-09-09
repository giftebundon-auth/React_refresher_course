import { useState } from 'react'

// import 'style.css'
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
  function handleCountInc () {
    setCount(prev => prev + step)
  }

  const date = new Date()

  date.setDate(date.getDate() + count)

  function handleCountDesc () {
    setCount(prev => prev - step)
  }
  function handleStepDec () {
    setStep(prev => prev - 1)
  }

  function handleStepInc () {
    setStep(prev => prev + 1)
  }

  return (
    <>
      <div>
        <button onClick={handleStepDec}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepInc}>+</button>
      </div>
      <div>
        <button onClick={handleCountDesc}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountInc}>+</button>
      </div>
      <p>
        <span>
          {' '}
          {count === 0
            ? 'Today is'
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} days ago  was `}{date.toDateString()}
        </span>
      </p>
    </>
  )
}

import { useState } from 'react';
import './index.css'

//a.  state is the most important concept in react

// b. state in practice
//1. useState
// 2. useReducer
// 3. Context API

//c. Thinking About State
//1. when to use state
// 2. where to place state
//3. Types of state

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App(){
  // All react functions that start with 'use' hooks 
  // Hooks are called on the top level of the component , not inside the component function or if statement or inside a loop or inside another function
  // State should only be updated using the state setter function, not manually
let [step, setStep]  = useState(1)
// const [test] = useState({name:'Jonas'})
const [test, setTest] = useState({name:'Jonas'})


function handlePrevious(){
  if(step > 1) setStep(step - 1);
  // BaD Practice`: mutating object like this in react
  //test.name = 'Fred'

  //React is all about immutability
  setTest({name:'Fred'})

}

function handleNext(){
  if(step  < messages.length) setStep(step +1);
  // step = step +1 // we do not directly mutate state in react. the state setter function is only used to update state
}

  return <div className="steps">
    <div className="numbers">
      <div className={step >= 1 ? "active" :''} >1</div>
      <div className={step >= 2 ? "active" :''}  >2</div>
      <div className= {step >= 3? "active" :''} >3</div>
    </div>
    <p className="message">Step {step} : {messages[step-1]} {test.name} </p>
    <div className="buttons">
      <button style={{backgroundColor:'#7950f2', color:'#fff'}} onClick={handlePrevious} >Previous</button>
      <button style={{backgroundColor:'#7950f2', color:'#fff'}} onClick={handleNext}>Next</button>

    </div>
  </div>
}
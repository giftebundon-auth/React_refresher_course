import { useState } from 'react';
import './index.css'



const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App(){
  // first part is to declare/establish the state
  // second part is to then use the state variable in our code
  // third part of using state is to update the state

const [step, setStep]  = useState(1)
const [isOpen, setIsOpen] = useState(true)

function handlePrevious(){
  if(step > 1) setStep(step - 1);


}

function handleNext(){
  if(step  < messages.length) setStep(step +1);
  
}

  return (
    <>
      <button className='close' onClick={()=> setIsOpen(!isOpen)} >&times;</button>
      { isOpen && (
        <div className="steps">
    <div className="numbers">
      <div className={step >= 1 ? "active" :''} >1</div>
      <div className={step >= 2 ? "active" :''}  >2</div>
      <div className= {step >= 3? "active" :''} >3</div>
    </div>
    <p className="message">Step {step} : {messages[step-1]} </p>
    <div className="buttons">
      <button style={{backgroundColor:'#7950f2', color:'#fff'}} onClick={handlePrevious} >Previous</button>
      <button style={{backgroundColor:'#7950f2', color:'#fff'}} onClick={handleNext}>Next</button>

    </div>
  </div>)
} 
    </>
  )
}
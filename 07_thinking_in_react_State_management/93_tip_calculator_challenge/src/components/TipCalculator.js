import {useState} from 'react'

import BillInput from './BillInput'
import SelectPercentage from './SelectPercentage'
import Output from './Output'
import Reset from './Reset'
export default function TipCalculator(){
    const [bill, setBill] = useState(null)
    const [percentage1, setPercentage1] = useState(0)
    const [percentage2, setPercentage2] = useState(0)

    // derived state
    const tip = bill * ((percentage1 + percentage2) / 2 / 100);
    function handleReset(){
        setBill(null)
        setPercentage1(0)
        setPercentage2(0)
    }
    return <div>
        <BillInput
        bill={bill}
        OnSetBill={setBill}
        >
            How much was the bill?
        </BillInput>
        <SelectPercentage percentage={percentage1} onHandleSetPercentage ={setPercentage1}>
        How did you like the service?
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onHandleSetPercentage ={setPercentage2}>
        How did your friend like the service?
        </SelectPercentage>
        {bill > 0 && <>
            <Output bill={bill} tip={tip} />
        <Reset onReset={handleReset}>Reset</Reset></>}

    </div>
}
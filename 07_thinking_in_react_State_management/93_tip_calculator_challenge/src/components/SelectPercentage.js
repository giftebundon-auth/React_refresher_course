const serviceSatisfaction = [{text:'Dissatisfied', value :0},{text:"It was okay", value:5}, {text:"It was good", value:10},{text:"Absolutely Amazing!", value:20}]
export default function SelectPercentage({children, onHandleSetPercentage, percentage}){
    return <div>
    <label>{children}</label>
    <select value={percentage} onChange={(e)=>onHandleSetPercentage(Number(e.target.value))}>
        {serviceSatisfaction.map(el=><option key={el.value} value={el.value}>{el.text} ({el.value}%) </option> )}
    </select>
    </div>
}
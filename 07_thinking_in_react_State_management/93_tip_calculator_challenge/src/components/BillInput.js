export default function BillInput({children, bill,OnSetBill}){
    return (
        <div>
            <label>{children}:</label>
            <input
            type='text'
            placeholder="Bill value"
            value = {bill}
            onChange = {(e)=>OnSetBill(Number(e.target.value))}
            />
        </div>
    )
}
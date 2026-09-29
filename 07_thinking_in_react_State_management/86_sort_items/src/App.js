
import { useState } from "react";


export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems (item){
    // in react, we are not allowed to mutate state
    // Array.push mutates the original array, which React frowns at
    setItems(items=>([
      ...items,
      item
    ]))
  }

  function handleDeleteItem(id){
    console.log(id)
    setItems(currItems=> currItems.filter(item => item.id !==id
      )
    )
  }
  
  // video 83 Updating an item: Complex Immutable Data  Operation
  function handleToggleItem (id){
    setItems(currItems => currItems.map(item=> item.id ===id? {...item, packed: !item.packed}  : item))

  }
  
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items = {items} onDeleteItem ={handleDeleteItem} onToggleItems ={handleToggleItem} />
      <Stats items={items}  />
    </div>
  );
}
function Logo() {
  return <h1> 🏝️ Far Away 🧳</h1>;
}
function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] =  useState(1)
  

  
  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    const newItem =  {description, quantity, packed:false, id: Date.now()}
    onAddItems(newItem)
    setDescription("")
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip?</h3>
      <select value = {quantity }   onChange={e=>setQuantity(Number(e.target.value))} >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description } onChange = {e => setDescription(e.target.value )} />
      <button>Add</button>
    </form>
  );
}
function PackingList({items,onDeleteItem, onToggleItems}) {
  const [sortBy, setSortBy] = useState("input")
  let sortedItems;
  if(sortBy === 'input') sortedItems = items;


  //we first of use slice on the items array because the sort method is a mutating method and we don't want to mutate the original items array.
  if(sortBy === 'description') sortedItems = items.slice().sort((a,b)=> a.description.localeCompare(b.description) )

  if(sortBy === 'packed') sortedItems = items.slice().sort((a,b)=> Number(a.packed) - Number(b.packed))
  return (
    <div className="list">
      <ul>
        { sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} />
        ))}
      </ul>
      <div className='actions'>
        <select value = {sortBy} onChange={e => setSortBy(e.target.value)} >
          <option value='input'>Sort by the input order</option>
          <option value ='description'>Sort by description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>
      </div>
    </div>
  );
}
function Stats({items}) {
  if(!items.length) return (<p className ='stats'> <em>Start adding some items to your packing list 🚀 </em> </p>)
  const numItems = items.length;
  const numPacked =  items.filter(item => item.packed).length
  const percentage =  Math.round((numPacked/numItems) * 100)
  return (
    <footer className="stats">
      <em>💼 You have {numItems} items on your list , and you already packed {numPacked} ({percentage}%) </em>
    </footer>
  );
}

function Item({ item, onDeleteItem,onToggleItems }) {
  return (
    <li>
      <input type="checkbox" value ={item.packed} onChange= {()=>onToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity }  { item.description }
        
      </span>
      <button onClick={()=>onDeleteItem(item.id)} > ❌ </button>
    </li>
  );
}

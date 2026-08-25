import React from "react";
import ReactDom from "react-dom/client";
import './index.css'
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            
            <Header/>
            <Menu/>
            <Footer/>
            
        </div>
    );
}
function Header(){
    const style = {
        color:'red',
        fontSize: '48px',
        textTransform : 'uppercase'
    }
    return <header className="header">
        <h1  /*style={style}*/  >Fast React Pizza Co. </h1>
    </header>
}
//props in react is used to pass data from parent component to child component
function Menu(){
    // const pizzas = []
    const pizzas = pizzaData
    const numPizza =  pizzas.length
    return <main className="menu">
            <h2  >Our Menu</h2>
            {numPizza > 0 ?  (<ul className="pizzas">
                {
                    pizzaData.map(pizza=> (
                        <Pizza
                        key={pizza.name}
                        pizzaObj={pizza}
                        />
                    ) )
                }
            </ul>): <p>We're still working on our menu. Please come back later</p>}
            
    </main>
}


function Pizza({pizzaObj}) {
    return <li className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name}  />
        <div>
            <h3>{pizzaObj.name} </h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.price +3}</span>
        </div>
    </li>;
}
function Footer(){
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

    return <footer className="footer"> 
    {isOpen? <Order
    closeHour={closeHour}
    openHour={openHour}
    /> : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer>
}

function Order({closeHour,openHour}){
    return <div className="order">
    <p>We're open from {openHour} to {closeHour}:00. Come visit us or order online</p>
    <button className="btn">Order</button>
    </div>
}
// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

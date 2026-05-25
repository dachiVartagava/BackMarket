import { useState } from "react";
import Products from "../components/Products";
const cartItems = [
    { title: "Iphone 15 pro", Price: "899$" },
    { title: "MacBook Air M2", Price: "1099$" },
    { title: "Samsung Galaxy S28", Price: "1000$" },
];
export default function Promocode(){
    let total = 0;
    const [inputValue, setInputValue] = useState("");
    const [discount, setDiscount] = useState(0);
    const subTotal = cartItems.reduce((sum, item) => {
        return sum + parseFloat(item.Price.replace("$", ""));
    }, 0);
     const checkstate =() =>{
        total +=cartItems.price;
    }
    const promoInput =() =>{
        if (inputValue === "Save10"){
            setDiscount(10)
            return(alert("პრომოკოდი წარმატებით დადასტურდა!"))
        }else{
            setDiscount(0)
            return (alert("არასწორი პრომოკოდია!"))
        }
    }
   let finaltotal = subTotal - discount
    
    return(
        <div className="promo-card-side">
            <input type="text" placeholder="ჩაწერე პრომოკოდი" value={promoInput} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={checkstate}>Apply Promo</button>
            {discount > 0 && <p style={{ color: "green" }}>ფასდაკლება: -${discount}</p>}
            
            <h4>საბოლოო ფასი: ${finaltotal}</h4>
        </div>
    );
}
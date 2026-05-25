import { useState } from "react";
import { Heart } from "lucide-react";
function ProductCard({title,price,image}){
    const [isFavorite,setIsFavorite] = useState(false);
    const togglefavorites = () =>{
        setIsFavorite(!isFavorite)
    };
    return(
        <div className="ProductCard-content">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{price}</p>
            <button>Add to Cart</button>
            <Heart onclick={togglefavorites} style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    color: isFavorite ? "#ef4444" : "#6b7280",
                    fill: isFavorite ? "#ef4444" : "none" 
                }}
                size={24}/>
        </div>
    );
}
export default ProductCard;
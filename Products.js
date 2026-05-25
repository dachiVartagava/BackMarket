
import ProductCard from "./ProductCard";
const products = [
    {
        title:"Iphone 15 pro",
        Price:"899$",
        Image:"https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/plain/s3://cms/product/a3/44/a34423b7b08300fde0625964a0130f66/250915140035204152.webp"
    },
    {
        title:"MacBook Air M2",
        Price:"1099$",
        Image:"https://itechnics.ge/wp-content/uploads/2024/12/mignight-1.jpg"
    },
    {
        title:"Samsung Galaxy S28",
        Price:"1000$",
        Image:"https://m.media-amazon.com/images/I/71RlAF779OL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
];
function Products(){
    return(
        <section className="products">
            <h2>Popular Products</h2>
            <div className="products-grid">
                {products.map((product,index)=>
                <ProductCard
                key={index}
                title={product.title}
                price={product.Price}
                image={product.Image}
                />
                )}
            </div>
        </section>
    );
}
export default Products
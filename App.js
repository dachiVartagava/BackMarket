import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
function App(){
    return(
        <>
        <Header/>
        <Hero/>
        <Features/>
        <Products/>
        <Newsletter/>
        <Cart/>
        <Footer/>
        <ProductCard/>
        </>
    );
}
export default App;
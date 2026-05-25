function Header(){
    return(
        <header className="header">
            <div className="header-content">
                <h1>BackMarket</h1>
            </div>
            <nav className="">
                <a href="/">Home</a>
                <a href="/">Phones</a>
                <a href="/">Laptops</a>
                <a href="/">Gaming</a>
                <a href="/">Deals</a>
                <a href="/">Contact</a>
            </nav>
            <div className="header-right">
                <button>Login</button>
            </div>
        </header>
    );
}
export default Header;
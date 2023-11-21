import './App.css';
import {HashRouter as Router, Route, Link, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import {CartProvider} from "./CartContext";



function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
                        <Link to="/" className="navbar-brand text-white namerest" >Интернет магазин ЦАРЬ</Link>
                        <button className="navbar-toggler but" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link text-white">Главная страница <span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link text-white">Корзина</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        <Route path="/product/:productId" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

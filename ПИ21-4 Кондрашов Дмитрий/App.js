import './App.css';
import {HashRouter as Router, Route, Link, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import ProductPage from "./productPage";
import CartPage from "./Cart"
import {CartProvider} from "./CartContext";

function HeaderPunkt({ classname, name }) {
    return (
        <a href={'.'} className={classname}>{name}</a>
    );
}

function HeaderGenerator({array}) {
    // стрелочная функция по списку с использованием реквизитов
    return array.map((item) => (
        <HeaderPunkt name={item.name} classname={item.classname}></HeaderPunkt>
    ));
}

// использование объектов со свойствами (props)
const arrayheader = [
    // {name: 'PLUSHSHOP', classname: 'componyname'},
    {name: 'доставка', classname: 'e4_14'},
    {name: 'о нас', classname: 'e4_18'},
    {name: 'избранное', classname: 'e4_17'},
    {name: 'акции', classname: 'e4_16'},
];

function App() {
    return (
        <>
            <CartProvider>
                <Router>
                    {/* в качестве аргументов передаются свойства */}
                    <div className="panel"></div>
                    <HeaderGenerator array={arrayheader}></HeaderGenerator>
                    <a href={'.'} className="logo"></a>
                    <a href={'.'} className="account"></a>
                    <Link to="/" className="componyname" >PLUSHSHOP</Link>
                    <Link to="/cart" className="e4_42" >КОРЗИНА</Link>
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        <Route path="/product/:productId" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </Router>
            </CartProvider>
        </>
    );
}

export default App;

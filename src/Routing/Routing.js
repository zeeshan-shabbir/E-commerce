import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// import '../css folder/App.css'
// import '../css folder/utilities.css'


import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Woman from "../Pages/Woman/Woman";
import Man from "../Pages/Men/Men";
import Handbag from "../Pages/Handbag/Handbag";
import Header from "../Components/Header/Header";
import Kid from "../Pages/Kid/Kid";
import Footer from "../Components/Footer/Footer";
import ShowProduct from "../Components/ShowProduct/ShowProduct";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
// import Contact from "../Pages/Contact";

const AppRouting = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/:category" component={ShowProduct}></Route>
                <Route path="/Product/:id/:category/:productName">
                    <ProductDetail />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}
export default AppRouting;

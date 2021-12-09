import React from "react";
import BurgerBuilder from '../../assets/images/burgerbuilder.jpg';
import './home.css';

const Home = () => {
    return (
        <div className="container image">
            <img src={BurgerBuilder} alt="Bottom Bread" />
        </div>
    );
}

export default Home;
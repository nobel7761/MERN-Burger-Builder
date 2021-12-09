import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Burger = props => {
    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={Math.random()} />
        })
    })
        .reduce((arr, element) => {
            return arr.concat(element);
        }, []);

    if (ingredientArr.length === 0) {
        ingredientArr = <p style={{ fontWeight: "bold", color: "white", marginTop: "5px" }}>Please add some ingredients!</p>;
    }
    return (
        <div>
            <div style={{ marginTop: '50px' }}>
                <Ingredient type='bread-top' />
                {ingredientArr}
                <Ingredient type='bread-bottom' />
            </div>


        </div>
    )
}

export default Burger;
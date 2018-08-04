import React from 'react';
import Auxi from '../../../hoc/Auxi';


const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map((igKey,i) =>
        <li key= {igKey+i}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>:  {props.ingredients[igKey]}</li>);

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>Delicious Burgur with following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to Check out</p>
        </Auxi>
    )
}

export default OrderSummary;
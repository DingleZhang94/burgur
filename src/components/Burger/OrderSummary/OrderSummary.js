import React from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map((igKey,i) =>
         <tr key= {igKey+i}><td style={{ textTransform: 'capitalize' }}>{igKey}</td>  <td>{props.ingredients[igKey]}</td></tr>);

    return (
        <Auxi>
            <h3>Your Order</h3>
            <hr/>
            <p>Delicious Burgur with:</p>
            <tbody>
                <th>Ingredient</th><th>Quantity</th>
                {ingredients}
            </tbody>
            <p>Total Price: <strong>$ {props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType='Danger' clicked={props.cancel}>Cancel</Button>
            <Button btnType='Success'clicked={props.continue}>Submit</Button>
        </Auxi>
    )
}

export default OrderSummary;
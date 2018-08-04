import React from 'react'
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]


const BuildControls = (props) => {
  let sum = 0;
  for (let i in controls) {
    sum += props.ingredients[controls[i].type];
  }

  return (
    <div className={classes.BuildControls}>
      <p>Total Price: $ <strong>{props.totalPrice.toFixed(2)}</strong></p>
      {controls.map(ctrl => <BuildControl quantity={props.ingredients[ctrl.type]} add={() => props.add(ctrl.type)} remove={() => props.remove(ctrl.type)}
        key={ctrl.label} label={ctrl.label} />
      )}
      <button className={classes.OrderButton} onClick={props.purchaseHandler} disabled={sum === 0}>Order NOW!</button>
    </div>
  )
}

export default BuildControls

import React from 'react'
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transfomredIngredients = Object.keys(props.ingredients).map( igkey=>{
      return [...Array(props.ingredients[igkey])].map((y, i) => <BurgerIngredient key={igkey + i} type = {igkey}/>)
    }).reduce((arr, el)=>{
        return arr.concat(el);
    });

    if(transfomredIngredients.length === 0){
        transfomredIngredients = <p>Please start add ingredients</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transfomredIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger

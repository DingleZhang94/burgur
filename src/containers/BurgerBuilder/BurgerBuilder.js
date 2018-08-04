import React, { Component } from 'react'
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6,
}



export default class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0,
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    this.setState((prevState => {
      const newIngredients = {...prevState.ingredients};
      newIngredients[type] += 1;
      return {
        ingredients: newIngredients,
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
      }
    }));
  }

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] === 0){
      return;
    }else{
      this.setState(prevState => {
        const newIngredients = {...prevState.ingredients};
        newIngredients[type] -= 1;
        return {
          ingredients: newIngredients,
          totalPrice : prevState.totalPrice - INGREDIENT_PRICES[type],
        };
      });
    }
  }


  render() {
    return (
      <Auxi>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls add = {this.addIngredientHandler}
                          remove={this.removeIngredientHandler}/>
      </Auxi>
    )
  }
}

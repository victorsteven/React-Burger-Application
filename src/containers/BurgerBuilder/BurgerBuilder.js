import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component { 
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purhasing: false
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  updatePurchaseState (ingredients) {
    // const ingredients = {
    //   ...this.state.ingredients
    // };
    //get the array of the elements
    const sum = Object.keys(ingredients)
        //select the keys 
                .map(igKey => {
                  //get the values of the keys 
                  return ingredients[igKey];
                  //get the sum of all values 
                }).reduce((sum, el) => {
                  return sum + el;
                }, 0);
        // sum is true or false
        this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;


    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients);

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinueHandler = () => {
      alert('You continued!')
  }
  // thePrice = () => {
  //   return this.state.totalPrice.toFixed(2)
  // }

  render () {

    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      console.log('key: ', key);
      console.log('value: ', disabledInfo[key]);
      disabledInfo[key] = disabledInfo[key] < 1
      // if(disabledInfo[key] <= 0){
      //   console.log('yes')
      // }else{
      //   console.log('no')
      // }
    }
   return  (
    <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price ={this.state.totalPrice}
        />
      </Modal>
      <Burger  ingredients={this.state.ingredients}/>
      {/* <div>Build Controls</div> */}
      <BuildControls 
        ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler}
        disabled={disabledInfo}
        purchasable={this.state.purchasable}
        price={this.state.totalPrice}
        ordered={this.purchaseHandler}
      />
    </Aux>
    
   );
  }
}

export default BurgerBuilder;
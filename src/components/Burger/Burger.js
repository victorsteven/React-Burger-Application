import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';


const burger = (props) => {

  // keys return an array, 
  //Object.keys helps to convert an object properties into an array
  console.log('the array: ', Object.keys(props.ingredients)); //["salad", "bacons", "cheese", "meat"], these are the keys
  let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
       //we are more interested in the index not the name, because, we can have cheese1, cheese2, etc
       return [...Array(props.ingredients[igKey])].map((_, i) => {
        //if we dont do {igKey + 1} we will have "2 children with the same key error"
        return <BurgerIngredient key={igKey + i} type={igKey} />
       });
       //we will group the individual arrays into one array
      }).reduce((arr, el) => {
        return arr.concat(el)
        //[] is the intial value
      }, []);
      if(transformedIngredients.length === 0) {
       transformedIngredients = <p>Please start adding ingredients!</p>
      }
      console.log(transformedIngredients)
  return (
   <div className="Burger">
    <BurgerIngredient type="bread-top" />
    {/* <BurgerIngredient type="cheese" />
    <BurgerIngredient type="meat" /> */}
    {transformedIngredients}
    <BurgerIngredient type="bread-bottom" />
   </div>
  );

}

export default burger;
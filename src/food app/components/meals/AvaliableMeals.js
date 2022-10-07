import classes from './AvaliableMeals.module.css'
import React from 'react'
import Card from '../UI/Card'
import MealIteam from './mealiteam/MealIteam'



const AvaliableMeals = () => {

    const Dummy_Meals=[
        {
            id:'m1',
            name:"First Product",
            description:'a',
            price:20.2,
        },
        {
            id:'m2',
            name:"Second Product",
            description:'b',
            price:20.10
        },
        {
            id:'m3',
            name:"Third Product",
            description:'c',
            price:15
        },
        {
            id:'m4',
            name:"Fourth Product",
            description:'d',
            price:70.85
        },
        {
            id:'m5',
            name:"Fifth Product",
            description:'e',
            price:99.99
        }
    ]


const mealsList = Dummy_Meals.map((meal)=>
<MealIteam 
    key={meal.id}
    id = {meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
/>);

  return <section className={classes.meals}>
      <Card>
      <ul>
          {mealsList}
      </ul>
      </Card>
  </section>
}

export default AvaliableMeals
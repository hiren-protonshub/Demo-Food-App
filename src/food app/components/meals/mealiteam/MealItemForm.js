import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef } from 'react'


const MealItemForm = (props) => {

const amountInputRef =  useRef();

const submitHandler = e =>{
  e.preventDefault();
  const enterAmount = amountInputRef.current.value;
  const enterAmountNumber = +enterAmount;

  props.onAddToCart(enterAmountNumber)
}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input   ref={amountInputRef} label='Quantity' 
        input={{
         
            type :'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
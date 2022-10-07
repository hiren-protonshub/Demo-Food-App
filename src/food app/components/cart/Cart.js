
import { useContext  } from 'react'

import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

import CartContext from '../../store/Cart-Context'

import CartItem from './CartItem'

const Cart = (props) => {

const cartCtx = useContext(CartContext)    

const hasItems = cartCtx.item.length > 0; 

const CartItemRemoveHandler =(id)=>{
    cartCtx.removeItem(id)
}
const CartItemAddhandler = (item)=>{
    console.log(item);
    cartCtx.addItem(item);
}


 const cartItem = 
 <ul className={classes['cart-items']}>
     {cartCtx.item.map((item)=>
     <CartItem 
     key={item.id} 
     name={item.name} 
     amount={item.amount} 
     price={item.price}
     onAdd={CartItemAddhandler.bind(null,item)}
     onRemove={CartItemRemoveHandler.bind(null,item.id)}
     />
     )}  
 </ul>
 

  return (
    <Modal onClick={props.onCloseCart}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span> 
            <span>{cartCtx.totalAmount.toFixed(2)}</span>           
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart
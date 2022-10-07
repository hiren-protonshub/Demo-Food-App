import { useReducer } from "react";
import CartContext from "./Cart-Context";
import React from 'react'


const defaultCartState = {
    item:[],
    totalAmount:0
}

const CartReducer = (state,action)=>{
    if(action.type === 'ADD'){

        const newTotalAmount =state.totalAmount + action.item.price * action.item.amount;
        
        const existingCartItemIndex = state.item.findIndex((item)=> item.id === action.item.id);
        console.log("existingCartIndex",existingCartItemIndex);

        const existingCartItem = state.item[existingCartItemIndex];
        console.log("existingCartItem",existingCartItem)

        let updatedItems;

    if(existingCartItem){
        const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
    }
    updatedItems = [...state.item]
    updatedItems[existingCartItemIndex] = updatedItem;
    }
    else{
     updatedItems = state.item.concat(action.item);
    }   
    return {
            item:updatedItems,
            totalAmount:newTotalAmount
        };
    }
    if(action.type === 'REMOVE'){
        
        const existingCartItemIndex = state.item.findIndex((item)=> item.id === action.id);
        
        const existingCartItem = state.item[existingCartItemIndex]

        const updatedtotalamount = state.totalAmount - existingCartItem.price;
        
        let updatedItems;
    if(existingCartItem.amount === 1 ){
    updatedItems = state.item.filter(item =>item.id !== action.id)
    console.log(updatedItems);
    }
    else{
        console.log(existingCartItem.amount);
        const updatedItem ={...existingCartItem,amount:existingCartItem.amount - 1};
        updatedItems=[...state.item];
        updatedItems[existingCartItemIndex]= updatedItem;
    }
    return {   
        item:updatedItems,
        totalAmount:updatedtotalamount}
    }
    
}

const CardProvider = (props) => {

const [cartstate,dispatchCartAction]= useReducer(CartReducer,defaultCartState);

const addIteamCartHandler = item =>{
dispatchCartAction({type:'ADD',item:item});
}

const removeIteamCartHandler = id =>{
dispatchCartAction({type:'REMOVE',id:id})
}




const CartCtx ={
    item:cartstate.item,   
    totalAmount:cartstate.totalAmount,
    addItem:addIteamCartHandler,
    removeItem:removeIteamCartHandler,
}

  return (
    <CartContext.Provider value={CartCtx} >
    {props.children}
    </CartContext.Provider>
  )
}

export default CardProvider
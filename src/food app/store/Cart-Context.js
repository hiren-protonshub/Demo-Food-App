import react from 'react'

const CartContext =   react.createContext({
item:[],
totalAmount :0,
addItem:(item)=>{},
removeItem:(id)=>{}
})

export default CartContext;
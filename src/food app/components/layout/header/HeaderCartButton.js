import {useContext} from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import classes from  './HeaderCartButton.module.css'
import CartContext from '../../../store/Cart-Context';


export const HeaderCartButton = (props) => {
  
 const cartCtx = useContext(CartContext);

 const numberOfCartItem = cartCtx.item.reduce((curNumber,items)=>{
   return curNumber + items.amount;
 },0);
  
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <AddShoppingCartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItem}
        </span>
    </button>
  )
}

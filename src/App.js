import React, { useState } from 'react'
import Cart from './food app/components/cart/Cart'
import Header from './food app/components/layout/header/Header'
import Meals from './food app/components/meals/Meals'
import CardProvider from './food app/store/CardProvider'


const App = () => {
    
  const [cartShown,setCartShown] = useState(false)
  
  const showCartHandler = () =>{
    setCartShown(true);
  }
  
  const hideCartHandler = () =>{
    setCartShown(false)
  }
  return (
    <CardProvider>

      {cartShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meals />        
      </main>
    </CardProvider>
  )
}

export default App
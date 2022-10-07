import React from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const Backdrop = props=>{
    return <div className={classes.backdrop} onClick={props.onClick}> </div>
}

const ModelOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children} </div>
        </div>
      )
}

const Modal = (props) => {
  return <>
    {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>,document.getElementById('overlays'))}
    {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,document.getElementById('overlays'))}
  </>
}


export default Modal
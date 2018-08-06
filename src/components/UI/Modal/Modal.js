import React from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Auxi from '../../../hoc/Auxi';

const Modal = (props) => {
  return (
    <Auxi>
      <Backdrop show={props.show} clicked = {props.purchaseHandler}/>
      <div className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}>
        {props.children}
      </div>
    </Auxi>

  )
}

export default Modal

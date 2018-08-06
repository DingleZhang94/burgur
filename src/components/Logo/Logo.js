import React from 'react';
import Burgerlogo from '../../assets/image/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
        <img src={Burgerlogo} alt="logo"/>
    </div>
  )
}

export default Logo

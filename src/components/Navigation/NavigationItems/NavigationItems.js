import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  return (
    <ul className ={classes.NavigationItems}>
        <NavigationItem active link="/"> Burger Builder</NavigationItem>
        <NavigationItem link ="/" > Check out </NavigationItem>
    </ul>
  )
}

export default NavigationItems

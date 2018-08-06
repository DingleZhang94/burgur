import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Auxi>
        <Toolbar/>
        <main className = {classes.main}>
            {props.children}
        </main>
    </Auxi>
);

export default Layout;
import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';

const Layout = (props) => (
    <Auxi>
        <div>Toolbar,SideDrawer, Backdrop</div>
        <main className = {classes.main}>
            {props.children}
        </main>
    </Auxi>
);

export default Layout;
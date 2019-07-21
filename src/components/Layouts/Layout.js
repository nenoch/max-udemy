import React, { useState } from 'react';
import styles from './Layout.css';
import Navbar from '../Nav/Navbar/Navbar';
import SideDrawer from '../Nav/SideDrawer/SideDrawer';

const Layout = ({
    children
}) => {
    const [sideDrawerStatus, setSideDrawerStatus] = useState(false);

    const closedHandler = () => {
        setSideDrawerStatus(false);
    };

    const openedHandler = () => {
        setSideDrawerStatus(true);
    };

    return (
        <React.Fragment>
            <Navbar openSide={openedHandler} />
            <SideDrawer status={sideDrawerStatus} closeSide={closedHandler} />
            <main className={styles.Content}>
                {children}
            </main>
        </React.Fragment>
    )
};

export default Layout;
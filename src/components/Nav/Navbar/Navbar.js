import React from 'react';
import styles from './Navbar.css';
import Logo from '../../Logo/Logo';
import Menu from '../Navbar/Menu/Menu';
import NavItems from '../NavItems/NavItems';

const Navbar = ({
    openSide
}) => (
        <header className={styles.Navbar}>
            <Menu open={openSide} />
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    );

export default Navbar;
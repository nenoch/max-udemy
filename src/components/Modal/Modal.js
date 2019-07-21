import React from 'react';
import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({
    children,
    show,
    hide
}) => (
        <React.Fragment>
            <Backdrop
                show={show}
                clicked={hide}/>
            <div
                className={styles.Modal}
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)'
                }}
            >
                {children}
            </div>
        </React.Fragment>

    );

export default Modal;
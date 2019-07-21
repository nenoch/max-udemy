import React from 'react';
import styles from './BuildControl.css';

const BuildControl = ({
    label,
    added,
    removed
}) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{label}</div>
        <button className={styles.More} onClick={added}>More</button> 
        <button className={styles.Less} onClick={removed}>Less</button>   
    </div>
);

export default BuildControl;
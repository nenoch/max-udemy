import React from 'react';
import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
];

const BuildControls = ({
    add,
    remove,
    isReady,
    ordering
}) => (
    <div className={styles.BuildControls}>
        {controls.map( c =>
            <BuildControl
                key={c.label}
                label={c.label}
                added={() => add(c.type)}
                removed={() => remove(c.type)}
            /> )}
        <button
            className={styles.OrderButton}
            disabled={!isReady}
            onClick={ordering}
            >ORDER NOW</button>
    </div>
);

export default BuildControls;
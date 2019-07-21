import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({
    ingredients
}) => {
    const ingList = Object.keys(ingredients).map(
        k => [...Array(ingredients[k])].map(
            (_, i) => <BurgerIngredient key={k + i} type={k} />
        )
    ).reduce((arr, current) => arr.concat(current), []);

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingList.length ?
                ingList
                : <p>Add ingredients!</p>
            }
            <BurgerIngredient type='bread-bottom' />
        </div>)
};

export default Burger;
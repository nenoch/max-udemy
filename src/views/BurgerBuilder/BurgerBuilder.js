import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import Summary from '../../components/Burger/Summary/Summary';

const BurgerBuilder = () => {
    const [burgerState, setBurgerState] = useState({
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4,
        isReady: false,
        purchasing: false
    });

    const purchaseHandler = () => {
        setBurgerState({
            ...burgerState,
            purchasing: true
        });
    }

    const cancelPurchaseHandler = () => {
        setBurgerState({
            ...burgerState,
            purchasing: false
        });
    }

    const updateReady = (ingredients) => {
        const total = Object.values(ingredients).reduce((sum, value) => sum + value, 0);
        return total > 0;
    }

    const moreHandler = (type) => {
        const updatedCount = burgerState.ingredients[type] + 1;
        const updatedIngs = { ...burgerState.ingredients };
        updatedIngs[type] = updatedCount;
        setBurgerState({
            ...burgerState,
            ingredients: updatedIngs,
            isReady: updateReady(updatedIngs)
        });
    };

    const lessHandler = (type) => {
        const updatedCount = burgerState.ingredients[type] ? burgerState.ingredients[type] - 1 : 0;
        const updatedIngs = { ...burgerState.ingredients };
        updatedIngs[type] = updatedCount;
        setBurgerState({
            ...burgerState,
            ingredients: updatedIngs,
            isReady: updateReady(updatedIngs)
        });
    };

    return (
        <React.Fragment>
            <Modal
                show={burgerState.purchasing}
                hide={cancelPurchaseHandler}>
                <Summary ingredients={burgerState.ingredients} />
            </Modal>
            <Burger ingredients={burgerState.ingredients} />
            <BuildControls
                add={moreHandler}
                remove={lessHandler}
                isReady={burgerState.isReady}
                ordering={purchaseHandler}
            />
        </React.Fragment>
    )
};

export default BurgerBuilder;
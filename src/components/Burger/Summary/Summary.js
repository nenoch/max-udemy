import React from 'react';

const Summary = ({
    ingredients
}) => {
    const IngrList = Object.keys(ingredients).map(k =>
        <li key={k}>{k}: {ingredients[k]}</li>
    );
    return (
        <React.Fragment>
            <h3>Your summary:</h3>
            <ul>
                {IngrList}
            </ul>
        </React.Fragment>
    )
};

export default Summary;
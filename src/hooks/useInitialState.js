import { useState } from "react";

const initialState = {
    currentAmmount: 0,
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);



    const addToCard = (payLoad) => {
        setState({
            ...state,
            currentAmmount: state.currentAmmount + payLoad.price,
            cart: [...state.cart, payLoad]
        });
    };

    const removeToCard = (product) => {
        const newState = {...state};
        const indexWilldelete = state.cart.findIndex(element => element == product)

        newState.cart.splice(indexWilldelete, 1)

        setState({
            ...state,
            currentAmmount: state.currentAmmount - product.price,
            card: newState
        });
    };

    return {
        state, 
        addToCard, 
        removeToCard
    }
};

export { useInitialState }
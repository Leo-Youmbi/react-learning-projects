export const CartReducer = (state, action) => {
    // eslint-disable-next-line no-debugger
    // debugger;
    let resultState = {...state};
    let index = -1
    if (action.payload)
        index = state.cartItems.findIndex(x => x.id === action.payload.id)
    switch (action.type) {
        case "INCQTY":
        case "ADD": {
            if (index === -1) {
                resultState.cartItems.push({...action.payload, quantity: 1});
            } else {
                resultState.cartItems[index].quantity += 1;
            }
            break;
        }
        case "REMOVE": {
            if (index > -1)
                resultState.cartItems.splice(index, 1);
            break;
        }
        case "DECQTY": {
            if (index > -1)
                resultState.cartItems[index].quantity -= 1;
            break;
        }
        case "CLEAR": {
            resultState.cartItems = [];
            break;
        }
        default: {}
    }
    return resultState;
}
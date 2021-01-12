

const initialState = {
    allItems: [],
    addedItems: [],
    price: 0
}


export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                price: state.price + action.payload
            }
    }
}
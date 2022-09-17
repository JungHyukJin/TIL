import React from 'react';

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    // update, remvoe
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;
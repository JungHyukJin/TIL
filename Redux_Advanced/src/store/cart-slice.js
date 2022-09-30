import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        // totalAmount: 0,
    },
    reducers:{
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    name:newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            };
        },
        removeItem(state, action){
            const removeItem = action.payload; // payload로 제거할 id만 넘길 예정

            const existingItem = state.items.find(item=>item.id === removeItem.id);
            state.totalQuantity--;
            existingItem.totalPrice = existingItem.totalPrice - removeItem.price;

            if(existingItem.quantity === 1){
                // 수량이 1개라면, 제거하는 아이템의 id를 제외한 다른 모든 제품들을 새 배열로 반환
                state.items = state.items.filter(item=> item.id !== removeItem.id);
            } else {
                existingItem.quantity--;

            };
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
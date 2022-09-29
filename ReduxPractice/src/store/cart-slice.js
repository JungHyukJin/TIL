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
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name:newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action){
            const id = action.payload; // payload로 제거할 id만 넘길 예정
            const exisitingItem = state.items.find(item=>item.id === id);
            state.totalQuantity--;
            if(exisitingItem === 1){
                // 수량이 1개라면, 제거하는 아이템의 id를 제외한 다른 모든 제품들을 새 배열로 반환
                state.items = state.items.filter(item=> item.id !== id);
            } else {
                exisitingItem.quantity--;

            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
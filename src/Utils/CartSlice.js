import { createSlice} from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[]

    },
    reducers:{
      addItem:(state,action)=>{
        state.item.push(action.payload)
      },
    //   originalState={item:[]}
      removeItem:(state,action)=>{
        // console.log(current(state))
        state.item.pop()
      },
      clearCart:(state)=>{
        state.item.length=0;   // originalState={item:[]}
        // return {item:[]}
      }
    }
})
export const {addItem,removeItem,clearCart}=CartSlice.actions
export default CartSlice.reducer;
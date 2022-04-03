import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            return {items: [...state.items, actions.payload]}
        },
        removeTodo: (state, actions) => {
            let items = [...state.items]
            items.splice(actions.payload, 1)
            return {items: [...items]}
        },
        clearTodo: () => {
            return initialState
        }
    }
})

export const {addTodo, removeTodo, clearTodo} = todoSlice.actions

export default todoSlice.reducer
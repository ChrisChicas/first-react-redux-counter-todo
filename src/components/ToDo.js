import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, clearTodo } from "../features/todoSlice"

export default function ToDo(){
    const dispatch = useDispatch()
    const items = useSelector(state => state.todo.items)
    const [input, setInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    const displayItems = items.map((item, index) => {return <li key={index} onClick={() => {dispatch(removeTodo(index))}}>{item}</li>})

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => setInput(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {displayItems}
            </ul>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
        </div>
    )
}